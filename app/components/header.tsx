"use client";

import Link from "next/link";
import { useState } from "react";
import { X, Menu } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-700">
          Premier Auto Plus
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
          <Link href="/inventory" className="hover:text-blue-600">Inventory</Link>
          <Link href="/financing" className="hover:text-blue-600">Financing</Link>
          <Link href="/about" className="hover:text-blue-600">About Us</Link>
          <Link href="/contact" className="hover:text-blue-600">Contact</Link>
        </nav>

        {/* CTA */}
        <Link
          href="/inventory"
          className="hidden md:inline-block bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800"
        >
          Get Started
        </Link>

        {/* Hamburger (Mobile) */}
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden text-gray-700"
          aria-label="Open menu"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Slide-In Menu */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMenuOpen(false)}
      ></div>

      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 flex justify-between items-center border-b">
          <span className="text-lg font-bold text-blue-700">Menu</span>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-gray-700"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
        <nav className="flex flex-col p-6 gap-4 text-gray-700 font-medium">
          <Link href="/inventory" onClick={() => setMenuOpen(false)}>Inventory</Link>
          <Link href="/financing" onClick={() => setMenuOpen(false)}>Financing</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link
            href="/get-started"
            className="mt-4 bg-blue-700 text-white px-4 py-2 rounded-md text-center hover:bg-blue-800"
            onClick={() => setMenuOpen(false)}
          >
            Get Started
          </Link>
        </nav>
      </aside>
    </header>
  );
}
