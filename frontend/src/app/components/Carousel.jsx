"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectCreative } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-creative";

const slides = [
  {
    id: 1,
    bg: "bg-[#f3edf5]",
    title: "Smart Essentials for Happy, Comfy Pets",
    desc: "Discover practical pet products that make everyday life easier — from retractable dog gates and extra-large beds to quiet water fountains and stress-free grooming tools. Everything is chosen to keep your furry friend relaxed, safe, and comfortable.",
    btn: "SHOP BEST SELLERS",
    blobText: "Find the Best Products for Your Furry Friend",
    foodImg: "/assets/food1.png",
    pets: [
      {
        src: "/assets/cat1.png",
        alt: "Bird",
        bg: "bg-[#bdd5f7]",
        pos: "top-[50px] left-[5px] sm:top-[75px] sm:left-[15px] md:top-[50px] md:left-[5px] lg:top-[75px] lg:left-[15px] xl:top-[115px] xl:left-[5px]",
        size: "w-[75px] h-[100px] sm:w-[100px] sm:h-[135px] md:w-[75px] md:h-[100px] lg:w-[100px] lg:h-[135px] xl:w-[145px] xl:h-[190px]",
        rotate: "-rotate-[18deg]",
      },
      {
        src: "/assets/cat2.png",
        alt: "Cat",
        bg: "bg-[#f5d889]",
        pos: "top-[0px] left-[85px] sm:top-[0px] sm:left-[125px] md:top-[0px] md:left-[85px] lg:top-[0px] lg:left-[125px] xl:top-[0px] xl:left-[160px]",
        size: "w-[75px] h-[110px] sm:w-[100px] sm:h-[145px] md:w-[75px] md:h-[110px] lg:w-[100px] lg:h-[145px] xl:w-[145px] xl:h-[200px]",
        rotate: "-rotate-[6deg]",
      },
      {
        src: "/assets/dog5.png",
        alt: "Pug",
        bg: "bg-[#c7b5ee]",
        pos: "top-[0px] left-[170px] sm:top-[0px] sm:left-[235px] md:top-[0px] md:left-[170px] lg:top-[0px] lg:left-[235px] xl:top-[0px] xl:left-[315px]",
        size: "w-[75px] h-[110px] sm:w-[100px] sm:h-[145px] md:w-[75px] md:h-[110px] lg:w-[100px] lg:h-[145px] xl:w-[145px] xl:h-[200px]",
        rotate: "rotate-[4deg]",
      },
      {
        src: "/assets/dog4.png",
        alt: "Dog",
        bg: "bg-[#f3c8b6]",
        pos: "top-[50px] left-[250px] sm:top-[75px] sm:left-[345px] md:top-[50px] md:left-[250px] lg:top-[75px] lg:left-[345px] xl:top-[115px] xl:left-[455px]",
        size: "w-[75px] h-[100px] sm:w-[100px] sm:h-[135px] md:w-[75px] md:h-[100px] lg:w-[100px] lg:h-[135px] xl:w-[145px] xl:h-[190px]",
        rotate: "rotate-[18deg]",
      },
    ],
  },
  {
    id: 2,
    bg: "bg-[#eef7f4]",
    title: "Healthy Food & Fun Accessories for Every Pet",
    desc: "Shop premium nutrition, comfy beds, feeding bowls, playful toys, and everyday accessories carefully chosen to keep your furry family happy and active.",
    btn: "EXPLORE COLLECTION",
    blobText: "Everything Your Pet Needs in One Place",
    foodImg: "/assets/food7.png",
    pets: [
      {
        src: "/assets/cat1.png",
        alt: "Bird",
        bg: "bg-[#bdd5f7]",
        pos: "top-[50px] left-[5px] sm:top-[75px] sm:left-[15px] md:top-[50px] md:left-[5px] lg:top-[75px] lg:left-[15px] xl:top-[115px] xl:left-[5px]",
        size: "w-[75px] h-[100px] sm:w-[100px] sm:h-[135px] md:w-[75px] md:h-[100px] lg:w-[100px] lg:h-[135px] xl:w-[145px] xl:h-[190px]",
        rotate: "-rotate-[18deg]",
      },
      {
        src: "/assets/cat2.png",
        alt: "Cat",
        bg: "bg-[#f5d889]",
        pos: "top-[0px] left-[85px] sm:top-[0px] sm:left-[125px] md:top-[0px] md:left-[85px] lg:top-[0px] lg:left-[125px] xl:top-[0px] xl:left-[160px]",
        size: "w-[75px] h-[110px] sm:w-[100px] sm:h-[145px] md:w-[75px] md:h-[110px] lg:w-[100px] lg:h-[145px] xl:w-[145px] xl:h-[200px]",
        rotate: "-rotate-[6deg]",
      },
      {
        src: "/assets/dog5.png",
        alt: "Pug",
        bg: "bg-[#c7b5ee]",
        pos: "top-[0px] left-[170px] sm:top-[0px] sm:left-[235px] md:top-[0px] md:left-[170px] lg:top-[0px] lg:left-[235px] xl:top-[0px] xl:left-[315px]",
        size: "w-[75px] h-[110px] sm:w-[100px] sm:h-[145px] md:w-[75px] md:h-[110px] lg:w-[100px] lg:h-[145px] xl:w-[145px] xl:h-[200px]",
        rotate: "rotate-[4deg]",
      },
      {
        src: "/assets/dog4.png",
        alt: "Dog",
        bg: "bg-[#f3c8b6]",
        pos: "top-[50px] left-[250px] sm:top-[75px] sm:left-[345px] md:top-[50px] md:left-[250px] lg:top-[75px] lg:left-[345px] xl:top-[115px] xl:left-[455px]",
        size: "w-[75px] h-[100px] sm:w-[100px] sm:h-[135px] md:w-[75px] md:h-[100px] lg:w-[100px] lg:h-[135px] xl:w-[145px] xl:h-[190px]",
        rotate: "rotate-[18deg]",
      },
    ],
  },
  {
    id: 3,
    bg: "bg-[#fdf3ec]",
    title: "Make Everyday Pet Care Easy and Beautiful",
    desc: "From tasty food to stylish accessories, discover smart products designed for comfort, cleanliness, safety, and joyful daily routines for your pets.",
    btn: "SHOP NOW",
    blobText: "Comfort, Care & Style for Your Furry Friend",
    foodImg: "/assets/three1.png",
    pets: [
      {
        src: "/assets/cat1.png",
        alt: "Bird",
        bg: "bg-[#bdd5f7]",
        pos: "top-[50px] left-[5px] sm:top-[75px] sm:left-[15px] md:top-[50px] md:left-[5px] lg:top-[75px] lg:left-[15px] xl:top-[115px] xl:left-[5px]",
        size: "w-[75px] h-[100px] sm:w-[100px] sm:h-[135px] md:w-[75px] md:h-[100px] lg:w-[100px] lg:h-[135px] xl:w-[145px] xl:h-[190px]",
        rotate: "-rotate-[18deg]",
      },
      {
        src: "/assets/cat2.png",
        alt: "Cat",
        bg: "bg-[#f5d889]",
        pos: "top-[0px] left-[85px] sm:top-[0px] sm:left-[125px] md:top-[0px] md:left-[85px] lg:top-[0px] lg:left-[125px] xl:top-[0px] xl:left-[160px]",
        size: "w-[75px] h-[110px] sm:w-[100px] sm:h-[145px] md:w-[75px] md:h-[110px] lg:w-[100px] lg:h-[145px] xl:w-[145px] xl:h-[200px]",
        rotate: "-rotate-[6deg]",
      },
      {
        src: "/assets/dog5.png",
        alt: "Pug",
        bg: "bg-[#c7b5ee]",
        pos: "top-[0px] left-[170px] sm:top-[0px] sm:left-[235px] md:top-[0px] md:left-[170px] lg:top-[0px] lg:left-[235px] xl:top-[0px] xl:left-[315px]",
        size: "w-[75px] h-[110px] sm:w-[100px] sm:h-[145px] md:w-[75px] md:h-[110px] lg:w-[100px] lg:h-[145px] xl:w-[145px] xl:h-[200px]",
        rotate: "rotate-[4deg]",
      },
      {
        src: "/assets/dog4.png",
        alt: "Dog",
        bg: "bg-[#f3c8b6]",
        pos: "top-[50px] left-[250px] sm:top-[75px] sm:left-[345px] md:top-[50px] md:left-[250px] lg:top-[75px] lg:left-[345px] xl:top-[115px] xl:left-[455px]",
        size: "w-[75px] h-[100px] sm:w-[100px] sm:h-[135px] md:w-[75px] md:h-[100px] lg:w-[100px] lg:h-[135px] xl:w-[145px] xl:h-[190px]",
        rotate: "rotate-[18deg]",
      },
    ],
  },
];

