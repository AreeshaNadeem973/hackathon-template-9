
"use client";

import Link from "next/link";
import { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6"; // Magnifying Glass Icon
import { PiUserBold } from "react-icons/pi"; // User Icon
import { PiHandbagBold } from "react-icons/pi"; // Shopping Bag Icon

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black text-white shadow-md">
      <div className="container mx-auto px-6 lg:px-12 py-4 flex justify-between items-center gap-20">
        {/* Logo */}
        <Link href="" className="text-2xl font-bold">
          Food<span className="text-orange-500">tuck</span>
        </Link>

        {/* Large Screen Navigation */}
        <div className="hidden lg:flex items-center justify-between flex-1 ml-8">
          {/* Navigation Links */}
          <div className="flex space-x-6">
            <Link href="/" className="hover:text-orange-500 transition">
              Home
            </Link>
            <Link href="/Menu" className="hover:text-orange-500 transition">
              Menu
            </Link>
            <Link href="/Blog" className="hover:text-orange-500 transition">
              Blog
            </Link>
            <Link href="/Error" className="hover:text-orange-500 transition">
              Pages
            </Link>
            <Link href="/About" className="hover:text-orange-500 transition">
              About
            </Link>
            <Link href="/ContactUs" className="hover:text-orange-500 transition">
              Contact
            </Link>
          </div>

          {/* Icons and Search */}
          <div className="flex items-center ml-8 space-x-4">
            {/* Search Icon */}
            <div className="text-white text-xl hover:text-orange-500 transition">
              <FaMagnifyingGlass />
            </div>

            {/* User Icon */}
            <div className="text-white text-xl hover:text-orange-500 transition">
              <PiUserBold />
            </div>

            {/* Shopping Bag Icon */}
            <div className="text-white text-2xl hover:text-orange-500 transition">
              <PiHandbagBold />
            </div>
          </div>
        </div>

        {/* Hamburger Icon (Small Screens) */}
        <div
          className="lg:hidden text-2xl cursor-pointer transition duration-300"
          onClick={toggleMenu}
        >
          {/* Toggle between Hamburger and Close icon */}
          {isMenuOpen ? (
            <div className="transform rotate-45">✕</div>
          ) : (
            <div className="transform rotate-0">≡</div>
          )}
        </div>
      </div>

      {/* Collapsible Menu for Small Screens */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } lg:hidden bg-black text-white mt-4 space-y-4 px-6 transition-all duration-300`}
      >
        {/* Navigation Links */}
        <div className="flex flex-col space-y-4">
          <Link href="/" className="hover:text-orange-500 transition">
            Home
          </Link>
          <Link href="/Menu" className="hover:text-orange-500 transition">
            Menu
          </Link>
          <Link href="/Blog" className="hover:text-orange-500 transition">
            Blog
          </Link>
          <Link href="/Error" className="hover:text-orange-500 transition">
            Pages
          </Link>
          <Link href="/About" className="hover:text-orange-500 transition">
            About
          </Link>
          <Link href="/ContactUs" className="hover:text-orange-500 transition">
            Contact
          </Link>
        </div>

        {/* Icons and Search (Small Screens) */}
        <div className="flex items-center space-x-4">
          {/* Search Icon */}
          <div className="text-white text-2xl hover:text-orange-500 transition">
            <FaMagnifyingGlass />
          </div>

          {/* User Icon */}
          <div className="text-white text-2xl hover:text-orange-500 transition">
            <PiUserBold />
          </div>

          {/* Shopping Bag Icon */}
          <div className="text-white text-2xl hover:text-orange-500 transition">
            <PiHandbagBold />
          </div>
        </div>
      </div>
    </nav>
  );
}













