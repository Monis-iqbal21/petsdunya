import Image from "next/image";

const categories = [
  {
    name: "Cat",
    image: "/assets/cat-c.png",
  },
  {
    name: "Dog",
    image: "/assets/dog-c.png",
  },
  
  {
    name: "Accessories",
    image: "/assets/acc1.png",
  },
];

export default function ShopByCategories() {
  return (
    <section className="w-full bg-[#eef2ff] py-14 md:py-16 overflow-hidden  ">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-wide text-black">
            Shop by{" "}
            <span className="relative text-[#9b6cf3]">
              Categories
              <span className="absolute -top-5 -right-7 text-2xl rotate-12">
                🐾
              </span>
            </span>
          </h2>
        </div>

        {/* Categories */}
        <div
          className="
            flex gap-8 overflow-x-auto pb-3
            md:grid md:grid-cols-5 md:gap-10 md:overflow-visible md:pb-0
            snap-x snap-mandatory
            [-ms-overflow-style:none] [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
            align-middle
          "
        >
          {categories.map((category, index) => (
            <div
              key={index}
              className="
                min-w-[150px] md:min-w-0
                flex flex-col items-center text-center
                snap-start cursor-pointer group
              "
            >
              <div
                className="
                  relative w-32 h-32 md:w-36 md:h-36
                  rounded-full bg-white
                  flex items-center justify-center
                  shadow-sm transition-all duration-300
                  group-hover:-translate-y-2 group-hover:shadow-xl
                "
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  width={120}
                  height={120}
                  className="w-[90px] md:w-[105px] h-auto object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              <h3 className="mt-6 text-[17px] md:text-[18px] font-bold tracking-wide text-black">
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}