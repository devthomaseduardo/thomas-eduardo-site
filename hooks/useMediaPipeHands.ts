import { useEffect, useRef, useState, useCallback } from 'react';

// MediaPipe Hands - Gesture to Video Scrubber
// Maps hand position (especially index finger or palm center) to video.currentTime

export interface MediaPipeHandsOptions {
  videoRef: React.RefObject<HTMLVideoElement>;
  enabled?: boolean;
  onHandDetected?: (detected: boolean) => void;
}

export function useMediaPipeHands({ videoRef, enabled = true, onHandDetected }: MediaPipeHandsOptions) {
  const [isHandTracking, setIsHandTracking] = useState(false);
  const [handPosition, setHandPosition] = useState<{ x: number; y: number } | null>(null);
  const handsRef = useRef<any>(null);
  const cameraRef = useRef<any>(null);
  const animationFrameRef = useRef<number | null>(null);

  const updateVideoTime = useCallback((normalizedX: number) => {
    const video = videoRef.current;
    if (!video || video.seeking || !video.duration) return;

    // Map hand X (0 left → 1 right) to video time
    const targetTime = normalizedX * video.duration;

    // Throttle
    if (Math.abs(targetTime - video.currentTime) < 0.06) return;

    video.currentTime = targetTime;
  }, [videoRef]);

  const onResults = useCallback((results: any) => {
    if (!results.multiHandLandmarks || results.multiHandLandmarks.length === 0) {
      setIsHandTracking(false);
      onHandDetected?.(false);
      return;
    }

    setIsHandTracking(true);
    onHandDetected?.(true);

    // Use the first detected hand (index finger tip or palm center)
    const landmarks = results.multiHandLandmarks[0];
    
    // Index finger tip (landmark 8) is very precise for pointing
    // Or use wrist (0) or palm center approximation
    const indexTip = landmarks[8]; // Index finger tip
    
    if (indexTip) {
      const normalizedX = Math.max(0, Math.min(1, indexTip.x));
      setHandPosition({ x: normalizedX, y: indexTip.y });
      updateVideoTime(normalizedX);
    }
  }, [updateVideoTime, onHandDetected]);

  const initializeMediaPipe = useCallback(async () => {
    if (!enabled || typeof window === 'undefined') return;

    try {
      // Dynamic import to avoid SSR issues
      const { Hands } = await import('@mediapipe/hands');
      const { Camera } = await import('@mediapipe/camera_utils');

      const hands = new Hands({
        locateFile: (file: string) => {
          return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
        }
      });

      hands.setOptions({
        maxNumHands: 1,
        modelComplexity: 1,
        minDetectionConfidence: 0.7,
        minTrackingConfidence: 0.7
      });

      hands.onResults(onResults);
      handsRef.current = hands;

      // Start camera
      const videoElement = document.createElement('video');
      videoElement.style.display = 'none';
      document.body.appendChild(videoElement);

      const camera = new Camera(videoElement, {
        onFrame: async () => {
          if (handsRef.current) {
            await handsRef.current.send({ image: videoElement });
          }
        },
        width: 640,
        height: 480
      });

      await camera.start();
      cameraRef.current = camera;

      setIsHandTracking(true);
    } catch (error) {
      console.warn('MediaPipe Hands initialization failed:', error);
      // Silent fallback - mouse control still works
    }
  }, [enabled, onResults]);

  useEffect(() => {
    if (enabled) {
      initializeMediaPipe();
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (cameraRef.current) {
        cameraRef.current.stop();
      }
      if (handsRef.current) {
        handsRef.current.close();
      }
    };
  }, [enabled, initializeMediaPipe]);

  return {
    isHandTracking,
    handPosition,
  };
}
