"use client";

import Image from "next/image";

export default function EventSection() {
  return (
    <section className="relative w-full h-[620px] md:h-[680px] overflow-hidden my-16">
      
      {/* Background Image */}
      <Image
        src="/Banner/banner9.jpg" // replace with celebration / drinks image
        alt="Celebrate at Lotus Grand"
        fill
        className="object-cover object-center"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Center Box */}
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <div className="bg-[#1c1c1c]/90 text-white p-8 md:p-12 rounded-lg max-w-2xl text-center shadow-lg">
          
          <h2 className="text-3xl md:text-4xl font-bold">Celebrate</h2>
          <p className="text-lg italic mt-2 text-yellow-400">
            A Special Event with Us!
          </p>

          <p className="text-gray-300 mt-4 leading-relaxed">
            Make your celebrations unforgettable at Lotus Grand Bar & Restaurant.
            Whether it's a birthday, anniversary, corporate party, or friends gathering,
            we provide beautiful ambience, delicious food, and premium drinks.
          </p>

          <button className="mt-6 bg-yellow-600 hover:bg-yellow-500 px-8 py-3 rounded-md font-semibold transition text-black">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
