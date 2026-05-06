"use client";

import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Royal Canin Sensitive Control",
    price: "Rs 430",
    image: "/assets/cat-food2.png",
  },
  {
    id: 2,
    name: "Royal Litter Lavender Cat Litter",
    price: "Rs 2,700",
    image: "/assets/cat-food1.png",
  },
  {
    id: 3,
    name: "Catit self grooming brush",
    price: "Rs 700",
    image: "/assets/cat-brush.jpeg",
  },
  {
    id: 4,
    name: "King Dog Beef flavor Food",
    price: "Rs 18,000",
    image: "/assets/cat-food3.jpg",
  },
  {
    id: 5,
    name: "Tower of tracks Cat toy",
    price: "Rs 1000",
    image: "/assets/cat-toy1.jpg",
  },
  {
    id: 6,
    name: "Medi Bath(Dry Shampoo)",
    price: "Rs 599",
    image: "/assets/shampoo1.jpg",
  },
];

function ProductCard({ product, mobile = false }) {
  return (
    <div
      className={`
        relative rounded-lg border border-gray-200 bg-white p-3 transition hover:shadow-md
        ${
          mobile
            ? "w-[calc((100vw-48px)/2)] min-w-[calc((100vw-48px)/2)] sm:w-[220px] sm:min-w-[220px]"
            : ""
        }
      `}
    >
      {/* Wishlist */}
      {/* <button
        type="button"
        className="absolute left-3 top-3 z-10 flex h-7 w-7 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-400 transition hover:text-[#9b6cf3]"
        aria-label="Add to wishlist"
      >
        ♡
      </button> */}

      {/* Product Image */}
      <div
        className={`relative mx-auto w-full ${
          mobile ? "h-[125px]" : "h-[140px] sm:h-[150px]"
        }`}
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, 220px"
          className="object-contain"
        />
      </div>

      {/* Rating */}
      <div className="mt-3 text-[12px] text-[#f5b301]">★★★★★</div>

      {/* Name */}
      <h3 className="mt-2 min-h-[40px] text-[13px] font-semibold leading-5 text-black sm:text-[14px]">
        {product.name}
      </h3>

      {/* Price */}
      <p className="mt-2 text-[14px] font-semibold text-[#9b6cf3]">
        {product.price}
      </p>

      {/* Add to Cart */}
      <button
        type="button"
        className="mt-3 flex w-full items-center justify-center rounded-full bg-[#9b6cf3] px-3 py-2 text-[11px] font-semibold text-white transition hover:bg-[#8758e8] sm:text-[12px]"
      >
        ADD TO CART
      </button>
    </div>
  );
}

export default function NewArrivals() {
  return (
    <section className="w-full bg-white py-10 md:py-14">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-10">
        {/* Heading */}
        <div className="mb-6 md:mb-8 text-center">
          <h2 className="text-3xl font-extrabold tracking-wide text-black md:text-4xl">
            New Arrivals{" "}
            <span className="text-[#9b6cf3]">
              Products{" "}
              <span className="inline-block -translate-y-2 text-xl">🐾</span>
            </span>
          </h2>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[320px_1fr]">
          {/* Left Big Image */}
          <div className="relative overflow-hidden rounded-[20px]">
            <div className="relative h-[220px] w-full sm:h-[260px] lg:h-full lg:min-h-[600px]">
              <Image
                src="/assets/cat-dog.jpg"
                alt="Featured Bird"
                fill
                sizes="(max-width: 1024px) 100vw, 320px"
                className="object-cover "
              />
            </div>
          </div>

          {/* Desktop Products Grid */}
          <div className="hidden grid-cols-3 gap-4 lg:grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Mobile Horizontal Scroll Products */}
          <div
            className="
              flex gap-3 overflow-x-auto pb-3 lg:hidden
              snap-x snap-mandatory
              [-ms-overflow-style:none] [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
            "
          >
            {products.map((product) => (
              <div key={product.id} className="snap-start">
                <ProductCard product={product} mobile />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}