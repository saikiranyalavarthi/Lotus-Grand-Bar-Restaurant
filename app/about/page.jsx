"use client";

import Image from "next/image";
import { FaAppleAlt, FaLeaf, FaUserTie } from "react-icons/fa";

export default function AboutPage() {
  return (
    <div className="w-full bg-white">
      {/* ===== HERO SECTION ===== */}
      <section className="relative w-full h-[280px] md:h-[380px] overflow-hidden">
        <Image
            src="/Banner/banner6.jpg"
          alt="About Lotus Grand banner"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
            About Us
          </h1>
        </div>
      </section>

      {/* ===== ABOUT STORY CONTENT ===== */}
      <section className="max-w-6xl mx-auto py-16 px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <div className="relative group">
          <Image
            src="/Banner/banner4.jpg"
            alt="Lotus Grand Restaurant About"
            width={600}
            height={500}
            className="rounded-xl shadow-lg object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-snug">
            Serving Delicious Food & Drinks Since <span className="text-yellow-600">2025</span>
          </h2>

          <p className="text-lg text-gray-600 mt-4">
            Lotus Grand Bar & Restaurant is a premium dining destination located in Bachupally,
            Hyderabad — known for authentic flavours, warm hospitality, and a vibrant ambience.
          </p>

          <p className="text-gray-600 mt-4 leading-relaxed">
            From sizzling starters and rich biryanis to handcrafted cocktails and premium beverages,
            we take pride in delivering unforgettable dining experiences. Whether it’s a family dinner,
            friends hangout, birthday celebration, or corporate meetup, Lotus Grand is the perfect place.
          </p>

          <p className="text-gray-600 mt-4 leading-relaxed">
            With skilled chefs and carefully selected ingredients, every dish is prepared with passion
            and authenticity to ensure our guests enjoy the finest taste of Telangana cuisine and modern bar culture.
          </p>

          {/* <button className="mt-6 bg-yellow-600 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-md transition">
            Reserve a Table
          </button> */}
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="bg-[#f8f8f8] py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-10 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Why Choose <span className="text-yellow-600">Lotus Grand</span>
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Experience quality dining with perfect ambience, delicious food and friendly service.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
            {/* Card 1 */}
            <div className="bg-white shadow-md p-8 rounded-xl hover:-translate-y-2 transition cursor-pointer">
              <FaAppleAlt className="text-4xl text-yellow-600 mx-auto" />
              <h4 className="text-xl font-bold mt-4">For Every Taste</h4>
              <p className="text-gray-600 mt-2">
                A wide range of veg & non-veg delights crafted for all types of food lovers including
                local flavours, tandoori grills & Chinese starters.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-md p-8 rounded-xl hover:-translate-y-2 transition cursor-pointer">
              <FaLeaf className="text-4xl text-yellow-600 mx-auto" />
              <h4 className="text-xl font-bold mt-4">Fresh Ingredients</h4>
              <p className="text-gray-600 mt-2">
                We believe great taste comes from fresh & quality ingredients. Every dish is cooked
                with authentic spices and hygienic kitchen practices.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-md p-8 rounded-xl hover:-translate-y-2 transition cursor-pointer">
              <FaUserTie className="text-4xl text-yellow-600 mx-auto" />
              <h4 className="text-xl font-bold mt-4">Experienced Chefs</h4>
              <p className="text-gray-600 mt-2">
                Our expert chefs bring years of culinary experience, delivering traditional taste with
                a modern touch and premium restaurant presentation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
