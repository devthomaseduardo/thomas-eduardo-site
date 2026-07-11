"use client"

import { motion } from "framer-motion"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css"

import { cn } from "@/lib/utils"
import Image from "next/image"
import { PROJECTS } from "@/lib/data"

const IMAGES = PROJECTS.map((project) => ({
  src: project.image,
  alt: project.title,
}))

export function OliverParallax() {
  return (
    <section className="relative overflow-hidden border-t border-border/15 bg-background py-10 sm:py-14 md:py-16">
      <div className="site-shell mb-5 sm:mb-8">
        <span className="label-kicker mb-2 block sm:mb-3">Galeria</span>
        <h2 className="text-h2 max-w-xl text-foreground">
          <span className="sm:hidden">Galeria visual.</span>
          <span className="hidden sm:inline">Interface e arquitetura em profundidade.</span>
        </h2>
      </div>

      <div className="flex w-full items-center justify-center overflow-hidden">
        <Carousel_001
          className="site-shell-wide w-full"
          images={IMAGES}
          showPagination
          loop
          autoplay
        />
      </div>
    </section>
  )
}

const Carousel_001 = ({
  images,
  className,
  showPagination = false,
  showNavigation = true,
  loop = true,
  autoplay = false,
  spaceBetween = 28,
}: {
  images: { src: string; alt: string }[]
  className?: string
  showPagination?: boolean
  showNavigation?: boolean
  loop?: boolean
  autoplay?: boolean
  spaceBetween?: number
}) => {
  const css = `
  .Carousal_001 { padding-bottom: 40px !important; }
  .swiper-pagination-bullet { background: #fff !important; opacity: 0.35; }
  .swiper-pagination-bullet-active { opacity: 1; background: #ffffff !important; }
  `
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 16 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: 0.1 }}
      className={cn("relative w-full", className)}
    >
      <style>{css}</style>

      <Swiper
        spaceBetween={spaceBetween}
        autoplay={
          autoplay
            ? { delay: 2800, disableOnInteraction: false }
            : false
        }
        effect="coverflow"
        grabCursor
        centeredSlides
        loop={loop}
        breakpoints={{
          320: { slidesPerView: 1.15, spaceBetween: 16 },
          640: { slidesPerView: 1.45, spaceBetween: 22 },
          1024: { slidesPerView: 2.2, spaceBetween: 28 },
        }}
        coverflowEffect={{
          rotate: 0,
          slideShadows: true,
          stretch: 0,
          depth: 80,
          modifier: 2.2,
        }}
        pagination={showPagination ? { clickable: true } : false}
        navigation={
          showNavigation
            ? { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }
            : false
        }
        className="Carousal_001"
        modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
      >
        {images.map((image, index) => (
          <SwiperSlide
            key={index}
            className="!h-[200px] w-full overflow-hidden rounded-xl border border-white/10 bg-card sm:!h-[280px] md:!h-[320px]"
          >
            <Image
              className="h-full w-full object-cover"
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </SwiperSlide>
        ))}
        {showNavigation && (
          <div className="hidden sm:block">
            <div className="swiper-button-next after:hidden !right-3 flex !h-10 !w-10 items-center justify-center rounded-full border border-white/10 bg-background/50 backdrop-blur-md">
              <ChevronRightIcon className="h-5 w-5 text-white" />
            </div>
            <div className="swiper-button-prev after:hidden !left-3 flex !h-10 !w-10 items-center justify-center rounded-full border border-white/10 bg-background/50 backdrop-blur-md">
              <ChevronLeftIcon className="h-5 w-5 text-white" />
            </div>
          </div>
        )}
      </Swiper>
    </motion.div>
  )
}
