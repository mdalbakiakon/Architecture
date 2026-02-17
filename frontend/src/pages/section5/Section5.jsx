// import React from "react";
// import gsap from "gsap";

// const Section5 = () => {

//   return (
//     <div className="w-full h-dvh flex flex-nowrap justify-center items-center">
//       <div className="w-1/3 h-full relative">
//         <img
//           src="/Home.webp"
//           alt=""
//           loading="lazy"
//           decoding="async"
//           fetchPriority="low"
//           className="w-full h-full object-bottom object-cover"
//         />
//         <div className="absolute inset-0 z-10 bg-[#111]/50">

//         </div>
//       </div>

//       <div className="w-1/3 h-full relative">
//         <img
//           src="/mid_car.webp"
//           alt=""
//           loading="lazy"
//           decoding="async"
//           fetchPriority="low"
//           className="w-full h-full object-center object-cover"
//         />

//         <div className="absolute inset-0 z-10 bg-[#111]/50">

//         </div>
//       </div>

//       <div className="w-1/3 h-full relative z-0">
//         <img
//           src="/cat.webp"
//           alt=""
//           loading="lazy"
//           decoding="async"
//           fetchPriority="low"
//           className="w-full h-full object-bottom object-cover"
//         />

//         <div className="absolute inset-0 z-10 bg-[#111]/50">

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Section5;

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

const Section5 = () => {
  const containerRef = useRef();
  const img1 = useRef();
  const img2 = useRef();
  const img3 = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Left Image - slow movement
      gsap.to(img1.current, {
        y: -180,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Middle Image - medium movement
      gsap.to(img2.current, {
        y: -180,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Right Image - fast movement
      gsap.to(img3.current, {
        y: -180,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-dvh flex flex-nowrap justify-center items-center overflow-hidden"
    >
      {/* Left */}
      <div className="w-1/3 h-full relative overflow-hidden">
        <img
          ref={img1}
          src="/Home.webp"
          alt=""
          className="w-full h-[120%] object-top object-cover"
        />
        <div className="absolute inset-0 z-10 bg-[#111]/60">
          <div className="w-full h-full relative">
            <div className="absolute left-0 bottom-0 w-full h-fit flex flex-col justify-between items-center p-7.5">
              <div className="flex justify-between items-center w-full">
                <div className="flex justify-center items-center gap-2.5 text-[#d9d9d9]">
                  <p className="bg-[#161616] text-sm font-medium px-2.5 py-1.5 rounded-full">
                    Exterior Design
                  </p>
                  <p className="bg-[#161616] text-sm font-medium px-2.5 py-1.5 rounded-full">
                    Architecture
                  </p>
                </div>

                <div className="p-3.5 rounded-full bg-[#161616] shadow-lg transition-all duration-350 ease-out relative right-2.5 hover:right-0 hover:rotate-45 cursor-pointer">
                  <ArrowUpRight className="w-4.5 h-4.5 text-[#d9d9d9]" />
                </div>
              </div>

              <div className="mt-2.5 text-[30px] leading-8 font-antonio font-extrabold uppercase text-left tracking-widest w-full text-[#d9d9d9]">
                Greenary Exterior in<br /> City Chaos &copy; 2024
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Middle */}
      <div className="w-1/3 h-full relative overflow-hidden">
        <img
          ref={img2}
          src="/mid_car.webp"
          alt=""
          className="w-full h-[120%] object-top object-cover"
        />
        <div className="absolute inset-0 z-10 bg-[#111]/60">
          <div className="w-full h-full relative">
            <div className="absolute left-0 bottom-0 w-full h-fit flex flex-col justify-between items-center p-7.5">
              <div className="flex justify-between items-center w-full">
                <div className="flex justify-center items-center gap-2.5 text-[#d9d9d9]">
                  <p className="bg-[#161616] text-sm font-medium px-2.5 py-1.5 rounded-full">
                    Photography
                  </p>
                  <p className="bg-[#161616] text-sm font-medium px-2.5 py-1.5 rounded-full">
                    Branding
                  </p>
                </div>

                <div className="p-3.5 rounded-full bg-[#161616] shadow-lg transition-all duration-350 ease-out relative right-2.5 hover:right-0 hover:rotate-45 cursor-pointer">
                  <ArrowUpRight className="w-4.5 h-4.5 text-[#d9d9d9]" />
                </div>
              </div>

              <div className="mt-2.5 text-[30px] leading-8 font-antonio font-extrabold uppercase text-left tracking-widest w-full text-[#d9d9d9]">
                The arc of<br /> Dream &copy; 2021
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="w-1/3 h-full relative overflow-hidden">
        <img
          ref={img3}
          src="/cat.webp"
          alt=""
          className="w-full h-[120%] object-top object-cover"
        />
        <div className="absolute inset-0 z-10 bg-[#111]/60">
          <div className="w-full h-full relative">
            <div className="absolute left-0 bottom-0 w-full h-fit flex flex-col justify-between items-center p-7.5">
              <div className="flex justify-between items-center w-full">
                <div className="flex justify-center items-center gap-2.5 text-[#d9d9d9]">
                  <p className="bg-[#161616] text-sm font-medium px-2.5 py-1.5 rounded-full">
                    Interior Design
                  </p>
                  <p className="bg-[#161616] text-sm font-medium px-2.5 py-1.5 rounded-full">
                    Furniture
                  </p>
                </div>

                <div className="p-3.5 rounded-full bg-[#161616] shadow-lg transition-all duration-350 ease-out relative right-2.5 hover:right-0 hover:rotate-45 cursor-pointer">
                  <ArrowUpRight className="w-4.5 h-4.5 text-[#d9d9d9]" />
                </div>
              </div>

              <div className="mt-2.5 text-[30px] leading-8 font-antonio font-extrabold uppercase text-left tracking-widest w-full text-[#d9d9d9]">
                Cozy Interior <br /> of peace &copy; 2025
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
