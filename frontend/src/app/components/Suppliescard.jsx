import Image from "next/image";

export default function PetSuppliesHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#2098db]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <span className="absolute left-[2%] top-[8%] text-5xl">🐾</span>
        <span className="absolute left-[11%] top-[2%] text-3xl">🐾</span>
        <span className="absolute left-[20%] top-[0%] text-5xl">🐾</span>
        <span className="absolute left-[35%] top-[3%] text-6xl">🐾</span>
        <span className="absolute left-[47%] top-[9%] text-5xl">🐾</span>
        <span className="absolute left-[57%] top-[4%] text-3xl">🐾</span>
        <span className="absolute right-[8%] top-[3%] text-6xl">🐾</span>

        <span className="absolute left-[4%] top-[56%] text-5xl">🐾</span>
        <span className="absolute left-[14%] top-[66%] text-5xl">🐾</span>
        <span className="absolute left-[26%] top-[84%] text-5xl">🐾</span>
        <span className="absolute left-[39%] top-[86%] text-5xl">🐾</span>
        <span className="absolute left-[52%] top-[61%] text-4xl">🐾</span>
        <span className="absolute right-[20%] top-[74%] text-5xl">🐾</span>

        <span className="absolute left-[7%] top-[78%] text-4xl text-white">+</span>
        <span className="absolute left-[48%] top-[80%] text-4xl text-white">×</span>
        <span className="absolute left-[70%] top-[17%] text-4xl text-white">+</span>
        <span className="absolute left-[50%] top-[13%] text-3xl text-yellow-300">°</span>
        <span className="absolute right-[23%] top-[10%] text-3xl text-yellow-300">°</span>
      </div>

      <div className="relative z-10 mx-auto flex min-h-[530px] max-w-7xl flex-col items-center px-4 py-12 sm:px-6 md:min-h-[460px] md:flex-row md:px-10 lg:min-h-[500px]">
        {/* Left Content */}
        <div className="relative z-20 w-full text-center md:w-[52%] md:text-left">
          <h1 className="mx-auto max-w-xl text-3xl font-extrabold leading-tight tracking-wide text-white sm:text-4xl lg:text-5xl">
            Elite Pet Supplies Superior Products for Happy Pets
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/95 sm:text-base md:mx-0">
            Best product for relaxed pets, and we make sure we provide the best
            quality products for your pets.
          </p>

          <button className="mt-7 rounded-full bg-[#a763ed] px-8 py-3 text-sm font-bold uppercase tracking-wide text-white shadow-lg transition hover:bg-[#8f4ed9]">
            Shop Now
          </button>
        </div>

        {/* Right Image Container */}
        <div className="relative mt-10 flex w-full justify-center md:absolute md:bottom-0 md:right-0 md:mt-0 md:h-full md:w-[52%] md:items-end md:justify-end">
          {/* White Circle and Image Mask Container - FIXED POSITIONING */}
          <div className="relative z-10 h-[260px] w-[260px] shrink-0 overflow-hidden rounded-full bg-white sm:h-[320px] sm:w-[320px] md:absolute md:bottom-0 md:right-8 md:h-[430px] md:w-[430px] lg:right-14 lg:h-[520px] lg:w-[520px]">
            {/* Inner relative container for Image fill */}
            <div className="relative h-full w-full">
              <Image
                src="/assets/dog-cat2.jpeg"
                alt="Elite Pet Supplies Dog and Cat"
                fill
                priority
                className="object-contain object-center scale-110"
              />
            </div>
          </div>

          {/* Paw Decoration */}
          <div className="absolute left-[18%] top-0 hidden text-7xl text-white md:block">
            🐾
          </div>
        </div>

        {/* Phone Badge */}
        <div className="relative z-30 mt-8 flex items-center gap-3 rounded-full bg-[#ffc453] px-6 py-3 text-lg font-extrabold text-white shadow-xl sm:text-2xl md:absolute md:bottom-8 md:right-0 md:mt-0 md:rounded-l-full md:rounded-r-none md:px-8 lg:text-3xl">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#ffc453]">
            ☎
          </span>
          <span>+92-3008111015</span>
        </div>
      </div>
    </section>
  );
}