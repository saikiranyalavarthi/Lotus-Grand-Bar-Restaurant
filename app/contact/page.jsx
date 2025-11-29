"use client";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="w-full bg-white">

      {/* ===== HERO BANNER ===== */}
      <section className="relative w-full h-[260px] md:h-[350px]">
        <img
          src="/Banner/banner9.jpg"
          alt="Contact Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            Contact Us
          </h1>
        </div>
      </section>

      {/* ===== CONTACT INFO + FORM ===== */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Left Side — Contact Info */}
        <div>
          <h2 className="text-3xl font-extrabold text-gray-900">
            Get In Touch
          </h2>
          <p className="text-gray-600 mt-3">
            Have questions or want to make a reservation? We’re always happy to serve you.
          </p>

          <div className="mt-8 space-y-6">
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-2xl text-yellow-600" />
              <p className="text-gray-700">
                Lotus Grand Bar & Restaurant <br />
                Bachupally, Hyderabad, Telangana 500118
              </p>
            </div>

            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-xl text-yellow-600" />
              <p className="text-gray-700 font-semibold">+91 8179011077</p>
            </div>

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-xl text-yellow-600" />
              <p className="text-gray-700">lotusgrandrestaurant@gmail.com</p>
            </div>

            <div className="flex items-start gap-4">
              <FaClock className="text-xl text-yellow-600" />
              <p className="text-gray-700">
                Mon – Sat: 11:00 AM – 12:00 AM <br />
                Sunday: 11:00 AM – 1:00 AM
              </p>
            </div>
          </div>
        </div>

        {/* Right Side — Form */}
        <form className="bg-gray-50 p-8 rounded-xl shadow-md">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          <input
            type="text"
            placeholder="Subject"
            className="p-3 mt-4 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />

          <textarea
            placeholder="Your Message"
            rows="5"
            className="p-3 mt-4 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-yellow-500"
          ></textarea>

          <button className="mt-6 w-full bg-yellow-600 hover:bg-yellow-500 text-black font-bold py-3 rounded-md transition">
            Send Message
          </button>
        </form>
      </section>

      {/* ===== GOOGLE MAP ===== */}
      <section className="w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.3736515993666!2d78.360136!3d17.475472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93e0a557dfb1%3A0xc7bf36a8e9190d5f!2sLotus%20Grand%20Bar%20%26%20Restaurant!5e0!3m2!1sen!2sin!4v1709137658935"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
}
