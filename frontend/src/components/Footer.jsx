import React from "react";
import { images } from "../constants/index";
import {
  AiOutlineTwitter,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
import { FaFacebook, FaHeart } from "react-icons/fa";
import { BsInstagram, BsTelegram, BsYoutube } from "react-icons/bs";

function Footer() {
  return (
    <section className="flex bg-darK-hard justify-center items-center">
      <footer className="container max-auto grid grid-cols-10 px-5 py-10 gap-y-10 gap-x-5 md:pt-20 md:grid-cols-12 lg:grid-cols-10 md:gap-x-10">
        <div className="col-span-5 md:col-span-4 lg:col-span-2 lg:col-start-auto">
          <h3 className="text-darK-light font-bold md:text-lg">Product</h3>
          <ul className="text-[#959EAD] text-sm mt-5 space-y-4">
            <li>
              <a href="/">Landing page</a>
            </li>
            <li>
              <a href="/">Features</a>
            </li>
            <li>
              <a href="/">Documentation</a>
            </li>
            <li>
              <a href="/">Pricing</a>
            </li>
          </ul>
        </div>
        <div className="col-span-5 md:col-span-4 lg:col-span-2 lg:col-start-auto">
          <h3 className="text-darK-light font-bold md:text-lg">More</h3>

          <ul className="text-[#959EAD] text-sm mt-5 space-y-4">
            <li>
              <a href="/">Landing page</a>
            </li>
            <li>
              <a href="/">Features</a>
            </li>
            <li>
              <a href="/">Documentation</a>
            </li>
            <li>
              <a href="/">Pricing</a>
            </li>
          </ul>
        </div>
        <div className="col-span-5 md:col-span-4 md:col-start-5 lg:col-span-2 lg:col-start-auto">
          <h3 className="text-darK-light font-bold md:text-lg">Services</h3>

          <ul className="text-[#959EAD] text-sm mt-5 space-y-4">
            <li>
              <a href="/">Landing page</a>
            </li>
            <li>
              <a href="/">Features</a>
            </li>
            <li>
              <a href="/">Documentation</a>
            </li>
            <li>
              <a href="/">Pricing</a>
            </li>
          </ul>
        </div>
        <div className="col-span-5 md:col-span-4 lg:col-span-2 lg:col-start-auto">
          <h3 className="text-darK-light font-bold md:text-lg">Company</h3>

          <ul className="text-[#959EAD] text-sm mt-5 space-y-4">
            <li>
              <a href="/">Landing page</a>
            </li>
            <li>
              <a href="/">Features</a>
            </li>
            <li>
              <a href="/">Documentation</a>
            </li>
            <li>
              <a href="/">Pricing</a>
            </li>
          </ul>
        </div>

        <div className="x col-span-10 md:order-first md:col-span-4  lg:col-span-2 lg:col-start-auto">
          <img
            src={images.logo}
            alt="logo"
            className="brightness-0 invert mx-auto md:mx-0"
          />
          <p className="text-sm text-darK-light text-center mt-10 md:text-left md:text-base lg:text-sm">
            Build your best blogging page on Bloggers
          </p>
          <ul className="flex justify-center items-center mt-5 space-x-4 text-gray-300 md:justify-start lg:space-x-2">
            <li>
              <a href="/">
                <AiOutlineTwitter className="w-6 h-6 " />
              </a>
            </li>
            <li>
              <a href="/">
                <BsYoutube className="w-6 h-6 " />
              </a>
            </li>
            <li>
              <a href="/">
                <BsInstagram className="w-6 h-6 " />
              </a>
            </li>
            <li>
              <a href="/">
                <FaFacebook className="w-6 h-6 " />
              </a>
            </li>
            <li>
              <a href="/">
                <BsTelegram className="w-6 h-6 " />
              </a>
            </li>
          </ul>
        </div>

        <div className="hidden md:flex md:flex-col md:items-center md:space-y-4 md:col-span-12 mt-10 lg:col-span-10">
          <div className="bg-primary rounded-full p-3 text-white">
            <FaHeart className="h-auto w-8" />
          </div>
          <p className="font-bold italic text-darK-light">
            Copyrights @2024. Created with love
          </p>
        </div>
      </footer>
    </section>
  );
}

export default Footer;
