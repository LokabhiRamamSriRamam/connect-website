import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ArrowRight } from "lucide-react";
import TopNav from "./TopNav";

const COLLAPSE_AT = 120; // scroll threshold

const IndustryHero = ({
  title,
  description,
  bgImage,
  theme = "light", // light | dark | brand
}) => {
  const headingRef = useRef(null);
  const heroRef = useRef(null);
  const [collapsed, setCollapsed] = useState(false);

  // Entry animation
  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
  }, [title]);

  // Scroll collapse logic
  useEffect(() => {
    const onScroll = () => {
      setCollapsed(window.scrollY > COLLAPSE_AT);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={heroRef}
      className={`relative w-screen overflow-hidden transition-[height] duration-700 ease-in-out ${
        collapsed ? "h-[88px]" : "h-[100vh]"
      }`}
    >
      {/* NAV (THEME-AWARE) */}
      <TopNav variant={collapsed ? "solid" : "glass"} theme={theme} />

      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt=""
          className={`w-full h-full object-cover transition-all duration-700 ${
            collapsed ? "scale-105 opacity-40" : "scale-100 opacity-60"
          }`}
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 25%, black 75%, transparent 100%)",
            maskImage:
              "linear-gradient(to right, transparent 0%, black 25%, black 75%, transparent 100%)",
          }}
        />
      </div>

      {/* CONTENT */}
      <div
        ref={headingRef}
        className={`relative z-10 h-full flex flex-col items-center justify-center text-center transition-all duration-700 ${
          collapsed ? "opacity-0 translate-y-8 pointer-events-none" : ""
        }`}
      >
        <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
          {title}
        </h1>

        <p className="mt-6 max-w-xl text-lg text-gray-600">
          {description}
        </p>

        <button className="mt-10 bg-purple-600 text-white px-10 py-4 rounded-full font-semibold shadow-lg inline-flex items-center">
          Talk to sales
          <ArrowRight className="w-5 h-5 ml-2" />
        </button>
      </div>
    </section>
  );
};

export default IndustryHero;
