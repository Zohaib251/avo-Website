import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const location = useLocation();
  const currentPath = location.pathname;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="absolute">
    <div
      className={`fixed left-0 w-full flex flex-row justify-center space-x-0 lg:space-x-96 md:space-x-10 items-center py-3 lg:py-5 px-8 z-50 transition-all duration-300 ease-in-out ${
        scrolled ? "bg-white top-0" : " lg:bg-transparent bg-black"
      }`}
    >
      {/* Logo or Title */}
      <Link to="/" className="flex items-center flex-grow md:flex-grow-0">
        <div className="flex items-center">
          <h1
            className={`text-2xl font-bold ${
              scrolled ? "text-black " : "text-white"
            }`}
          >
            a<span className="text-[#D1002C]">v</span>o
          </h1>
        </div>
      </Link>

      {/* Menu Toggle Button */}
      <div
        className="menu-toggle md:hidden flex items-center ml-auto cursor-pointer"
        onClick={toggleMenu}
      >
        <span className="text-[#808080] text-2xl">MENU</span>
      </div>

      {/* Navigation Links */}
      <nav
        className={`${
          isMenuOpen
            ? "fixed top-12 left-0 w-full h-auto bg-black flex flex-col items-left  px-5 font-semibold "
            : "hidden md:flex items-center justify-center font-semibold md:space-x-10"
        } transition-all duration-300 ease-in-out
        ${
          scrolled ? "bg-white" : " lg:bg-transparent bg-black"
        }`}
      >
        <Link
          to="/"
          className={`${
            currentPath === "/" ? "text-[#B10328]" : "text-[#9A9A9A]"
          } hover:text-[#D1002C] pb-3 md:pb-0 transform transition-transform duration-300 ease`}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={`${
            currentPath === "/about" ? "text-[#B10328]" : "text-[#9A9A9A]"
          } hover:text-[#D1002C] pb-3 md:pb-0 transform transition-transform duration-300 ease`}
        >
          About
        </Link>
        <Link
          to="/work"
          className={`${
            currentPath === "/work" ? "text-[#B10328]" : "text-[#9A9A9A]"
          } hover:text-[#D1002C] pb-3 md:pb-0 transform transition-transform duration-300 ease`}
        >
          Work
        </Link>
        <Link
          to="/blog"
          className={`${
            currentPath === "/blog" ? "text-[#B10328]" : "text-[#9A9A9A]"
          } hover:text-[#D1002C] pb-3 md:pb-0 transform transition-transform duration-300 ease`}
        >
          Blog
        </Link>
        <Link
          to="/contact"
          className={`${
            currentPath === "/contact" ? "text-[#B10328]" : "text-[#9A9A9A]"
          } hover:text-[#D1002C] pb-3 md:pb-0 transform transition-transform duration-300 ease`}
        >
          Contact
        </Link>
      </nav>
    </div>
    </div>
  );
};

export default Navbar;
