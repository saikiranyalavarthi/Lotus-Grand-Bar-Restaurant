"use client";

import Image from "next/image";
import { FaFacebookF, FaInstagram, FaXTwitter, FaTiktok, FaWhatsapp } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="w-full bg-[#1A1A1A] text-gray-300 pt-14 pb-6">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo + Short Text */}
        <div className="flex flex-col items-start">
          <Image
            src="/logo/logo2.jpg" // Add your logo path
            alt="Lotus Grand Logo"
            width={160}
            height={80}
            className="object-contain"
          />
          <p className="mt-4 text-sm leading-relaxed text-gray-400">
            Experience premium dining, handcrafted drinks<br />
            and unforgettable ambiance at Lotus Grand Bar & Restaurant.
          </p>
        </div>

        {/* Address */}
        <div>
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <span className="text-yellow-500">📍</span> Address
          </h3>
          <p className="mt-3 text-sm leading-relaxed">
            Lotus Grand Bar & Restaurant <br />
            Bachupally, Hyderabad, Telangana <br />
            500090 – India
          </p>
        </div>

        {/* Reservations */}
        <div>
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <span className="text-yellow-500">📞</span> Reservations
          </h3>
          <p className="mt-3 text-sm">
            +91 8179011077 <br />
          </p>
        </div>

        {/* Opening Hours */}
        <div>
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <span className="text-yellow-500">⏰</span> Opening Hours
          </h3>
          <p className="mt-3 text-sm leading-relaxed">
            Mon – Sat: 11:00 AM – 12:00 AM <br />
            Sunday: 11:00 AM – 1:00 AM
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-6xl mx-auto px-6 mt-8 border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-400 text-center md:text-left">
          © {new Date().getFullYear()} Lotus Grand Bar & Restaurant — All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-5 text-xl">
          <FaFacebookF className="hover:text-yellow-500 cursor-pointer" />
          <FaXTwitter className="hover:text-yellow-500 cursor-pointer" />
          <FaInstagram className="hover:text-yellow-500 cursor-pointer" />
          <FaTiktok className="hover:text-yellow-500 cursor-pointer" />
          <FaWhatsapp className="hover:text-yellow-500 cursor-pointer" />
        </div>
      </div>
    </footer>
  );
}
