"use client"
import Image from "next/image";
import React, { useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";

const Navbar = () => {
  const [isOverlayVisible, setOverlayVisible] = useState(false);

  const toggleOverlay = () => {
    setOverlayVisible(!isOverlayVisible);
  };

  return (
    <div>
      <nav class="bg-white mt-16 border-gray-200 dark:bg-black ">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="/navlogo.png" class="h-20" alt="Logo" />
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            class="text-xl inline-flex items-center p-2 w-10 h-10 justify-center text-white rounded-lg md:hidden hover:text-green-400 focus:outline-none dark:text-white dark:hover:text-green-500"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-16 h-16"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          {isOverlayVisible && (
            <div class="flex justify-center items-center  fixed top-0 left-0 w-full h-full bg-black z-50">
              <ul class="text-white text-4xl text-center">
                <li class='py-3 cursor-pointer'>CHART</li>
                <li class='py-3 cursor-pointer'>TG</li>
                <li class='py-3 cursor-pointer'>X</li>
                <li class='py-3 cursor-pointer'>BUY NOW!</li>
                <li onClick={toggleOverlay} class='text-green-500 pt-10 cursor-pointer'>CLOSE</li>
              </ul>
            </div>

          )}
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="text-2xl flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-black dark:border-gray-700">
              <li>
                <a
                  href="#"
                  class="block mt-2 py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  CHART
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block mt-2 py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  TG
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block mt-2 py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  X
                </a>
              </li>
              <li>
                <div className="bg-white px-5 py-2 hover:bg-green-400 hover:scale-125 transition-all duration-500 cursor-pointer">
                  <a
                    href="#"
                    class="block py-5 px-5 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0 dark:text-black md:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    BUY NOW!
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
