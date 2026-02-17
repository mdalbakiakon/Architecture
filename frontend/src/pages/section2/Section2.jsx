// // import React from "react";

// // const Section2 = () => {
// //   return (
// //     <div className="w-full bg-[#171717] px-20 py-30">
// //       <div className="">
// //         <img
// //           src="/section_2_hero.webp"
// //           alt=""
// //           decoding="async"
// //           loading="lazy"
// //           fetchPriority="low"
// //           className="w-full object-center object-cover rounded-4xl"
// //         />
// //       </div>

// //       <div className="mt-15 w-full max-w-3xl mx-auto text-[#151515] flex flex-col justify-center items-start gap-5">
// //         <p className="uppercase text-[65px] leading-17 font-antonio font-bold">WE ARE PROUD OF OUR <br /> EXCLUSIVE PARTNERS</p>
// //         <p className="uppercase text-[22px] leading-8.25 font-antonio font-semibold tracking-widest">WANT TO START A STUNNING PROJECT AND CREATE A <br /> FANTASTIC INTERIOR TOGETHER?</p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Section2;

// import React, { useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import SplitType from "split-type";
// import { ArrowUpRight } from "lucide-react";

// gsap.registerPlugin(ScrollTrigger);

// const Section2 = () => {
//   useEffect(() => {
//     // Split first paragraph into characters
//     const heading = new SplitType("#headingText", { types: "chars" });

//     // Split second paragraph into characters
//     const sub = new SplitType("#subText", { types: "chars" });

//     // Initial color dark
//     gsap.set([...heading.chars, ...sub.chars], { color: "#151515" });

//     // Timeline for scroll-based fill
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: "#textContainer",
//         start: "top 85%",
//         end: "bottom 55%",
//         scrub: 1.2,
//       },
//     });

//     tl.to(heading.chars, {
//       color: "#e5e5e5",
//       duration: 2,
//       stagger: 0.06,
//     });

//     tl.to(sub.chars, {
//       color: "#e5e5e5",
//       duration: 2,
//       stagger: 0.04,
//     });
//   }, []);

//   return (
//     <div className="w-full bg-[#171717] px-20 py-30">
//       {/* Image */}
//       <div>
//         <img
//           src="/hero2.webp"
//           alt=""
//           decoding="async"
//           loading="lazy"
//           fetchPriority="low"
//           className="w-full object-center object-cover rounded-4xl"
//         />
//       </div>

//       {/* Text Container */}
//       <div
//         id="textContainer"
//         className="mt-15 w-full max-w-3xl mx-auto flex flex-col justify-center items-start gap-10"
//       >
//         {/* First Paragraph */}
//         <p
//           id="headingText"
//           className="uppercase text-[65px] leading-17 font-antonio font-bold text-[#151515]"
//         >
//           WE ARE PROUD OF OUR <br />
//           EXCLUSIVE PARTNERS
//         </p>

//         {/* Second Paragraph */}
//         <p
//           id="subText"
//           className="uppercase text-[22px] leading-8.25 font-antonio font-semibold tracking-widest text-[#151515]"
//         >
//           WANT TO START A STUNNING PROJECT AND CREATE A <br />
//           FANTASTIC INTERIOR TOGETHER?
//         </p>

//         <button className="group flex justify-center items-center gap-2.5 cursor-pointer">
//           <div className="uppercase bg-[#0d0d0d] px-10 py-3.5 rounded-full text-white text-3.25 leading-4 tracking-widest font-medium shadow-lg">
//             Learn More
//           </div>
//           <div
//             id="arrow"
//             className="p-3.5 rounded-full bg-[#0d0d0d] shadow-lg transition-all duration-350 ease-out relative right-3.5 group-hover:right-0 group-hover:rotate-45"
//           >
//             <ArrowUpRight className="w-4.5 h-4.5 text-white" />
//           </div>
//         </button>
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
    const headingSplit = new SplitType("#headingText", { types: "chars" });
    const subSplit = new SplitType("#subText", { types: "chars" });

    const allChars = [...headingSplit.chars, ...subSplit.chars];

    // Initial state
    gsap.set(allChars, {
      color: "#151515",
      willChange: "color",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#textContainer",
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
    tl.to(subSplit.chars, {
      color: "#e5e5e5",
      duration: 3,
      stagger: {
        each: 0.025,
        from: "start",
      },
    }, "-=0.5"); // slight overlap

    return () => {
      headingSplit.revert();
      subSplit.revert();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
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
        {/* Heading */}
        <p
          id="headingText"
          className="uppercase text-[65px] leading-17 font-antonio font-bold text-[#151515]"
        >
          WE ARE PROUD OF OUR <br />
          EXCLUSIVE PARTNERS
        </p>

        {/* Sub Text */}
        <p
          id="subText"
          className="uppercase text-[22px] leading-8.25 font-antonio font-semibold tracking-widest text-[#151515]"
        >
          WANT TO START A STUNNING PROJECT AND CREATE A <br />
          FANTASTIC INTERIOR TOGETHER?
        </p>

        {/* Button */}
        <button className="group flex justify-center items-center gap-2.5 cursor-pointer">
          <div className="uppercase bg-[#0d0d0d] px-10 py-3.5 rounded-full text-white text-3.25 leading-4 tracking-widest font-medium shadow-lg">
            Learn More
          </div>
          <div
            className="p-3.5 rounded-full bg-[#0d0d0d] shadow-lg transition-all duration-300 ease-out relative right-3.5 group-hover:right-0 group-hover:rotate-45"
          >
            <ArrowUpRight className="w-4.5 h-4.5 text-white" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Section2;
