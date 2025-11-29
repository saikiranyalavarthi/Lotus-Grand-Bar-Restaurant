"use client";

import { menuData } from "../data/menu";
import { FaDownload } from "react-icons/fa";

export default function MenuSection() {
  return (
    <section className="w-full bg-white py-0">

      {/* Top Banner Section */}
      <div className="relative w-full h-[260px] md:h-[340px] overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />

        <img
          src="/Banner/banner7.png"   // put a food background image inside /public/menu-bg.jpg
          className="w-full h-full object-cover"
          alt="Menu Banner"
        />

        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg">
            Lotus Grand Menu
          </h1>
          <p className="mt-3 text-gray-200 text-lg max-w-2xl">
            Experience authentic flavours crafted with tradition & love.
          </p>

          {/* Download Button */}
          
        </div>
      </div>

      {/* Items Section */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-16">
        {menuData.map((section, idx) => (
          <div key={idx} className="mb-10">
            <h2 className="text-2xl font-bold text-yellow-600 border-b border-gray-200 pb-2 mb-3">
              {section.category}
            </h2>

            <div className="space-y-2">
              {section.items.map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between py-2 border-b border-gray-100 hover:bg-gray-50 rounded-md px-2 transition"
                >
                  <span className="font-medium text-gray-800">
                    {item.name}
                  </span>
                  <span className="text-yellow-600 font-semibold">
                    {item.price}
                  </span>
                  
                </div>
              ))}
            </div>
           
          </div>
        ))}
         <a
            href="/Lotus Grand Menu Special Menu A4.pdf"
            download
            className="mt-6 inline-flex items-center gap-2 bg-yellow-600 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-full transition"
          >
            <FaDownload /> Download Menu PDF
          </a>
      </div>
    </section>
  );
}
