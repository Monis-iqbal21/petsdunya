"use client";   

const promoCards = [
  {
    title: "Retractable Dog Gate Sale",
    offer: "UP TO 25% OFF",
    bg: "bg-[url('/assets/three2.png')]", 
  },
  {
    title: "XXL Pet Beds Super Soft Collection",
    offer: "SAVE 20%",
    bg: "bg-[url('/assets/three3.png')]",
  },
  {
    title: "Toys & Pet Accessories Deals",
    offer: "30% OFF",
    bg: "bg-[url('/assets/three4.png')]",
  },
];

export default function PromoCards() {
  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10">
        <div
          className="
            flex gap-4 sm:gap-6 overflow-x-auto pb-6
            lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0 lg:gap-6 xl:gap-8
            snap-x snap-mandatory
            [-ms-overflow-style:none] [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          "
        >
          {promoCards.map((card, index) => (
            <div
              key={index}
              className={`
                relative ${card.bg} bg-right bg-cover bg-no-repeat
                w-[85vw] sm:w-[360px] md:w-[400px] lg:w-auto flex-shrink-0
                h-[260px] sm:h-[300px] lg:h-[280px] xl:h-[340px] 
                rounded-2xl overflow-hidden
                snap-center lg:snap-align-none shadow-md transition-all duration-300 hover:shadow-lg
              `}
            >
              {/* Decorative patterns */}
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute -bottom-12 -left-10 w-40 h-40 sm:w-52 sm:h-52 rounded-full bg-white/40" />
                <div className="absolute bottom-8 left-20 sm:left-24 w-32 h-32 sm:w-44 sm:h-44 rounded-full bg-white/30" />
                <div className="absolute -top-16 right-16 w-32 h-32 sm:w-44 sm:h-44 rounded-full bg-white/20" />
                <div className="absolute top-4 sm:top-5 right-6 sm:right-8 text-4xl sm:text-5xl text-black/10">🐾</div>
                <div className="absolute bottom-4 sm:bottom-5 left-6 sm:left-8 text-5xl sm:text-6xl text-black/10">♡</div>
              </div>

              {/* Text */}
              <div className="relative z-10 p-5 sm:p-6 xl:p-8 w-[70%] sm:w-[65%] lg:w-[70%] xl:w-[60%] h-full flex flex-col justify-center">
                <h3 className="text-white text-xl sm:text-2xl lg:text-xl xl:text-3xl font-extrabold leading-tight drop-shadow-md">
                  {card.title}
                </h3>
                <p className="mt-3 sm:mt-5 text-white/90 text-xs sm:text-sm xl:text-base font-bold tracking-wider drop-shadow-md uppercase">
                  {card.offer}
                </p>
              </div>

              {/* Small dark shape for first card style (optional aesthetic) */}
              {index === 0 && (
                <div className="absolute right-0 bottom-0 w-16 h-12 sm:w-20 sm:h-16 bg-[#4e493a] rounded-tl-[40px] sm:rounded-tl-[50px] z-0 opacity-90" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}