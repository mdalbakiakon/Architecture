// import React, { useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import SplitType from "split-type";
// import { ArrowUpRight } from "lucide-react";

// gsap.registerPlugin(ScrollTrigger);

// const Section2 = () => {
//   useEffect(() => {
//     const headingSplit = new SplitType("#headingText", { types: "chars" });
//     const subSplit = new SplitType("#subText", { types: "chars" });

//     const allChars = [...headingSplit.chars, ...subSplit.chars];

//     // Initial state
//     gsap.set(allChars, {
//       color: "#151515",
//       willChange: "color",
//     });

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: "#textContainer",
//         start: "top 90%",
//         end: "+=900", 
//         scrub: 1.5,
//         invalidateOnRefresh: true,
//       },
//       defaults: {
//         ease: "power2.out",
//       },
//     });

//     // Heading fill
//     tl.to(headingSplit.chars, {
//       color: "#e5e5e5",
//       duration: 3,
//       stagger: {
//         each: 0.035,
//         from: "start",
//       },
//     });

//     // Sub text fill
//     tl.to(subSplit.chars, {
//       color: "#e5e5e5",
//       duration: 3,
//       stagger: {
//         each: 0.025,
//         from: "start",
//       },
//     }, "-=0.5"); // slight overlap

//     return () => {
//       headingSplit.revert();
//       subSplit.revert();
//       ScrollTrigger.getAll().forEach((st) => st.kill());
//     };
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
//         className="mt-15 w-full max-w-5xl mx-auto flex flex-col justify-center items-start gap-10"
//       >
//         {/* Heading */}
//         <p
//           id="headingText"
//           className="uppercase text-[65px] leading-17 font-antonio font-bold text-[#151515]"
//         >
//           WE ARE PROUD OF OUR <br />
//           EXCLUSIVE PARTNERS
//         </p>

//         {/* Sub Text */}
//         <p
//           id="subText"
//           className="uppercase text-[22px] leading-8.25 font-antonio font-semibold tracking-widest text-[#151515]"
//         >
//           WANT TO START A STUNNING PROJECT AND CREATE A <br />
//           FANTASTIC INTERIOR TOGETHER?
//         </p>

//         {/* Button */}
//         <button className="group flex justify-center items-center gap-2.5 cursor-pointer">
//           <div className="uppercase bg-[#0d0d0d] px-10 py-3.5 rounded-full text-white text-3.25 leading-4 tracking-widest font-medium shadow-lg">
//             Learn More
//           </div>
//           <div
//             className="p-3.5 rounded-full bg-[#0d0d0d] shadow-lg transition-all duration-300 ease-out relative right-3.5 group-hover:right-0 group-hover:rotate-45"
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
    // ✅ CHANGE: words + chars (creates span > span structure)
    const headingSplit = new SplitType("#headingText", { types: "words, chars" });
    const subSplit = new SplitType("#subText", { types: "words, chars" });

    // ✅ CHANGE: make WORD span inline (prevents mid-word break)
    [...headingSplit.words, ...subSplit.words].forEach((word) => {
      word.style.display = "inline-block";
    });

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
        end: "+=650",
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
      "-=0.5"
    );

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
        className="mt-15 w-full max-w-5xl mx-auto flex flex-col justify-center items-start gap-10"
      >
        {/* Heading */}
        <p
          id="headingText"
          className="uppercase text-[65px] leading-17 font-antonio font-bold text-[#151515] tracking-wider"
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
          <div className="p-3.5 rounded-full bg-[#0d0d0d] shadow-lg transition-all duration-300 ease-out relative right-3.5 group-hover:right-0 group-hover:rotate-45">
            <ArrowUpRight className="w-4.5 h-4.5 text-white" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Section2;
