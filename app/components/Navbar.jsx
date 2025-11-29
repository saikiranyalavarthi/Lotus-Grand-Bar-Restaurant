"use client";
import Image from "@/node_modules/next/image";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/menu", label: "Our Menu" },
  { href: "/saregama", label: "SAREGAMA" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#1A1A1A] border-b border-gray-700">


      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-5">
        {/* Logo */}
        <Link href="/" className="flex items-center">
  <Image
    src="/logo/logo2.jpg"
    alt="Lotus Grand Logo"
    width={140}     // adjust based on your logo size
    height={60}
    className="object-contain"
    priority
  />
</Link>


        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:text-yellow-400 transition ${
                pathname === link.href ? "text-yellow-400" : "text-gray-200"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Call Button Desktop */}
        <a
          href="tel:+918179011077"
          className="hidden md:inline-flex items-center text-xs md:text-sm px-4 py-2 border border-yellow-400 rounded-full text-yellow-400 hover:bg-yellow-400 hover:text-black transition"
        >
          📞 +91 8179011077
        </a>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden flex items-center justify-center text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <span className="text-3xl">✖</span>
          ) : (
            <span className="text-3xl">☰</span>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/95 border-t border-gray-700 px-4 py-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)} // close menu on click
              className={`block text-sm py-2 ${
                pathname === link.href
                  ? "text-yellow-400 font-semibold"
                  : "text-gray-300"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <a
            href="tel:+918179011077"
            className="block text-center mt-2 text-sm border border-yellow-400 rounded-full py-2 text-yellow-400 hover:bg-yellow-400 hover:text-black transition"
          >
            📞 +91 8179011077
          </a>
        </div>
      )}
    </header>
  );
}
