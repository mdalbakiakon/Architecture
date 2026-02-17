import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Headings from "../../components/section1/Headings";
import Socials from "../../components/section1/Socials";

gsap.registerPlugin(ScrollTrigger);

const Landing = () => {
  const heroRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!heroRef.current || !sectionRef.current) return;

    // Set will-change for performance before animation starts
    gsap.set(heroRef.current, { willChange: "transform" });

    const animation = gsap.to(heroRef.current, {
      yPercent: 20, // smoother + responsive parallax
      ease: "none",
      force3D: true,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });

    // Cleanup
    return () => {
      animation.scrollTrigger?.kill();
      animation.kill();
      gsap.set(heroRef.current, { willChange: "auto" });
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full h-dvh text-white overflow-hidden relative"
    >
      {/* Hero image */}
      <picture className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <source type="image/avif" srcSet="/arc_hero.avif 1920w" sizes="100vw" />
        <source type="image/webp" srcSet="/arc_hero.webp 1920w" sizes="100vw" />
        <img
          ref={heroRef}
          src="/arc_hero.webp"
          alt="Hero"
          decoding="async"
          fetchPriority="high"
          loading="eager"
          className="w-full h-full object-bottom object-cover transform-gpu"
          style={{ willChange: "transform" }}
        />
      </picture>

      {/* Overlay content */}
      <div
        id="overlay"
        className="relative z-10 w-full h-full flex flex-col justify-end items-center text-center gap-5"
      >
        <Headings />
        <Socials />
      </div>
    </section>
  );
};

export default Landing;
