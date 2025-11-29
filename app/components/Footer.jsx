"use client";

import { FaFacebookF, FaInstagram, FaXTwitter, FaTiktok, FaWhatsapp } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="w-full bg-[#1a1a1a] text-gray-300 pt-15 pb-6">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

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
            <span className="text-yellow-500">✉️</span> Reservations
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

        {/* Newsletter (optional future use) */}
        {/* 
        <div>
          <h3 className="text-lg font-semibold">Keep In Touch</h3>
          <div className="flex mt-4 bg-[#262626] rounded-md overflow-hidden">
            <input
              type="email"
              placeholder="Your email"
              className="bg-transparent px-4 py-3 w-full focus:outline-none text-sm"
            />
            <button className="bg-yellow-600 hover:bg-yellow-500 text-black font-semibold px-5">
              →
            </button>
          </div>
        </div>
        */}
      </div>

      {/* Bottom Bar */}
      <div className="max-w-6xl mx-auto px-6 mt-8 border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-400">
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
