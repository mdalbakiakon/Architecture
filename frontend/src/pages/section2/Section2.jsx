// import React from "react";

// const Section2 = () => {
//   return (
//     <div className="w-full bg-[#171717] px-20 py-30">
//       <div className="">
//         <img
//           src="/section_2_hero.webp"
//           alt=""
//           decoding="async"
//           loading="lazy"
//           fetchPriority="low"
//           className="w-full object-center object-cover rounded-4xl"
//         />
//       </div>

//       <div className="mt-15 w-full max-w-3xl mx-auto text-[#151515] flex flex-col justify-center items-start gap-5">
//         <p className="uppercase text-[65px] leading-17 font-antonio font-bold">WE ARE PROUD OF OUR <br /> EXCLUSIVE PARTNERS</p>
//         <p className="uppercase text-[22px] leading-8.25 font-antonio font-semibold tracking-widest">WANT TO START A STUNNING PROJECT AND CREATE A <br /> FANTASTIC INTERIOR TOGETHER?</p>
//       </div>
//     </div>
//   );
// };

// export default Section2;



import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Section2 = () => {
  useEffect(() => {
    // Split first paragraph into characters
    const heading = new SplitType("#headingText", { types: "chars" });

    // Split second paragraph into characters
    const sub = new SplitType("#subText", { types: "chars" });

    // Initial color dark
    gsap.set([...heading.chars, ...sub.chars], { color: "#151515" });

    // Timeline for scroll-based fill
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#textContainer",
        start: "top 80%",
        end: "top 50%",
        scrub: 1.2, // smooth scroll-controlled animation
      },
    });

    // FIRST paragraph character-wise color fill
    tl.to(heading.chars, {
      color: "#e5e5e5",
      ease: "power2.out",
      stagger: 0.5, // stagger per character
    });

    // SECOND paragraph character-wise color fill AFTER first finishes
    tl.to(sub.chars, {
      color: "#e5e5e5",
      ease: "power2.out",
      stagger: 0.3,
    });
  }, []);

  return (
    <div className="w-full bg-[#171717] px-20 py-30">
      {/* Image */}
      <div>
        <img
          src="/hero2.webp"
          alt=""
          decoding="async"
          loading="lazy"
          fetchPriority="low"
          className="w-full object-center object-cover rounded-4xl"
        />
      </div>

      {/* Text Container */}
      <div
        id="textContainer"
        className="mt-15 w-full max-w-3xl mx-auto flex flex-col justify-center items-start gap-10"
      >
        {/* First Paragraph */}
        <p
          id="headingText"
          className="uppercase text-[65px] leading-17 font-antonio font-bold text-[#151515]"
        >
          WE ARE PROUD OF OUR <br />
          EXCLUSIVE PARTNERS
        </p>

        {/* Second Paragraph */}
        <p
          id="subText"
          className="uppercase text-[22px] leading-8.25 font-antonio font-semibold tracking-widest text-[#151515]"
        >
          WANT TO START A STUNNING PROJECT AND CREATE A <br />
          FANTASTIC INTERIOR TOGETHER?
        </p>

        <button className="group flex justify-center items-center gap-2.5 cursor-pointer">
        <div className="uppercase bg-[#0d0d0d] px-10 py-3.5 rounded-full text-white text-3.25 leading-4 tracking-widest font-medium shadow-lg">
          Learn More
        </div>
        <div
          id="arrow"
          className="p-3.5 rounded-full bg-[#0d0d0d] shadow-lg transition-all duration-350 ease-out relative right-3.5 group-hover:right-0 group-hover:rotate-45"
        >
          <ArrowUpRight className="w-4.5 h-4.5 text-white" />
        </div>
      </button>
      </div>
    </div>
  );
};

export default Section2;
