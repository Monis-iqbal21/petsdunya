"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const carouselImages = [
  {
    id: 1,
    src: "/assets/cr1.jpg",
    alt: "Two cats",
  },
  {
    id: 2,
    src: "/assets/dr1.jpg",
    alt: "Dog with basketball",
  },
  {
    id: 3,
    src: "/assets/cr3.jpg",
    alt: "Boy with dog on beach",
  },
  {
    id: 4,
    src: "/assets/dr2.jpg",
    alt: "Pet image 1",
  },
  {
    id: 5,
    src: "/assets/cr4.jpg",
    alt: "Pet image 2",
  },
];

export default function CircularImageCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const dragStartX = useRef(0);
  const dragEndX = useRef(0);
  const autoPlayRef = useRef(null);

  const total = carouselImages.length;

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const startAutoPlay = () => {
    stopAutoPlay();

    autoPlayRef.current = setInterval(() => {
      nextSlide();
    }, 3500);
  };

  const stopAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  };

  useEffect(() => {
    startAutoPlay();

    return () => stopAutoPlay();
  }, []);

  const handleDragStart = (clientX) => {
    setIsDragging(true);
    dragStartX.current = clientX;
    dragEndX.current = clientX;
    stopAutoPlay();
  };

  const handleDragMove = (clientX) => {
    if (!isDragging) return;
    dragEndX.current = clientX;
  };

  const handleDragEnd = () => {
    if (!isDragging) return;

    const distance = dragStartX.current - dragEndX.current;
    const swipeThreshold = 50;

    if (distance > swipeThreshold) {
      nextSlide();
    } else if (distance < -swipeThreshold) {
      prevSlide();
    }

    setIsDragging(false);
    startAutoPlay();
  };

  const getPositionClass = (index) => {
    const diff = (index - activeIndex + total) % total;

    if (diff === 0) {
      return "z-30 scale-100 translate-x-0 opacity-100 rotate-0";
    }

    if (diff === 1) {
      return "z-20 scale-90 translate-x-[58%] opacity-80 rotate-[5deg]";
    }

    if (diff === 2) {
      return "z-10 scale-75 translate-x-[105%] opacity-35 rotate-[10deg]";
    }

    if (diff === total - 1) {
      return "z-20 scale-90 -translate-x-[58%] opacity-80 rotate-[-5deg]";
    }

    if (diff === total - 2) {
      return "z-10 scale-75 -translate-x-[105%] opacity-35 rotate-[-10deg]";
    }

    return "z-0 scale-50 translate-x-0 opacity-0";
  };

  return (
    <section className="w-full bg-white py-12 md:py-16 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 md:px-10">
        {/* Heading */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-wide text-black">
            Happy Pets{" "}
            <span className="text-[#9b6cf3]">
              Gallery{" "}
              <span className="inline-block -translate-y-2 text-xl">🐾</span>
            </span>
          </h2>
        </div>

        {/* Carousel */}
        <div
          className={`
            relative mx-auto flex h-[360px] max-w-5xl items-center justify-center
            select-none touch-pan-y
            sm:h-[430px] md:h-[500px]
            ${isDragging ? "cursor-grabbing" : "cursor-grab"}
          `}
          onMouseDown={(e) => handleDragStart(e.clientX)}
          onMouseMove={(e) => handleDragMove(e.clientX)}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
          onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
          onTouchEnd={handleDragEnd}
        >
          {carouselImages.map((image, index) => (
            <div
              key={image.id}
              className={`
                absolute h-[300px] w-[220px]
                overflow-hidden rounded-3xl bg-white shadow-2xl
                transition-all duration-700 ease-in-out
                pointer-events-none
                sm:h-[360px] sm:w-[270px]
                md:h-[440px] md:w-[330px]
                ${getPositionClass(index)}
              `}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                draggable={false}
                className="object-cover"
                priority={index === activeIndex}
              />

              {/* Soft overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
            </div>
          ))}

          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="
              absolute left-2 top-1/2 z-40 flex h-11 w-11 -translate-y-1/2
              items-center justify-center rounded-full bg-white/90 text-3xl
              font-bold text-black shadow-lg transition hover:bg-[#9b6cf3] hover:text-white
              md:left-6
            "
            aria-label="Previous image"
          >
            ‹
          </button>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="
              absolute right-2 top-1/2 z-40 flex h-11 w-11 -translate-y-1/2
              items-center justify-center rounded-full bg-white/90 text-3xl
              font-bold text-black shadow-lg transition hover:bg-[#9b6cf3] hover:text-white
              md:right-6
            "
            aria-label="Next image"
          >
            ›
          </button>
        </div>

        {/* Dots */}
        <div className="mt-6 flex justify-center gap-2">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveIndex(index);
                startAutoPlay();
              }}
              className={`h-2.5 rounded-full transition-all ${
                activeIndex === index
                  ? "w-8 bg-[#9b6cf3]"
                  : "w-2.5 bg-gray-300 hover:bg-[#9b6cf3]/60"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}