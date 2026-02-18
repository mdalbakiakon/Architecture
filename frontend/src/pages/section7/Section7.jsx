import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Section7 = () => {
  const headingRef = useRef(null);

  useEffect(() => {
    const animateText = (container) => {
      const chars = container.querySelectorAll("span span"); // inner letter spans
      gsap.set(chars, { color: "#151515", willChange: "color" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top 90%",
          end: "+=900",
          scrub: 1.5,
          invalidateOnRefresh: true,
        },
        defaults: { ease: "power2.out" },
      });

      tl.to(chars, {
        color: "#e5e5e5",
        duration: 3,
        stagger: { each: 0.03, from: "start" },
      });
    };

    animateText(headingRef.current);
  }, []);

  // Split words → letters (word span wraps letter spans)
  const splitWordLetters = (text) =>
    text.split(" ").map((word, i) => (
      <span key={i} className="inline-block px-1">
        {word.split("").map((char, j) => (
          <span key={j}>{char}</span>
        ))}
      </span>
    ));

  return (
    <div className="bg-[#171717] w-full px-20 py-30 flex justify-center items-center">
      <div className="w-full max-w-5xl flex flex-col justify-center items-center gap-7.5">
        {/* section taglines */}
        <div
          id="textContainerSec7"
          className="w-1/2 flex justify-center items-center tracking-wider"
        >
          {/* Heading */}
          <p
            ref={headingRef}
            className="uppercase text-[65px] leading-17 font-antonio font-bold text-center"
          >
            {splitWordLetters("Latest & Greatest Projects")}
          </p>
        </div>

        <svg width="0" height="0">
          <clipPath id="curve-div" clipPathUnits="objectBoundingBox">
            <path
              d="
              M 0 0.05
              Q 0 0 0.05 0
              L 0.65 0
              Q 0.7 0 0.7 0.05
              L 0.7 0.1
              Q 0.7 0.15 0.75 0.15
              L 0.95 0.15
              Q 1 0.15 1 0.2
              L 1 0.95
              Q 1 1 0.95 1
              L 0.05 1
              Q 0 1 0 0.95
              Z
            "
            />
          </clipPath>
        </svg>

        <div className="w-full h-125 grid grid-cols-1 md:grid-cols-2 gap-7.5">
          {/* first project */}
          <div className="h-full w-full flex flex-col justify-center items-start relative hover:-translate-y-2.5 transition-all duration-350 ease-in-out">
            {/* tag */}
            <div className="absolute top-1 right-1 w-[28%] h-[10.25%] rounded-2xl bg-transparent flex justify-center items-center text-[#d9d9d9] text-center font-semibold text-lg">
              Ongoing
            </div>

            <div className="[clip-path:url(#curve-div)] flex-1 w-full">
              <img
                src="https://images.unsplash.com/photo-1735314463461-f5dbef3ef703?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="h-full object-center object-cover"
              />
            </div>

            {/* card info */}
            <div className="h-fit w-full flex flex-col justify-between items-start gap-0 text-left">
              <h3 className="text-base font-normal text-[#e5e5e5] leading-4 pt-5">
                Colorado, United State
              </h3>
              <h3 className="w-2/3 font-antonio text-3xl text-[#d9d9d9] font-semibold tracking-wider">
                Farm House
              </h3>
            </div>
          </div>





          {/* second project */}
          <div className="h-full w-full flex flex-col justify-center items-start relative hover:-translate-y-2.5 transition-all duration-350 ease-in-out">
            {/* tag */}
            <div className="absolute top-1 right-1 w-[28%] h-[10.25%] rounded-2xl bg-transparent flex justify-center items-center text-[#d9d9d9] text-center font-semibold text-lg">
              Signature
            </div>

            <div className="[clip-path:url(#curve-div)] flex-1 w-full">
              <img
                src="https://images.unsplash.com/photo-1742844553019-5874910636d4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="h-full object-center object-cover"
              />
            </div>

            {/* card info */}
            <div className="h-fit w-full flex flex-col justify-between items-start gap-0 text-left">
              <h3 className="text-base font-normal text-[#e5e5e5] leading-4 pt-5">
                California , United State
              </h3>
              <h3 className="w-2/3 font-antonio text-3xl text-[#d9d9d9] font-semibold tracking-wider">
                Empire Hotel
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section7;
