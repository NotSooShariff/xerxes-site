import React from "react";
import Image from "next/image";
import RefImage from "./hero-reference.png";

const Hero = () => {
  return (
    <section class="text-white body-font lg:px-32">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="-rotate-6 lg:flex-grow lg:items-center md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl lg:text-9xl mb-4 font-medium text-white">
            Xerxes
          </h1>
          <h1 class="text-center title-font sm:text-4xl text-3xl lg:text-6xl mb-4 font-medium text-white">
            the
          </h1>
          <h1 class="title-font sm:text-4xl text-3xl lg:text-9xl mb-4 font-medium text-white">
            Xooper
          </h1>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            class="object-cover object-center rounded"
            alt="hero"
            src="/hero.png"
          />
        </div>
      </div>
      <div>
        <p class="text-white text-2xl text-center mb-12">
        CA: 0X00000000343503592035002489095820485
        </p>
      </div>
    </section>
  );
};

export default Hero;
