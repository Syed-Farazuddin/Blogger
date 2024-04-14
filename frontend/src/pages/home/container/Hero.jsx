import React from "react";
import { FiSearch } from "react-icons/fi";
import { images } from "../../../constants";
function Hero() {
  return (
    <section className="mx-auto px-5 py-5 flex flex-col lg:flex-row lg:items-center lg:justify-center">
      <div className="mt-10 lg:w-1/2">
        <h1 className="text-3xl font-roboto text-center font-bold text-darK-soft xl:text-5xl lg:text-left md:text-5xl lg:max-w-[540px] lg:text-4xl">
          Read the most interesting articles
        </h1>
        <p className="mt-4 text-center text-darK-light md:text-xl lg:text-left lg:text-base xl:text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
        <div className="flex flex-col mt-10 gap-2.5 relative lg:mt-6 xl:mt-10">
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 h-6 w-6 text-[#959EAD]" />
            <input
              type="text"
              placeholder="Search Article"
              className="placeholder:font-bold font-semibold text-darK-soft placeholder:text-[#959EAD] pl-12 pr-3 py-3 w-full focus:outline-none shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] md:py-4 rounded-lg"
            />
          </div>
          <button className="bg-primary w-full text-white font-semibold rounded-lg px-5 py-3 md:absolute md:right-2 md:top-1/2 md:-translate-y-1/2 md:py-2 md:w-fit">
            Search
          </button>
        </div>
        <div className="flex flex-col lg:flex-row lg:flex-nowrap lg:gap-x-4 lg:mt-7 lg:items-start ">
          <span className="font-semibold text-darK-light mt-2 lg:mt-4 italic lg:text-sm xl:text-base">
            Popular Tags:
          </span>
          <ul className="flex flex-wrap gap-x-2.5 gap-y-2.5 mt-3 lg:text-sm xl:text-base">
            <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
              Design
            </li>
            <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
              User Interfaces
            </li>
            <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
              User Experience
            </li>
          </ul>
        </div>
      </div>
      <div className="hidden lg:block lg:1/2">
        <img className="w-full" src={images.hero} alt="user reading articles" />
      </div>
    </section>
  );
}

export default Hero;
