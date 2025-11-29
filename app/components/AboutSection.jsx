"use client";

import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-10">
        
        {/* Left Image + Play Button */}
        <div className="relative rounded-lg overflow-hidden shadow-xl group">
          <Image
            src="/Banner/banner6.jpg" // replace with your photo
            alt="Lotus Grand Bar & Restaurant"
            width={600}
            height={500}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Play Button (optional video button) */}
         
        </div>

        {/* Right Content */}
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-3">
            <span className="w-10 h-[3px] bg-yellow-600"></span>
            <span className="w-10 h-[3px] bg-gray-300"></span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-4">
            About Lotus Grand Bar & Restaurant
          </h2>

          <p className="text-lg text-gray-500 mt-2">
            Experience quality food, premium drinks, and a memorable dining atmosphere.
          </p>

          <p className="text-gray-600 mt-6 leading-relaxed">
            Lotus Grand Bar & Restaurant in Bachupally, Hyderabad, is designed to bring you a perfect blend of 
            taste, ambiance, and hospitality. We believe food isn’t just about flavor—it's an experience 
            where every detail matters.
          </p>

          <p className="text-gray-600 mt-5 leading-relaxed">
            Whether you're enjoying a casual meal, celebrating with friends, or planning a special occasion, 
            our team is committed to offering delicious cuisine, an inviting atmosphere, and warm service. 
            We proudly serve a wide variety of dishes, signature cocktails, and chef-special creations made 
            with passion and care.
          </p>

          {/* Signature / Logo placeholder */}
          {/* <Image
            src="/logo.png" // replace with your actual signature or logo
            alt="Lotus Grand Signature"
            width={200}
            height={80}
            className="mt-6 opacity-90"
          /> */}
        </div>
      </div>
    </section>
  );
}
