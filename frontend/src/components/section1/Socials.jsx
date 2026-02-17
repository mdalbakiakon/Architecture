import React from "react";
import {
  ArrowDownRight,
  Dribbble,
  Twitter,
  Instagram,
  Facebook,
  FacebookIcon,
} from "lucide-react";

const Socials = () => {
  return (
    <div className="w-full mt-4.5 pb-7.5 px-25 flex justify-between items-center">
      <div className="flex justify-between items-end gap-2.5">
        <p className="text-white text-3.25 leading-4 tracking-widest font-medium text-left">Social <br />Networks</p>
        <div className="w-15 h-0.5 bg-[#d9d9d9]"></div>
        <ul className="flex justify-between items-center gap-3.5">
          <li>
            <a href="#">
              <Dribbble className="w-4.5 h-4.5 text-white"/>
            </a>
          </li>
          <li>
            <a href="#">
              <Twitter className="w-4.5 h-4.5 text-white"/>
            </a>
          </li>
          <li>
            <a href="#">
              <Instagram className="w-4.5 h-4.5 text-white"/>
            </a>
          </li>
          <li>
            <a href="#">
              <Facebook className="w-4.5 h-4.5 text-white"/>
            </a>
          </li>
        </ul>
      </div>

      <button className="group flex justify-center items-center gap-2.5 cursor-pointer">
        <div className="uppercase bg-[#161616] px-10 py-3.5 rounded-full text-white text-3.25 leading-4 tracking-widest font-medium shadow-lg">
          About us
        </div>
        <div
          id="arrow"
          className="p-3.5 rounded-full bg-[#161616] shadow-lg transition-all duration-350 ease-out relative right-3.5 group-hover:right-0 group-hover:rotate-45"
        >
          <ArrowDownRight className="w-4.5 h-4.5 text-white" />
        </div>
      </button>
    </div>
  );
};

export default Socials;
