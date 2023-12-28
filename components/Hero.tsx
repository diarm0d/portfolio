import React from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";

const Hero = () => {
  return (
    <>
      <div className="relative flex justify-center items-center">
        <div className="absolute top-0 z-10 bg-[#1B1B1B] opacity-75 max-w-7xl w-full h-16 rounded-b-md shadow-md shadow-[#7568BA]/50">
          <div className="grid grid-cols-4 justify-items-center mt-4">
            <div>
              <Image
                alt="test"
                src="/logo.svg"
                width={28}
                height={28}
                className="invert"
              />
            </div>
            <div className="col-span-2">
              {" "}
              <ul className="flex justify-center items-center">
                <li className="ml-12 hover:brightness-150 hover:scale-105 hover:text-white transition-all">
                  <a href="#">// HOME</a>
                </li>
                <li className="ml-12 hover:brightness-125 hover:scale-105 transition-all">
                  <a href="#">// ABOUT US</a>
                </li>
                <li className="ml-12 hover:brightness-125 hover:scale-105 transition-all">
                  <a href="#">// RFQ</a>
                </li>
                <li className="ml-12 hover:brightness-125 hover:scale-105 transition-all">
                  <a href="#">// CONTACT US</a>
                </li>
              </ul>
            </div>
            <div className="flex">
              <FaGithub size={24} />
              <FaLinkedin size={24} className="ml-4" />
              <FaTwitterSquare size={24} className="ml-4" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen h-screen flex justify-center items-center hero-container">
        <div className="environment -z-10 w-screen h-screen bg-black" />
        <div className="grid grid-cols-2 items-center max-w-7xl">
          <div className="">
            <h2 className="hero glitch layers mb-12" data-text="歡迎光臨">
              <span>歡迎光臨</span>
            </h2>
            <div>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
              architecto ea repellat incidunt atque, ducimus, iste nulla tempore
              porro deserunt et dolore consequatur ut. Dignissimos enim
              asperiores veniam dolor et.
            </div>
            <button className="bg-[#7568BA] shadow-lg px-8 py-4 rounded-md mt-8 hover:brightness-125 hover:scale-105 transition-all">
              Download my CV <IoMdDownload size={20} className="inline-block" />
            </button>
            <button className="bg-none border-2 shadow-inner px-8 py-4 rounded-md mt-8 ml-8 hover:brightness-125 hover:scale-105 transition-all">
              Book a call
            </button>
          </div>
          <div className="flex justify-center items-center">
            <Image
              alt="test"
              src="/diarmuid.png"
              className="rounded-full"
              width={400}
              height={400}
            />
          </div>
        </div>
        <div className="absolute bottom-8">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* <h2 className="text-center text-lg font-semibold leading-8 text-white">
            Trusted by the world’s most innovative teams
          </h2> */}
            <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
              <Image
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg"
                alt="Transistor"
                width={158}
                height={48}
              />
              <Image
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/reform-logo-white.svg"
                alt="Reform"
                width={158}
                height={48}
              />
              <Image
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg"
                alt="Tuple"
                width={158}
                height={48}
              />
              <Image
                className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg"
                alt="SavvyCal"
                width={158}
                height={48}
              />
              <Image
                className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/statamic-logo-white.svg"
                alt="Statamic"
                width={158}
                height={48}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
