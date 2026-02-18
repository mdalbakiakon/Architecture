import { ArrowUpRight } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full pt-30 pb-12.5 px-20 relative overflow-hidden">
      <div className="w-full max-w-5xl flex flex-col justify-center items-center mx-auto">
        <div className="w-full flex justify-between items-end border-b-2 border-[#252525] pb-12.5">
          <h2 className="font-antonio text-white text-[65px] leading-17 font-bold uppercase text-left">
            Time to <br /> Roar!
          </h2>
          <button className="group flex justify-center items-center gap-2.5 cursor-pointer">
            <div className="uppercase bg-white px-10 py-3.5 rounded-full text-[#111] text-3.25 leading-4 tracking-widest font-medium shadow-lg">
              Let's Talk
            </div>
            <div
              id="arrow"
              className="p-3.5 rounded-full bg-white shadow-lg transition-all duration-350 ease-out relative right-3.5 group-hover:right-0 group-hover:rotate-45"
            >
              <ArrowUpRight className="w-4.5 h-4.5 text-[#111]" />
            </div>
          </button>
        </div>

        <div className="pt-12.5 w-full flex flex-col justify-between items-center gap-12.5">
          <div className="grid grid-cols-2 relative w-full">
            <div className="flex flex-col justify-center items-start">
              <div className="w-2/3 font-antonio text-xl text-[#d9d9d9] font-semibold tracking-wider">
                Email
              </div>
              <div className="text-sm font-normal text-[#e5e5e5] leading-4 pt-1.5">
                mdalbakiakon@gmail.com
              </div>
            </div>

            <div className="flex justify-center items-center absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
              <div className="logo w-50">
                <img
                  src="/log.svg"
                  alt=""
                  className="w-full object-center object-cover relative -left-7"
                />
              </div>
            </div>
            <div className="text-right h-full flex justify-end items-center text-sm font-normal text-[#e5e5e5] leading-4 gap-1.5">
             Copyright © 2026 <a href="https://www.linkedin.com/in/md-al-baki-akon-352989362/">Md. Al Baki Akon</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
