import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

const Section6 = () => {
  useEffect(() => {
    const headingSplit = new SplitType("#headingTextSec6", { types: "chars" });
    const subSplit = new SplitType("#subTextSec6", { types: "chars" });

    const allChars = [...headingSplit.chars, ...subSplit.chars];

    // Initial state
    gsap.set(allChars, {
      color: "#151515",
      willChange: "color",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#textContainerSec6",
        start: "top 90%",
        end: "+=900",
        scrub: 1.5,
        invalidateOnRefresh: true,
      },
      defaults: {
        ease: "power2.out",
      },
    });

    // Heading fill
    tl.to(headingSplit.chars, {
      color: "#e5e5e5",
      duration: 3,
      stagger: {
        each: 0.035,
        from: "start",
      },
    });

    // Sub text fill
    tl.to(
      subSplit.chars,
      {
        color: "#e5e5e5",
        duration: 3,
        stagger: {
          each: 0.025,
          from: "start",
        },
      },
      "-=0.5",
    ); // slight overlap

    return () => {
      headingSplit.revert();
      subSplit.revert();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div className="w-full px-20 py-30">
      <div className="max-w-5xl mx-auto h-max grid grid-cols-1 md:grid-cols-2">
        {/* Taglines */}
        <div className="w-full">
          <div
            id="textContainerSec6"
            className="mt-15 w-full max-w-5xl mx-auto flex flex-col justify-center items-start gap-10 sticky top-[7.5vh]"
          >
            {/* Heading */}
            <p
              id="headingTextSec6"
              className="uppercase text-[65px] leading-17 font-antonio font-bold"
            >
              What People Are <br />
              Saying?
            </p>

            {/* Sub Text */}
            <p
              id="subTextSec6"
              className="uppercase text-[22px] leading-8.25 font-antonio font-semibold tracking-widest"
            >
              Consumers today rely heavily on digital means to research products. We research a brand of bldend
            </p>
          </div>
        </div>

        <div className="w-full h-131 flex justify-end items-center">
          {/* card */}
          <div className="w-100 h-full bg-[#171717] rounded-2xl flex flex-col justify-center items-center overflow-hidden">
            <div className="h-1/5 w-full p-7.5">
              <div className="flex flex-col justify-start items-start gap-0">
                <div className="flex justify-start items-end gap-3">
                  <h3 className="font-antonio text-[30px] leading-11.25 font-semibold text-white text-end">
                    4.9
                  </h3>
                  <div className="w-4 pb-1.75">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path
                        fill="#ffd43b"
                        d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <p className="text-[15px] font-medium leading-7 tracking-wider uppercase text-[#d9d9d9]">
                  Out of 5 stars
                </p>
              </div>
            </div>

            <div className="p-7.5 w-full flex-1 flex flex-col justify-end items-start gap-7.5">
              <p className="text-[#d9d9d9] font-medium text-[22px] leading-10 uppercase tracking-wider">
                We full service digital agency that build’s fascinating users
                experiences...
              </p>
              <img src="/inverted.svg" alt="" className="w-18" />
            </div>

            <div className="h-1/5 w-full bg-[#d9d9d9] p-7.5 flex justify-between items-center gap-2.5">
              <div className="h-full aspect-square rounded-full overflow-hidden">
                <img
                  src="https://template.dsngrid.com/mexdot/dark/assets/img/team/1.jpg"
                  alt=""
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="flex-1 flex flex-col justify-center items-start">
                <p className="text-lg leading-6 font-semibold">Johnny Bravo</p>
                <p className="text-sm leading-3.5 text-[#5c5c5c] font-normal">
                  Client
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
