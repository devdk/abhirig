import logo from "../assets/logo.png";
import {
  RiInstagramLine,
  RiFacebookCircleFill,
  RiTwitterFill,
} from "@remixicon/react";

const Footer = () => {
  return (
    <>
      <footer class="bg-black py-24 text-slate-100 mt-10 bg-cover">
        <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div class="md:flex md:justify-between mt-4">
            <div class="mb-6">
              <img src={logo} class="h-14 w-24 md:mt-0 mt-8" alt="Logo" />
              <p className="md:w-2/3 mt-4 text-justify">
              Elevate your well-being with our premium Ayurvedic supplements. Crafted from natural ingredients, our supplements are designed to promote balance and vitality.
              </p>
            </div>
            <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  About
                </h2>
                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                  <li class="mb-4">
                    <a href="#" class="hover:underline">
                        Support       
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:underline">
                      Help
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Follow us
                </h2>
                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                  <li class="mb-4">
                    <a
                      href="/"
                      class="hover:underline "
                    >
                      Linkedin
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      class="hover:underline"
                    >
                      Facebook
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Legal
                </h2>
                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                  <li class="mb-4">
                    <a href="#" class="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:underline">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div class="sm:flex sm:items-center sm:justify-between">
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2024    {" "}
              <a href="/" class="hover:underline">
                Abhirig™
              </a>
              . All Rights Reserved.
            </span>
            <div class="flex mt-4 gap-4 sm:justify-center sm:mt-0">
              <RiInstagramLine
                size={24}
                color="gray"
                className="my-icon hover:cursor-pointer hover:scale-90  transition duration-300 ease-in-out"
              />
              <RiFacebookCircleFill
                size={24}
                color="gray"
                className="my-icon hover:cursor-pointer hover:scale-90  transition duration-300 ease-in-out"
              />
              <RiTwitterFill
                size={24}
                color="gray"
                className="my-icon hover:cursor-pointer hover:scale-90  transition duration-300 ease-in-out"
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
