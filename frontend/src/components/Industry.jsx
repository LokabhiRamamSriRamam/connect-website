import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
// import mindmapImg from "../assets/mindmap.png"; // Assuming you have this, otherwise using /mindmap.png as placeholder

const businesses = [
  "Spa",
  "Salon & Beauty",
  "Hospitality",
  "F&B",
  "Healthcare",
  "Retail",
  "Education",
  "Real Estate",
  "Dental Clinic",
];
const questions = [
  "How can Connect help me grow my sales and revenue?",
  "Can Connect make my day‑to‑day operations more efficient?",
  "How does Connect help me keep track of my expenses and profits?",
  "Can Connect help me manage my staff and their schedules better?",
  "How will Connect improve the experience my customers have with my business?",
  "Can Connect bring my bookings, billing, and reports into one place?",
  "How does Connect reduce the manual work my team does every day?",
  "Can Connect work with the tools and systems I already use?",
  "How will Connect give me clear insights into how my business is performing?",
  "Is Connect easy for my team to learn and start using quickly?",
];

const Industry = () => {
  const businessRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  // Rotate questions
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuestion((prev) => (prev + 1) % questions.length);
    }, 4000); // change every 4 seconds
    return () => clearInterval(interval);
  }, []);

  // Rotate business index every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % businesses.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Animate text whenever it changes
  useEffect(() => {
    if (businessRef.current) {
      gsap.fromTo(
        businessRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
      );
    }
  }, [index]);

  return (
    <>
      <style>{`
  .smooth-font {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Light white → sky blue moving background */
  .industry-bg {
    position: relative;
    overflow: hidden;
  }
  .industry-bg::before {
    content: "";
    position: absolute;
    inset: 0;
    background: "transparent";
    background-size: 300% 300%;
    animation: industryGradientDrift 5s ease-in-out infinite;
    z-index: -1;
  }
  @keyframes industryGradientDrift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  /* Chat UI Gradient Animation */
  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  .animate-gradient {
    background-size: 200% 200%;
    animation: gradientShift 15s ease infinite;
  }
`}</style>

      {/* --- MAIN WRAPPER --- */}
      <div className="bg-transparent w-full py-12 flex flex-col font-display smooth-font items-center">
        
        {/* --- 1. COMMON HEADING (Moved outside the columns) --- */}
        <div className="w-full max-w-6xl px-6 lg:px-8 mb-12 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold tracking-tight text-gray-800">
            Naturally Integrates into your{" "}
            <span ref={businessRef} className="text-primary inline-block">
              {businesses[index]}
            </span>{" "}
            Business
          </h2>
        </div>

        {/* --- 2. SIDE-BY-SIDE CONTENT CONTAINER --- */}
        <div className="w-full max-w-7xl px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
          
          {/* --- LEFT COLUMN: CHAT UI --- */}
          {/* Added h-[550px] for fixed height and w-full lg:w-1/2 for equal width columns */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
             {/* Set explicit height here to match image container below */}
            <div className="relative w-full max-w-xl h-[550px] rounded-xl shadow-2xl overflow-hidden">
              {/* Moving Gradient Background */}
              <div className="absolute inset-0 animate-gradient bg-gradient-to-r from-purple-500 via-pink-500 to-blue-400 opacity-30 blur-3xl"></div>

              <div className="absolute inset-0 bg-surface-light dark:bg-surface-dark/60 border border-subtle-light dark:border-subtle-dark/50 backdrop-blur-lg rounded-xl z-10 p-6 flex flex-col justify-between">
                {/* Top Section */}
                <div>
                  {/* Instruction Line */}
                  <div className="text-center text-text-secondary-light dark:text-text-secondary-dark mb-6 z-20 relative">
                    <p className="text-sm sm:text-base font-medium">
                      Select your business type, then ask Stark anything about
                      your business.
                    </p>
                  </div>

                  {/* Dropdown */}
                  <div className="w-full mx-auto mb-6 relative z-20">
                    <select className="w-full bg-surface-light/70 dark:bg-surface-dark/50 border border-subtle-light dark:border-subtle-dark/50 text-text-primary-light dark:text-text-primary-dark rounded-lg p-3 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer">
                      <option>Healthcare</option>
                      <option>Salon and Beauty</option>
                      <option>Dental Clinics</option>
                      <option>Real Estate</option>
                      <option>Education</option>
                      <option>Restaurant</option>
                      <option>Ecommerce</option>
                      <option>Finance</option>
                    </select>
                  </div>

                  {/* Center Suggested Questions Box */}
                  <div className="flex items-center justify-center z-20 my-4">
                    <div className="w-full bg-surface-light/80 dark:bg-surface-dark/70 border border-subtle-light/80 dark:border-subtle-dark/70 rounded-xl px-4 py-4 shadow-sm flex items-start space-x-3 min-h-[100px]">
                      <span className="material-symbols-outlined text-primary mt-1">
                        lightbulb
                      </span>
                      <div className="flex-1 flex items-center h-full">
                        <p key={currentQuestion} className="text-sm sm:text-base font-medium text-text-primary-light dark:text-text-primary-dark italic animate-fadeIn">
                           “{questions[currentQuestion]}”
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Input Area (Bottom) */}
                <div className="w-full bg-surface-light/70 dark:bg-surface-dark/50 p-3 rounded-xl border border-subtle-light dark:border-subtle-dark/50 backdrop-blur-lg flex items-center space-x-3 relative z-20 mt-4">
                  <span className="material-symbols-outlined text-primary ml-2">
                    auto_awesome
                  </span>
                  <textarea
                    className="flex-1 bg-transparent border-none focus:ring-0 resize-none text-text-primary-light dark:text-text-primary-dark placeholder:text-text-secondary-light dark:placeholder:text-text-secondary-dark text-base font-light py-2 focus:outline-none"
                    placeholder="Ask anything about your business..."
                    rows={1}
                  />
                  <button className="w-10 h-10 flex items-center justify-center bg-primary rounded-lg hover:opacity-90 transition-opacity">
                    <span className="material-symbols-outlined text-black">
                      arrow_upward
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* --- RIGHT COLUMN: MindMap Image --- */}
          {/* Added h-[550px] to match the chat UI height precisely */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <div className="w-full max-w-xl h-[550px] flex items-center justify-center p-4 rounded-xl relative">
               {/* Optional: Add a subtle background or shadow to the image container to match the chat UI box feel */}
               {/* <div className="absolute inset-0 bg-white/30 backdrop-blur-md rounded-xl shadow-xl z-0"></div> */}
               
              <img 
                src="/mindmap.png" 
                alt="MindMap Integration" 
                // object-contain ensures the image fits within the 550px height without stretching
                className="w-full h-full object-contain relative z-10 drop-shadow-xl" 
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Industry;