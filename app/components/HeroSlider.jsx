"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  {
    image: "/Banner/banner1.jpg",
    title: "TASTE UNIQUE FOOD",
    subtitle: "Cooking delicious food since 2025",
    button: "Read more",
  },
  {
    image: "/Banner/banner2.png",
    title: "",
    subtitle: "",
    button: "",
  },
  {
    image: "/Banner/banner3.png",
    title: "ENJOY A FRIENDS DINNER",
    subtitle: "Cooking delicious food since 2025",
    button: "Read more",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <div className="relative w-full h-[70vh] md:h-[90vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image */}
          <Image
            src={slide.image}
            alt={slide.title || "Banner slide"}
            fill
            priority
            className="object-cover object-center"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Content */}
          {(slide.title || slide.subtitle || slide.button) && (
            <div className="absolute inset-0 flex items-end md:items-center justify-center md:justify-end px-4 md:px-6 lg:px-24 pb-14 md:pb-0">
              <div className="text-center md:text-right max-w-lg">
                {slide.title && (
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
                    {slide.title}
                  </h1>
                )}

                {slide.subtitle && (
                  <p className="text-sm md:text-lg text-gray-200 mt-2 md:mt-3 drop-shadow-lg">
                    {slide.subtitle}
                  </p>
                )}

                {slide.button && (
                  <button className="mt-5 bg-yellow-600 hover:bg-yellow-500 text-white font-semibold px-6 py-2 md:py-3 rounded-md transition-all text-sm md:text-base w-auto md:w-auto">
                    {slide.button}
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Dots Indicator */}
      <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 md:gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full border border-white transition ${
              index === current ? "bg-white" : "bg-transparent"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
