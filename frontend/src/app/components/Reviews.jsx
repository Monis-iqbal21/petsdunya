"use client";

import { useState } from "react";
import Image from "next/image";

const reviews = [
  {
    id: 1,
    name: "Emily Roberts",
    image: "/assets/avatar.jpg",
    rating: 5,
    text: "The quiet pet fountain has been a game changer for my cat. It’s actually as silent as they promised and my cat now drinks much more water. I’ll definitely be ordering again from The Pet Slot.",
  },
  {
    id: 2,
    name: "Sarah Mitchell",
    image: "/assets/avatar.jpg",
    rating: 5,
    text: "Amazing quality products and very fast delivery. The pet bed is super soft, easy to clean, and my dog refuses to sleep anywhere else now.",
  },
  {
    id: 3,
    name: "Daniel Carter",
    image: "/assets/avatar.jpg",
    rating: 5,
    text: "I ordered toys and grooming brushes for my pets. Everything looked premium, arrived safely packed, and the prices were really good.",
  },
];

export default function CustomerReviews() {
  const [activeReview, setActiveReview] = useState(0);

  const nextReview = () => {
    setActiveReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setActiveReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const review = reviews[activeReview];

  return (
    <section className="relative w-full overflow-hidden bg-[#210022]">
      <div className="relative min-h-[430px] md:min-h-[470px]">
        {/* Background Image */}
        <Image
          src="/assets/review-bg.png"
          alt="Happy cat"
          fill
          priority
          className="object-cover object-left"
        />

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/5 via-black/35 to-black/75" />

        {/* Content */}
        <div className="relative z-10 mx-auto flex min-h-[430px] max-w-7xl items-center px-4 py-12 sm:px-6 md:min-h-[470px] md:px-10">
          <div className="ml-auto w-full max-w-[520px]">
            {/* Review Card */}
            <div className="relative rounded-2xl bg-black px-7 pb-8 pt-14 text-white shadow-2xl sm:px-9">
              {/* Customer Image */}
              <div className="absolute -top-9 left-8 h-16 w-16 overflow-hidden rounded-full border-4 border-[#269fe8] bg-white shadow-lg">
                <Image
                  src={review.image}
                  alt={review.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Quote Icon */}
              <div className="absolute right-8 top-7 text-6xl font-black leading-none text-white/35">
                ”
              </div>

              {/* Previous Button */}
              <button
                onClick={prevReview}
                className="
                  absolute -left-5 top-1/2 flex h-10 w-10 -translate-y-1/2
                  items-center justify-center rounded-full bg-white text-2xl
                  font-bold text-black shadow-lg transition hover:bg-[#9b6cf3] hover:text-white
                "
                aria-label="Previous review"
              >
                ‹
              </button>

              {/* Next Button */}
              <button
                onClick={nextReview}
                className="
                  absolute -right-5 top-1/2 flex h-10 w-10 -translate-y-1/2
                  items-center justify-center rounded-full bg-white text-2xl
                  font-bold text-black shadow-lg transition hover:bg-[#9b6cf3] hover:text-white
                "
                aria-label="Next review"
              >
                ›
              </button>

              <p className="relative z-10 text-sm leading-7 text-white/90 sm:text-[15px]">
                {review.text}
              </p>

              <div className="mt-5 text-sm text-[#ffc107]">
                {"★".repeat(review.rating)}
              </div>

              <h4 className="mt-2 text-sm font-semibold text-white/70">
                {review.name}
              </h4>

              {/* Dots */}
              <div className="mt-5 flex gap-2">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveReview(index)}
                    className={`h-2 rounded-full transition-all ${
                      activeReview === index
                        ? "w-7 bg-[#9b6cf3]"
                        : "w-2 bg-white/30 hover:bg-white/60"
                    }`}
                    aria-label={`Go to review ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}