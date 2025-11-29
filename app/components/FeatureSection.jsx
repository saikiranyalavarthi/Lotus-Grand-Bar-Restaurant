"use client";

import Image from "next/image";
import Link from "next/link";

const cards = [
  {
    image: "/Banner/Banner4.jpg",
    title: "OUR MENU",
    subtitle: "View Our Specialties",
    link: "/menu",
  },
  {
    image: "/Banner/Banner5.jpg",
    title: "DELIVERY",
    subtitle: "Home delivery or take away food",
    link: "/contact",
  },
  {
    image: "/Banner/Banner6.jpg",
    title: "INSIDE FLOORES",
    subtitle: "View the Gallery",
    link: "/gallery",
  },
];

export default function FeatureSection() {
  return (
    <section className="w-full py-1">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {cards.map((card, index) => (
          <Link
            key={index}
            href={card.link}
            className="relative h-[260px] md:h-[300px] group overflow-hidden"
          >
            {/* Background Image */}
            <Image
              src={card.image}
              alt={card.title}
              fill
              className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all"></div>

            {/* Text Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
              <h2 className="text-2xl font-extrabold md:text-3xl drop-shadow-lg">
                {card.title}
              </h2>
              <p className="mt-2 text-sm md:text-base drop-shadow-lg">
                {card.subtitle}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
