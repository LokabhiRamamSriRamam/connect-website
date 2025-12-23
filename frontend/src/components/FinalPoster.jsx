import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const FinalPoster = () => {
  const headingRef = useRef(null); // GSAP animation for the main heading on mount

  useEffect(() => {
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );
    }
  }, []);

  const styles = `
    .smooth-font {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
  `;

  return (
    <>
            <style>{styles}</style>           {" "}
      {/* --- SECTION HEADER/HERO --- */}     {" "}
      <div className="container mx-auto max-w-6xl space-y-12 px-4 sm:px-6 pb-10 lg:px-8">
               {" "}
        <div className="flex items-center space-x-3 mb-4 pl-1">
                    <div className="h-1.5 w-6 bg-purple-500 rounded-full"></div>
                   {" "}
          <span className="text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase">
                        Scaling Solution          {" "}
          </span>
                   {" "}
          <div className="h-[1px] flex-grow bg-gray-200 ml-4 hidden sm:block opacity-30"></div>
                 {" "}
        </div>
               {" "}
        <div className="relative w-full rounded-3xl overflow-hidden bg-white border border-gray-200 group h-[500px] flex items-center shadow-2xl">
                   {" "}
          {/* --- BACKGROUND IMAGE WITH DECREASED TRANSPARENCY (opacity-60) --- */}
                   {" "}
          <div className="absolute inset-0 z-0">
                       {" "}
            <img
              alt="Futuristic background representing scalable architecture"
              src="/2077.jpg" // CHANGED: Increased opacity from 30 to 60 (Decreasing Transparency)
              className="w-full h-full object-cover object-right opacity-60 transition-transform duration-700 group-hover:scale-105"
            />
                       {" "}
            {/* CHANGED: Adjusted gradient overlay to via-white/70 for better contrast */}
                       {" "}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent z-10"></div>
                     {" "}
          </div>
                   {" "}
          <div
            ref={headingRef}
            className="relative z-20 w-full max-w-2xl px-8 md:px-12 py-12 flex flex-col justify-between h-full"
          >
                       {" "}
            <div className="space-y-6 mt-4">
                           {" "}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-[1.1]">
                                Built For Entrepreneurs{" "}
                <br className="hidden md:block" /> Like You              {" "}
              </h1>
                           {" "}
              <p className="text-lg md:text-xl text-gray-600 max-w-md font-light">
                                Connect does the work of a team. Without the
                Hiring Costs.              {" "}
              </p>
                         {" "}
            </div>
                       {" "}
            <div className="mt-8">
                           {" "}
              <Link
                to="/get-in-touch"
                className="bg-purple-600 text-white hover:bg-purple-700 transition-colors duration-200 px-8 py-3.5 rounded-full font-semibold text-sm md:text-base shadow-lg inline-flex items-center"
              >
                Talk to sales
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
                         {" "}
            </div>
                     {" "}
          </div>
                 {" "}
        </div>
             {" "}
      </div>
         {" "}
    </>
  );
};

export default FinalPoster;
