import React from "react";
import logo from "../assets/logo.png";
import {
  RiInstagramLine,
  RiFacebookCircleFill,
  RiTwitterFill,
  RiLinkedinFill,
} from "@remixicon/react";

const Footer = () => {
  return (
    <footer className="bg-black py-24 text-slate-100 mt-10 bg-cover">
      <div className="container mx-auto px-8">
        <div className="md:flex md:justify-between mt-4">
          <div className="mb-6 md:w-2/3">
            <img src={logo} className="h-14 w-24" alt="Logo" />
            <p className="md:w-2/4 mt-4 text-lg text-justify text-gray-400">
              Elevate your well-being with our premium Ayurvedic supplements. Crafted from natural ingredients, our supplements are designed to promote balance and vitality.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4 md:w-2/4">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                About
              </h2>
              <ul className="text-gray-400">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Support
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Help
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                Follow Us
              </h2>
              <ul className="text-gray-400">
                <li className="mb-4">
                  <a href="https://www.linkedin.com/abhirigayurveda/" className="hover:underline">
                    LinkedIn
                  </a>
                </li>
                <li className="mb-4">
                  <a href="https://www.facebook.com/abhirigayurveda/" className="hover:underline">
                    Facebook
                  </a>
                </li>
                <li className="mb-4">
                  <a href="https://www.instagram.com/abhirigayurveda/" className="hover:underline">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                Legal
              </h2>
              <ul className="text-gray-400">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Disclaimer
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-lg font-semibold text-gray-500 sm:text-center dark:text-gray-400">
            Copyright © 2024 <a href="/" className="hover:underline">Abhirig™</a>. All Rights Reserved.
          </span>
          <div className="flex mt-6 gap-6">
            <RiInstagramLine
              size={32}
              color="gray"
              className="hover:cursor-pointer hover:scale-90 transition duration-300 ease-in-out"
            />
            <RiFacebookCircleFill
              size={32}
              color="gray"
              className="hover:cursor-pointer hover:scale-90 transition duration-300 ease-in-out"
            />
            <RiTwitterFill
              size={32}
              color="gray"
              className="hover:cursor-pointer hover:scale-90 transition duration-300 ease-in-out"
            />
            <RiLinkedinFill
              size={32}
              color="gray"
              className="hover:cursor-pointer hover:scale-90 transition duration-300 ease-in-out"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
