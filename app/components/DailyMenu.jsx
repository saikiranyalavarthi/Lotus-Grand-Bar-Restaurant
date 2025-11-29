"use client";

import Image from "next/image";

export default function DailyMenu() {
  return (
    <section className="w-full py-16 bg-white">
      {/* <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-10">
        Our Daily Specials
      </h2> */}

      {/* FULL WIDTH BANNER */}
      <div className="w-full">
        <div className="relative h-[380px] md:h-[460px] w-full overflow-hidden group rounded-xl md:rounded-none">

          {/* Background Image */}
          <Image
            src="/Banner/banner7.png" // change to your food special image
            alt="Lotus Grand Special Dish"
            fill
            className="object-cover object-center transition duration-700 group-hover:scale-110"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* CONTENT WRAPPER */}
          <div className="max-w-6xl mx-auto relative h-full px-4 md:px-6">

            {/* Left Content */}
            <div className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 text-white max-w-lg">
              <p className="text-sm tracking-wide uppercase">chef's special</p>

              <h3 className="text-3xl md:text-4xl font-extrabold mt-1">
                Signature Chicken Biryani @ ₹299
              </h3>

              <p className="text-sm md:text-base text-gray-200 mt-2">
                Served with Raita • Mirchi Salan • Salad • Soft Drink
              </p>

              <button className="mt-5 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-md transition">
                Order Now
              </button>
            </div>

            {/* Right Content */}
            <div className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 text-right text-white max-w-sm">
              <p className="text-lg font-semibold text-yellow-400 italic">Today’s Deal</p>

              <h4 className="text-4xl md:text-5xl font-extrabold tracking-wider drop-shadow-xl">
                HAPPY <br /> HOURS
              </h4>

              <p className="text-lg mt-3 text-yellow-300 font-medium">5PM – 9PM</p>
              <p className="text-lg text-gray-300 mt-1">Buy 1 & Get 1 Free • Drinks</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Description */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 mt-10 text-center">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
          A Taste You’ll Always Remember
        </h3>

        <p className="text-gray-700 mt-3 max-w-3xl mx-auto leading-relaxed">
          From sizzling starters to premium biryanis, authentic tandoori grills,
          handcrafted cocktails, and the finest bar experience — Lotus Grand Bar & Restaurant
          brings you the ultimate dining & lounge ambience in Bachupally.
        </p>

        <button className="mt-6 bg-black text-white hover:bg-gray-800 px-8 py-3 rounded-md font-semibold text-sm tracking-wide transition">
          View Full Menu
        </button>
      </div>
    </section>
  );
}
