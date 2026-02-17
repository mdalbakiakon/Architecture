import { ArrowUpRight } from "lucide-react";
import React from "react";

const LinkBadge = () => {
  return (
    <div className="px-20 py-2.5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2.5">
      <div className="bg-[#171717] p-7.5 flex-1 flex shrink-0 flex-col justify-between items-start text-white rounded-lg">
        <div className="">
          <p className="text-[#b3de4f] uppercase text-sm leading-5.25 text-left">
            Public
          </p>
          <p className="text-[30px] leading-11.25 font-antonio font-extralight uppercase text-left tracking-widest">
            Arcitecture
          </p>
        </div>
        <div className="mt-10 flex justify-start items-center gap-1.5">
          <div className="uppercase text-base font-medium tracking-wider">Details</div>
          <div className="p-2.5 rounded-full bg-[#111]">
            <ArrowUpRight className="text-[#b3de4f] w-4.5 h-4.5"/>
          </div>
        </div>
      </div>


      <div className="bg-[#171717] p-7.5 flex-1 shrink-0 flex flex-col justify-between items-start text-white rounded-lg">
        <div className="">
          <p className="text-[#b3de4f] uppercase text-sm leading-5.25 text-left">
            Public
          </p>
          <p className="text-[30px] leading-11.25 font-antonio font-extralight uppercase text-left tracking-widest">
            Arcitecture
          </p>
        </div>
        <div className="mt-10 flex justify-start items-center gap-1.5">
          <div className="uppercase text-base font-medium tracking-wider">Details</div>
          <div className="p-2.5 rounded-full bg-[#111]">
            <ArrowUpRight className="text-[#b3de4f] w-4.5 h-4.5"/>
          </div>
        </div>
      </div>



      <div className="bg-[#171717] p-7.5 flex-1 shrink-0 flex flex-col justify-between items-start text-white rounded-lg">
        <div className="">
          <p className="text-[#b3de4f] uppercase text-sm leading-5.25 text-left">
            Residential
          </p>
          <p className="text-[30px] leading-11.25 font-antonio font-extralight uppercase text-left tracking-widest">
            Interior
          </p>
        </div>
        <div className="mt-10 flex justify-start items-center gap-1.5">
          <div className="uppercase text-base font-medium tracking-wider">Details</div>
          <div className="p-2.5 rounded-full bg-[#111]">
            <ArrowUpRight className="text-[#b3de4f] w-4.5 h-4.5"/>
          </div>
        </div>
      </div>


      <div className="bg-[#171717] p-7.5 flex-1 shrink-0 flex flex-col justify-between items-start text-white rounded-lg">
        <div className="">
          <p className="text-[#b3de4f] uppercase text-sm leading-5.25 text-left">
            Social
          </p>
          <p className="text-[30px] leading-11.25 font-antonio font-extralight uppercase text-left tracking-widest">
           URBANISM
          </p>
        </div>
        <div className="mt-10 flex justify-start items-center gap-1.5">
          <div className="uppercase text-base font-medium tracking-wider">Details</div>
          <div className="p-2.5 rounded-full bg-[#111]">
            <ArrowUpRight className="text-[#b3de4f] w-4.5 h-4.5"/>
          </div>
        </div>
      </div>





      

    </div>
  );
};

export default LinkBadge;
