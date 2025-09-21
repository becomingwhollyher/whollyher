"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import DarkModeToggle from "./DarkModeToggle";
import { MobileMenuButton } from "./MobileMenuButton";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white dark:bg-gray-900 sticky top-0 z-50 shadow-sm">
      <div className="mx-auto max-w-[1780px]">
        <div className="w-[90%] md:w-[85%] mx-auto flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link className="block text-teal-600 dark:text-teal-300" href="/">
              <span className="sr-only">Home</span>
              <Image
                src="/images/whollyher_logo_purple_&pink.png"
                alt="WhollyHer"
                width={32}
                height={32}
                className="h-8 w-auto"
                priority
              />
            </Link>
          </div>

          <div className="flex items-center gap-5">
            <div
              className={`${
                isMenuOpen ? "block" : "hidden"
              } xl:flex gap-16 absolute max-w-[1780px] xl:relative top-16 xl:top-0 left-0 xl:left-auto w-full xl:w-auto bg-white xl:bg-transparent dark:bg-gray-900 xl:dark:bg-transparent shadow-lg xl:shadow-none p-4 xl:p-0`}
            >
              <nav aria-label="Global">
                <ul className="flex flex-col w-[90%] sm:w-[85%] mx-auto xl:flex-row h-full xl:items-center items-start gap-6 xl:text-sm text-xl ">
                  <li>
                    <Link
                      className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                      href="/about"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                      href="/community"
                    >
                      Community
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                      href="/programs"
                    >
                      Programs
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                      href="/services"
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                      href="/resources"
                    >
                      Resources
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-gray-500 whitespace-nowrap transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                      href="/get-involved"
                    >
                      Get Involved
                    </Link>
                  </li>
                </ul>
              </nav>

              <div className="flex gap-4 w-[90%] sm:w-[85%] mx-auto py-8">
                <Link
                  className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-teal-700 transition-colors"
                  href="/login"
                >
                  Login
                </Link>

                <Link
                  className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 hover:bg-gray-200 transition-colors dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
                  href="/counselor"
                >
                  Meet a Counselor
                </Link>
              </div>
            </div>

            <div className={`${isMenuOpen ? "block" : "hidden xl:block"}`}>
              <DarkModeToggle />
            </div>

            <div className="block xl:hidden">
              <MobileMenuButton onClick={toggleMenu} isOpen={isMenuOpen} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