export default function HeroCarousel() {
  return (
    <section className="relative overflow-hidden">
      {/* Navigation Buttons */}
      <button
        type="button"
        className="hero-carousel-prev absolute left-3 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-2xl text-white transition hover:bg-black md:left-5 md:h-12 md:w-12"
        aria-label="Previous Slide"
      >
        ‹
      </button>

      <button
        type="button"
        className="hero-carousel-next absolute right-3 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-2xl text-white transition hover:bg-black md:right-5 md:h-12 md:w-12"
        aria-label="Next Slide"
      >
        ›
      </button>

      <Swiper
        modules={[Navigation, Autoplay, EffectCreative]}
        loop={true}
        speed={900}
        grabCursor={true}
        simulateTouch={true}
        allowTouchMove={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        effect="creative"
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ["-15%", 0, -1],
            scale: 0.96,
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        navigation={{
          prevEl: ".hero-carousel-prev",
          nextEl: ".hero-carousel-next",
        }}
        className="w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className={`relative min-h-[720px] overflow-hidden sm:min-h-[820px] md:min-h-[620px] lg:min-h-[680px] xl:min-h-[760px] ${slide.bg}`}
            >
              {/* Watermark */}
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <span className="select-none text-[60px] font-black tracking-[0.08em] text-black/[0.04] sm:text-[90px] md:text-[110px] lg:text-[140px] xl:text-[180px]">
                  ESSENTIALS
                </span>
              </div>

              {/* Small paw icons */}
              <span className="absolute right-8 top-4 text-3xl text-black/50">🐾</span>
              <span className="absolute left-8 bottom-24 text-3xl text-black/10">🐾</span>
              <span className="absolute right-12 bottom-20 text-3xl text-black/15">🐾</span>

              <div className="relative z-10 mx-auto max-w-7xl px-6 py-12 sm:px-10 md:px-8 lg:px-12 xl:px-16">
                <div className="grid min-h-[600px] items-center gap-12 md:min-h-[520px] md:grid-cols-2 lg:gap-14 xl:gap-16">
                  {/* Left Content */}
                  <div className="max-w-xl text-center md:text-left mx-auto md:mx-0">
                    <h2 className="text-4xl font-extrabold leading-[1.25] text-black sm:text-5xl md:text-4xl lg:text-5xl xl:text-[56px]">
                      {slide.title}
                    </h2>

                    <p className="mt-6 text-base leading-relaxed text-black/75 sm:text-lg md:text-base lg:text-lg xl:text-[18px]">
                      {slide.desc}
                    </p>

                    <button
                      type="button"
                      className="mt-8 rounded-full bg-[#9a67ea] px-8 py-3 text-sm font-semibold tracking-wide text-white shadow-md transition hover:bg-[#8756d6]"
                    >
                      {slide.btn}
                    </button>
                  </div>

                  {/* Right Visual */}
                  <div className="relative mx-auto w-full h-[350px] max-w-[340px] sm:h-[420px] sm:max-w-[460px] md:h-[350px] md:max-w-[340px] lg:h-[420px] lg:max-w-[460px] xl:h-[520px] xl:max-w-[620px]">
                    {/* Paw-shape pet ovals */}
                    {slide.pets.map((pet, idx) => (
                      <div
                        key={idx}
                        className={`absolute ${pet.pos} ${pet.size} ${pet.rotate} ${pet.bg} overflow-hidden shadow-md transition-all duration-300`}
                        style={{
                          borderRadius: "48% 52% 45% 55% / 58% 58% 42% 42%",
                        }}
                      >
                        <Image
                          src={pet.src}
                          alt={pet.alt}
                          fill
                          className="w-[30%] object-cover position-center"
                        />
                      </div>
                    ))}

                    {/* Main Paw Blob */}
                    <div
                      className="absolute flex items-center justify-center text-center text-white shadow-lg bg-[#ff5a00] transition-all duration-300
                        bottom-[40px] left-[5%] h-[160px] w-[90%] px-4
                        sm:bottom-[45px] sm:left-[10%] sm:h-[200px] sm:w-[80%] sm:px-8
                        md:bottom-[40px] md:left-[5%] md:h-[160px] md:w-[90%] md:px-4
                        lg:bottom-[45px] lg:left-[10%] lg:h-[200px] lg:w-[80%] lg:px-8
                        xl:bottom-[20px] xl:left-[120px] xl:h-[270px] xl:w-[390px]"
                      style={{
                        borderRadius: "44% 56% 38% 62% / 34% 34% 66% 66%",
                      }}
                    >
                      <h3 className="font-bold leading-snug text-xl sm:text-3xl md:text-xl lg:text-3xl xl:text-[38px]">
                        {slide.blobText}
                      </h3>
                    </div>

                    {/* Bowl */}
                    <div className="absolute bottom-0 transition-all duration-300
                        left-[3%] w-[40%] bottom-[-10%]
                        sm:left-[30px] sm:w-[130px] sm:bottom--[10%]
                        md:left-[10px] md:w-[100px] md:bottom-[-10%]
                        lg:left-[10px] lg:w-[130px] lg:bottom-[-10%]
                        xl:left-[1%] xl:w-[190px] xl:bottom-[-10%]">
                      <Image
                        src={slide.foodImg}
                        alt="Pet Food"
                        width={260}
                        height={220}
                        className="h-auto w-full object-contain drop-shadow-xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}