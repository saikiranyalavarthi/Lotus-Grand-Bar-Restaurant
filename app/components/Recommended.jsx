"use client";

import Image from "next/image";

const recommendedItems = [
  { name: "Heineken Beer", image: "/Bottle/beer1.jpg" },
  { name: "Budwiser Beer", image: "/Bottle/beer2.jpg" },
  { name: "Hureca Beer", image: "/Bottle/beer3.jpg" },
  { name: "Hop & Roll Beer", image: "/Bottle/beer1.jpg" },
];

export default function Recommended() {
  return (
    <section className="w-full py-16 bg-white">
      <h2 className="text-center text-4xl md:text-5xl font-extrabold text-gray-900">
        RECOMMENDED TODAY
      </h2>
      <p className="text-center text-lg text-gray-600 mt-2">
        Fresh picks crafted with passion and served with excellence.
      </p>

      {/* ITEMS ROW */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {recommendedItems.map((item, index) => (
          <div key={index} className="flex flex-col items-center group">
            
            {/* Image no-circle clean */}
            <div className="relative w-36 h-36 md:w-48 md:h-48 overflow-visible ">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-contain transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <h3 className="text-lg md:text-xl font-bold mt-4 text-gray-900 tracking-wide">
              {item.name.toUpperCase()}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
