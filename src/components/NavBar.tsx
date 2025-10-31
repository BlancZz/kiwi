'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToShop = () => {
    const section = document.getElementById('shop');
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  const [open, setOpen] = useState(false);

  const toggleDropdown = () => setOpen((prev) => !prev);
  const closeDropdown = () => setOpen(false);

  return (
    <nav
      className={`fixed pt-1 pb-1 top-0 left-0 w-full z-50 transition-all duration-300 
        ${
          scrolled ? 'bg-white/50 backdrop-blur-md shadow-sm' : 'bg-transparent'
        }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="space-x-10 flex">
          <Link
            href="/"
            className={`flex items-center gap-2 text-3xl font-bold ${
              scrolled ? 'text-gray-900' : 'text-gray-50'
            } transition-all duration-300 ease-in-out hover:text-green-500`}
          >
            <svg
              viewBox="0 0 192 192"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-9 h-9"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="12"
                d="M38.26 145.475c2.855-12.988 4.671-18.51-3.109-28.72-6.538-9.58-8.511-23.611-6.045-33.578 4.242-15.583 15.41-26.827 33.076-29.5 17.666-2.673 30.577 9.183 47.153 2.516 16.576-6.667 36.527-11.641 54.666-10.672-13.726 8.091-53.124 18.761-58.293 33.578-2 5.733 1.107 9.771 5.527 11.28 24.903 9.865 44.907 35.34 49.226 56.224"
              ></path>
              <circle cx="75.75" cy="79.5" r="8"></circle>
            </svg>
            Kiwi
          </Link>
          <div className="relative flex items-center">
            <button
              onClick={toggleDropdown}
              className={`relative group flex items-center text-lg font-medium transition-all duration-300 ease-in-out ${
                scrolled ? 'text-gray-900' : 'text-gray-50'
              } hover:text-green-500`}
            >
              Shop
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className={`w-4 h-4 ml-1 transition-transform duration-300 ${
                  open ? 'rotate-180 text-green-500' : 'text-inherit'
                }`}
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-500 transition-all group-hover:w-full"></span>
            </button>

            {/* Dropdown Items */}
            {open && (
              <div
                className="absolute left-0 top-full mt-1 w-40 bg-white text-gray-900 shadow-lg rounded-md py-2 z-50"
                onMouseLeave={closeDropdown}
              >
                {[
                  { label: 'All Items', type: 'all' },
                  { label: 'Anime', type: 'anime' },
                  { label: 'Cats', type: 'cat' },
                  { label: 'Fake', type: 'all' },
                ].map(({ label, type }) => (
                  <Link
                    key={label}
                    href={`/all-products?category=${type}`}
                    onClick={closeDropdown}
                    className="block w-full text-left px-4 py-2 hover:bg-green-100 hover:text-green-600 transition-all duration-200"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="space-x-6 flex">
          {/* <button
            onClick={scrollToShop}
            className={`relative group font-large ${
              scrolled ? 'text-gray-900' : 'text-gray-50'
            } transition-all duration-300 ease-in-out hover:text-green-500`}
          >
            Shop
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-500 transition-all group-hover:w-full"></span>
          </button> */}
          <Link
            href="/about"
            className={`relative group font-large ${
              scrolled ? 'text-gray-900' : 'text-gray-50'
            } transition-all duration-300 ease-in-out hover:text-green-500`}
          >
            About
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-500 transition-all group-hover:w-full"></span>
          </Link>
          <Link
            href="/contact"
            className={`relative group font-large ${
              scrolled ? 'text-gray-900' : 'text-gray-50'
            } transition-all duration-300 ease-in-out hover:text-green-500`}
          >
            Contact
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-500 transition-all group-hover:w-full"></span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
