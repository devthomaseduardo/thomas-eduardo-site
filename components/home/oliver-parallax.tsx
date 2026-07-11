"use client";

import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/effect-cards";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { PROJECTS } from "@/lib/data";

const IMAGES = PROJECTS.map((project) => ({
  src: project.image,
  alt: project.title,
}));

export function OliverParallax() {
  return (
    <section className="relative bg-background py-20 overflow-hidden border-t border-border/10">
      <div className="mx-auto max-w-7xl px-6 mb-16">
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-blue-400 block mb-3">
          / Galeria Visual
        </span>
        <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-foreground max-w-2xl leading-[1.1]">
          Interface, código e arquitetura em profundidade.
        </h2>
      </div>

      <div className="flex w-full items-center justify-center overflow-hidden bg-background">
        <Carousel_001 className="w-full max-w-6xl" images={IMAGES} showPagination loop autoplay />
      </div>
    </section>
  );
}

const Carousel_001 = ({
  images,
  className,
  showPagination = false,
  showNavigation = true,
  loop = true,
  autoplay = false,
  spaceBetween = 40,
}: {
  images: { src: string; alt: string }[];
  className?: string;
  showPagination?: boolean;
  showNavigation?: boolean;
  loop?: boolean;
  autoplay?: boolean;
  spaceBetween?: number;
}) => {
  const css = `
  .Carousal_001 {
    padding-bottom: 50px !important;
  }
  .swiper-pagination-bullet {
    background: #fff !important;
    opacity: 0.5;
  }
  .swiper-pagination-bullet-active {
    opacity: 1;
  }
  `;
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.5,
        delay: 0.2,
      }}
      className={cn("w-full relative", className)}
    >
      <style>{css}</style>

      <Swiper
        spaceBetween={spaceBetween}
        autoplay={
          autoplay
            ? {
                delay: 2500,
                disableOnInteraction: false,
              }
            : false
        }
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={loop}
        breakpoints={{
          320: { slidesPerView: 1.2, spaceBetween: 20 },
          640: { slidesPerView: 1.5, spaceBetween: 30 },
          1024: { slidesPerView: 2.43, spaceBetween: 40 },
        }}
        coverflowEffect={{
          rotate: 0,
          slideShadows: true,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={
          showPagination
            ? {
                clickable: true,
              }
            : false
        }
        navigation={
          showNavigation
            ? {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }
            : false
        }
        className="Carousal_001"
        modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="!h-[320px] sm:!h-[450px] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-card">
            <Image
              className="h-full w-full object-cover filter contrast-[1.03]"
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </SwiperSlide>
        ))}
        {showNavigation && (
          <div className="hidden sm:block">
            <div className="swiper-button-next after:hidden bg-background/50 backdrop-blur-md border border-white/10 rounded-full w-12 h-12 flex items-center justify-center !right-4">
              <ChevronRightIcon className="h-6 w-6 text-white" />
            </div>
            <div className="swiper-button-prev after:hidden bg-background/50 backdrop-blur-md border border-white/10 rounded-full w-12 h-12 flex items-center justify-center !left-4">
              <ChevronLeftIcon className="h-6 w-6 text-white" />
            </div>
          </div>
        )}
      </Swiper>
    </motion.div>
  );
};
