import { ArrowUpRight } from "lucide-react";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Section3 = () => {
  const secondImgRef = useRef(null);
  const fourthImgRef = useRef(null);

  useEffect(() => {
    if (secondImgRef.current) {
      gsap.fromTo(
        secondImgRef.current,
        { y: -80 }, // smaller start offset
        {
          y: 80, // smaller end offset
          ease: "none",
          scrollTrigger: {
            trigger: secondImgRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }

    if (fourthImgRef.current) {
      gsap.fromTo(
        fourthImgRef.current,
        { y: -40 },
        {
          y: 60,
          ease: "none",
          scrollTrigger: {
            trigger: fourthImgRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }
  }, []);



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
    <section className="w-full py-30 px-20">
      <div className="w-full max-w-5xl mx-auto">
        {/* section taglines */}
        <div
          id="textContainerSec7"
          className="w-1/2 flex justify-center items-center tracking-wider"
        >
          {/* Heading */}
          <p
            ref={headingRef}
            className="uppercase text-[65px] leading-17 font-antonio font-bold text-left"
          >
            {splitWordLetters("Find a service That works for you")}
          </p>
        </div>
      </div>

      <div className="w-full px-15 mt-15">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5">

          {/* first */}
          <div className="bg-[#171717] px-7.5 py-20 flex flex-col justify-between text-white rounded-lg relative overflow-hidden">
            <img
              src="/project.svg"
              alt=""
              className="w-35 absolute bottom-0 right-0"
            />

            <div>
              <p className="text-[#b3de4f] uppercase text-sm">Public</p>
              <p className="text-[30px] font-antonio font-extralight uppercase tracking-widest">
                Architecture
              </p>
            </div>

            <div className="text-base text-[#d9d9d9] mt-7.5">
              Elevate your brand’s presence with tailored solutions that resonate
              with your brand
            </div>

            <div className="mt-12.5 flex items-center gap-1.5">
              <div className="uppercase text-base font-medium tracking-wider">
                Details
              </div>
              <div className="p-2.5 rounded-full bg-[#111]">
                <ArrowUpRight className="text-[#b3de4f] w-4.5 h-4.5" />
              </div>
            </div>
          </div>

          {/* second - PARALLAX */}
          <div className="bg-[#171717] relative rounded-lg overflow-hidden h-[420px]">
            <img
              ref={secondImgRef}
              src="https://images.unsplash.com/photo-1629069528705-248869aa2e4a?q=80&w=1176&auto=format&fit=crop"
              alt=""
              className="absolute left-0 top-[-25%] w-full h-[150%] object-cover will-change-transform"
            />
          </div>

          {/* third */}
          <div className="bg-[#171717] px-7.5 py-20 flex flex-col justify-between text-white rounded-lg relative overflow-hidden">
            <img
              src="/project.svg"
              alt=""
              className="w-35 absolute bottom-0 right-0"
            />

            <div>
              <p className="text-[#b3de4f] uppercase text-sm">Public</p>
              <p className="text-[30px] font-antonio font-extralight uppercase tracking-widest">
                Architecture
              </p>
            </div>

            <div className="text-base text-[#d9d9d9] mt-7.5">
              Elevate your brand’s presence with tailored solutions that resonate
              with your brand
            </div>

            <div className="mt-12.5 flex items-center gap-1.5">
              <div className="uppercase text-base font-medium tracking-wider">
                Details
              </div>
              <div className="p-2.5 rounded-full bg-[#111]">
                <ArrowUpRight className="text-[#b3de4f] w-4.5 h-4.5" />
              </div>
            </div>
          </div>

          {/* fourth - PARALLAX */}
          <div className="bg-[#171717] relative rounded-lg overflow-hidden h-105">
            <img
              ref={fourthImgRef}
              src="https://images.unsplash.com/photo-1678762200388-51e11225d4de?q=80&w=1163&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="absolute left-0 top-[-25%] w-full h-[135%] object-cover will-change-transform"
            />
          </div>

          {/* first */}
          <div className="bg-[#171717] px-7.5 py-20 flex flex-col justify-between text-white rounded-lg relative overflow-hidden">
            <img
              src="/project.svg"
              alt=""
              className="w-35 absolute bottom-0 right-0"
            />

            <div>
              <p className="text-[#b3de4f] uppercase text-sm">Public</p>
              <p className="text-[30px] font-antonio font-extralight uppercase tracking-widest">
                Architecture
              </p>
            </div>

            <div className="text-base text-[#d9d9d9] mt-7.5">
              Elevate your brand’s presence with tailored solutions that resonate
              with your brand
            </div>

            <div className="mt-12.5 flex items-center gap-1.5">
              <div className="uppercase text-base font-medium tracking-wider">
                Details
              </div>
              <div className="p-2.5 rounded-full bg-[#111]">
                <ArrowUpRight className="text-[#b3de4f] w-4.5 h-4.5" />
              </div>
            </div>
          </div>

          {/* first */}
          <div className="bg-[#171717] px-7.5 py-20 flex flex-col justify-between text-white rounded-lg relative overflow-hidden">
            <img
              src="/project.svg"
              alt=""
              className="w-35 absolute bottom-0 right-0"
            />

            <div>
              <p className="text-[#b3de4f] uppercase text-sm">Public</p>
              <p className="text-[30px] font-antonio font-extralight uppercase tracking-widest">
                Architecture
              </p>
            </div>

            <div className="text-base text-[#d9d9d9] mt-7.5">
              Elevate your brand’s presence with tailored solutions that resonate
              with your brand
            </div>

            <div className="mt-12.5 flex items-center gap-1.5">
              <div className="uppercase text-base font-medium tracking-wider">
                Details
              </div>
              <div className="p-2.5 rounded-full bg-[#111]">
                <ArrowUpRight className="text-[#b3de4f] w-4.5 h-4.5" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Section3;
