'use client';  // remove this line if you're using plain React (not Next.js App Router)

import { useState } from 'react';
import Link from 'next/link';
import { FaCarSide, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="w-full bg-white border-b-2 border-purple-100 shadow-md sticky top-0 z-50">
      <div className="flex flex-row justify-between items-center px-6 md:px-8 py-4">
        
        {/* LEFT — Logo */}
        <Link href="/" onClick={closeMenu} className="flex flex-row items-center gap-2">
          <FaCarSide className="text-3xl text-purple-600" />
          <span className="text-2xl font-bold text-purple-800 tracking-wide">
            Furious
          </span>
        </Link>

        {/* DESKTOP LINKS — visible on md (768px) and up */}
        <div className="hidden md:flex flex-row items-center gap-3">
          <Link href="/" className="px-4 py-2 rounded-lg text-purple-800 font-semibold hover:bg-purple-50 hover:text-pink-600 transition-all">
            Home
          </Link>
          <Link href="/booking" className="px-4 py-2 rounded-lg text-purple-800 font-semibold hover:bg-purple-50 hover:text-pink-600 transition-all">
            Booking
          </Link>
          <Link href="/register" className="px-4 py-2 rounded-lg text-purple-800 font-semibold border-2 border-purple-200 hover:border-purple-500 hover:text-pink-600 transition-all">
            Sign Up
          </Link>
          <Link href="/login" className="px-4 py-2 rounded-lg bg-purple-600 text-white font-semibold hover:bg-pink-600 shadow-md active:scale-95 transition-all">
            Login
          </Link>
        </div>

        {/* MOBILE HAMBURGER — visible below md */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-lg text-purple-700 hover:bg-purple-50 transition-all"
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
        </button>

      </div>

      {/* MOBILE DROPDOWN MENU — slides down when hamburger clicked */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 border-t-2 border-purple-100' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col gap-2 px-6 py-4 bg-white">
          <Link
            href="/"
            onClick={closeMenu}
            className="px-4 py-3 rounded-lg text-purple-800 font-semibold hover:bg-purple-50 hover:text-pink-600 transition-all"
          >
            Home
          </Link>
          <Link
            href="/booking"
            onClick={closeMenu}
            className="px-4 py-3 rounded-lg text-purple-800 font-semibold hover:bg-purple-50 hover:text-pink-600 transition-all"
          >
            Booking
          </Link>
          <Link
            href="/register"
            onClick={closeMenu}
            className="px-4 py-3 rounded-lg text-purple-800 font-semibold border-2 border-purple-200 hover:border-purple-500 hover:text-pink-600 transition-all text-center"
          >
            Sign Up
          </Link>
          <Link
            href="/login"
            onClick={closeMenu}
            className="px-4 py-3 rounded-lg bg-purple-600 text-white font-semibold hover:bg-pink-600 shadow-md active:scale-95 transition-all text-center"
          >
            Login
          </Link>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;