"use client";

import Image from "next/image";

const featuredProducts = [
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
        group
        ${
          mobile
            ? "w-[calc((100vw-48px)/2)] min-w-[calc((100vw-48px)/2)] sm:w-[220px] sm:min-w-[220px]"
            : ""
        }
      `}
    >
      <div
        className={`
          relative flex w-full items-center justify-center
          rounded-xl border border-gray-200 bg-white p-4
          transition-all duration-300
          hover:-translate-y-1 hover:border-[#9b6cf3]/40 hover:shadow-lg
          ${mobile ? "h-[175px] sm:h-[210px]" : "h-[210px] sm:h-[230px] lg:h-[240px]"}
        `}
      >
        {/* Wishlist */}
        <button
          type="button"
          className="
            absolute left-3 top-3 z-10 flex h-8 w-8 items-center justify-center
            rounded-full border border-gray-200 bg-white text-lg text-gray-400
            shadow-sm transition hover:border-[#9b6cf3] hover:text-[#9b6cf3]
          "
          aria-label="Add to Wishlist"
        >
          ♡
        </button>

        <Image
          src={product.image}
          alt={product.name}
          width={190}
          height={190}
          sizes="(max-width: 768px) 50vw, 220px"
          className={`
            w-auto object-contain
            transition-transform duration-300 group-hover:scale-105
            ${mobile ? "max-h-[125px] sm:max-h-[155px]" : "max-h-[155px] sm:max-h-[170px] lg:max-h-[185px]"}
          `}
        />
      </div>

      <div className="pt-4">
        <div className="text-[12px] leading-none text-[#f5b301] sm:text-[13px]">
          ★★★★★
        </div>

        <h3 className="mt-3 min-h-[40px] text-[13px] font-semibold leading-5 text-black sm:text-[15px]">
          {product.name}
        </h3>

        <p className="mt-2 text-[14px] font-semibold text-[#9b6cf3]">
          {product.price}
        </p>

        <button
          type="button"
          className="
            mt-3 w-full rounded-full bg-[#9b6cf3] px-3 py-2
            text-[11px] font-bold uppercase tracking-wide text-white
            transition hover:bg-[#8758e8] sm:px-4 sm:py-2.5 sm:text-[12px]
          "
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default function FeaturedProducts() {
  return (
    <section className="w-full bg-white py-10 md:py-14">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-10">
        {/* Heading */}
        <div className="mb-8">
          <h2 className="text-3xl font-extrabold tracking-wide text-black md:text-4xl">
            Featured Products
            <span className="inline-block -translate-y-2 text-xl text-[#9b6cf3]">
              🐾
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_390px] xl:grid-cols-[1fr_420px]">
          {/* Desktop Products Grid */}
          <div className="hidden grid-cols-3 gap-x-4 gap-y-8 sm:gap-x-5 lg:grid">
            {featuredProducts.map((product) => (
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
            {featuredProducts.map((product) => (
              <div key={product.id} className="snap-start">
                <ProductCard product={product} mobile />
              </div>
            ))}
          </div>

          {/* Right Image Desktop */}
          <div className="relative hidden overflow-hidden rounded-2xl lg:block">
            <div className="relative h-full min-h-[575px] w-full">
              <Image
                src="/assets/cat-house.jpg"
                alt="Featured Dog"
                fill
                sizes="420px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Mobile Image */}
          <div className="relative mt-2 block overflow-hidden rounded-2xl lg:hidden">
            <div className="relative h-[260px] w-full sm:h-[340px]">
              <Image
                src="/assets/cat-house.jpg"
                alt="Featured Dog"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}