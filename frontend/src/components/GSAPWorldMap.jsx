import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { MAP_MASK } from "./map-data.js";
import { TextPlugin } from "gsap/TextPlugin"; // <-- 1. Import TextPlugin
import TopNav from "./TopNav.jsx";

// --- CONFIGURATION ---
const GRID_ROWS = MAP_MASK.length;
const GRID_COLS = MAP_MASK[0].length;
const SQUARE_SIZE_REM = 0.5;

// Register the plugin (GSAP best practice)
gsap.registerPlugin(TextPlugin); // <-- 2. Register Plugin

// --- BASE COLORS ---
const COLORS = {
  // Base Color for visible Land tiles
  LAND_TILE: "#dce3ef", // Hover Color
  HOVER_COLOR: "#8bcdfa", // Border for Land tiles (Revert to dark for light background)
  tileBorder: "rgba(0, 0, 0, 0.1)",
  heroText: "#333333", // Dark text for light background
  heroTextShadow: "none", // Gradient Colors for the Land squares

  GRADIENT_DARK: "rgba(255, 255, 255, 0.2)",
  GRADIENT_LIGHT: "rgba(25, 38, 51, 0.1)",
};

// --- CSS INJECTION: DYNAMIC GRADIENT & ROTATION STYLES ---

// 1. Keyframes for land movement and map rotation
const gradientKeyframes = `
@keyframes land-glow-move {
    0% { background-position: 0% 0%; }
    100% { background-position: 200% 200%; } 
}

/* New keyframes for small screen rotation */
@keyframes rotate-map-h {
    0% { transform: translate(-50%, -50%) translateX(0); }
    100% { transform: translate(-50%, -50%) translateX(-15%); } /* Moves map 15% to the left */
}
`;

// 2. CSS rule using the keyframes and pseudo-element
const gradientStyle = `
.moving-land-gradient {
    position: relative;
    overflow: hidden; 
    background-color: ${COLORS.LAND_TILE}; 
}

/* Ensure the hover effect overrides the pseudo-element */
.moving-land-gradient:hover {
    z-index: 10 !important;
}

.moving-land-gradient::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    
    background: linear-gradient(
        60deg,
        ${COLORS.GRADIENT_LIGHT},
        ${COLORS.GRADIENT_DARK},
        ${COLORS.GRADIENT_LIGHT}
    );
    background-size: 200% 200%;
    opacity: 0.6; 

    /* Use linear infinite for a smooth, continuous wave effect */
    animation: land-glow-move 12s linear infinite;
    z-index: 1; 
}

.moving-land-gradient[style*="background-color: ${COLORS.HOVER_COLOR.toLowerCase()}"]::after {
    opacity: 0; 
}

/* *** MEDIA QUERY FOR SMALL SCREEN ROTATION *** */
@media (max-width: 768px) {
    .square-map-grid-mobile-rotate {
        /* Makes the grid wider than the screen to allow movement */
        width: calc(${GRID_COLS} * ${SQUARE_SIZE_REM}rem * 1.5); 
        
        /* Apply the smooth rotation animation */
        animation: rotate-map-h 45s linear infinite alternate;
        
        /* Must override the fixed transform applied via inline style for non-mobile */
        transform: translate(-50%, -50%) translateX(0);
    }
}
`;

// --- STYLES DEFINITION ---
const styles = {
  squareMapContainer: {
    width: "100vw",
    height: "100vh",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden", // New light background color
    backgroundColor: "transparent",
  },

  squareMapGrid: {
    display: "grid",
    gridTemplateColumns: `repeat(${GRID_COLS}, ${SQUARE_SIZE_REM}rem)`,
    gridTemplateRows: `repeat(${GRID_ROWS}, ${SQUARE_SIZE_REM}rem)`,
    gap: "1px",
    position: "absolute",
    top: "50%",
    left: "50%", // Base transform (will be overridden by media query on mobile)
    transform: "translate(-50%, -50%)",
  },

  // Adjusted styles for the overlay text for visibility on light background
  heroTextOverlay: {
    position: "absolute",
    textAlign: "center",
    padding: "2rem",
    zIndex: 20,
    opacity: 0, // GSAP controls opacity
    pointerEvents: "none",
  },
  h1Style: {
    color: COLORS.heroText,
    fontSize: "2rem",
    fontWeight: 600,
    marginBottom: "0.5rem",
    textShadow: COLORS.heroTextShadow,
  },
  pStyle: {
    color: COLORS.heroText,
    fontSize: "1rem",
    fontWeight: 300,
    textShadow: COLORS.heroTextShadow,
  },

  // GSAPWorldMap.jsx (within STYLES DEFINITION)

  landTileBaseStyle: {
    width: `${SQUARE_SIZE_REM}rem`,
    height: `${SQUARE_SIZE_REM}rem`,

    // ➡️ ADDED DARK BACKGROUND COLOR HERE
    backgroundColor: "transparent",

    // 1. Update Border Color: Uses the new transparent light border
    border: `2px solid ${COLORS.tileBorder}`,

    transition: "background-color 0.3s ease, border-color 0.3s ease",
    cursor: "pointer",
    opacity: 1,
    zIndex: 5,
  },

  waterTileStyle: {
    width: `${SQUARE_SIZE_REM}rem`,
    height: `${SQUARE_SIZE_REM}rem`,
    backgroundColor: "transparent",
    border: "none",
    opacity: 1,
  },
};

// --- UTILITY FUNCTION: Find Neighbors ---
// Note: This function relies on squareRefs.current being defined inside the component scope.
const getNeighborIndices = (squareRefs, centerIndex, radius = 2) => {
  const neighbors = [];
  const centerRow = Math.floor(centerIndex / GRID_COLS);
  const centerCol = centerIndex % GRID_COLS;

  for (let r = centerRow - radius; r <= centerRow + radius; r++) {
    for (let c = centerCol - radius; c <= centerCol + radius; c++) {
      if (r >= 0 && r < GRID_ROWS && c >= 0 && c < GRID_COLS) {
        const neighborIndex = r * GRID_COLS + c;
        if (
          squareRefs.current[neighborIndex] &&
          squareRefs.current[neighborIndex].getAttribute("data-type") === "land"
        ) {
          neighbors.push(neighborIndex);
        }
      }
    }
  }
  return neighbors;
};

// --- COMPONENT ---
const GSAPWorldMap = () => {
  const squareRefs = useRef([]);
  const landTiles = useRef([]);
  const overlayRef = useRef(null);
  const gridRef = useRef(null); // Ref added for the grid container // 1. Inject CSS Styles on mount
  const h1Ref = useRef(null); // <-- ADD THIS REF

  useEffect(() => {
    const styleTag = document.createElement("style");
    styleTag.innerHTML = gradientKeyframes + gradientStyle;
    document.head.appendChild(styleTag);
    return () => {
      document.head.removeChild(styleTag);
    };
  }, []); // 2. Initial GSAP Reveal (remains the same)

  useEffect(() => {
    landTiles.current = squareRefs.current.filter(
      (el) => el && el.getAttribute("data-type") === "land"
    );
    gsap.set(landTiles.current, {
      opacity: 0,
      scale: 0.5,
      transformOrigin: "center center",
    });

    // Store the final text
    const finalHeroText = "Meet Your Business Partner";
    // Set the H1 text initially to a blank string or scrambled text before the animation starts
    if (h1Ref.current) {
      h1Ref.current.textContent = "8UY1 908H J8US70QG 9O4JAL3";
    }

    const timeline = gsap.timeline({
      delay: 0.5,
      onComplete: () => {
        // Use updated overlay styles
        gsap.to(overlayRef.current, {
          opacity: 1,
          duration: 1.5,
          ease: "power2.out",
        });

        // 🌟 NEW: Scramble animation starts after the map fully appears
        gsap.to(
          h1Ref.current,
          {
            duration: 6, // Duration of the scramble
            text: {
              value: finalHeroText,
              scramble: true, // Enables the scrambling effect
              chars:
                "01-/.#$@%^&*()+=[]{}|1JN2J43JRNT45JNO4I54OO4P[[4O5N;.,,FL.S[[", // Characters to use for the scramble effect
            },
            ease: "power3.out",
          },
          "<0.1"
        );
      },
    });
    timeline.to(landTiles.current, {
      opacity: 1,
      scale: 1,
      duration: 0.75,
      ease: "back.out(1.7)",
      stagger: { amount: 1.0, from: "random" },
    });

    return () => {
      timeline.kill();
    };
  }, []); // 3. AREA HOVER LOGIC

  const handleMouseEnter = (index, type) => {
    if (type !== "land") return; // Pass squareRefs to the utility function
    const neighborIndices = getNeighborIndices(squareRefs, index, 2);
    const targets = neighborIndices
      .map((i) => squareRefs.current[i])
      .filter((el) => el);
    gsap.to(targets, {
      scale: (i) => (i === index ? 1.3 : 1.1),
      backgroundColor: COLORS.HOVER_COLOR,
      duration: 0.25,
      ease: "power2.out",
      overwrite: "auto",
      zIndex: 10,
      stagger: 0.01,
    });
  };

  const handleMouseLeave = (index, type) => {
    if (type !== "land") return; // Pass squareRefs to the utility function
    const neighborIndices = getNeighborIndices(squareRefs, index, 2);
    const targets = neighborIndices
      .map((i) => squareRefs.current[i])
      .filter((el) => el);

    gsap.to(targets, {
      scale: 1,
      backgroundColor: COLORS.LAND_TILE,
      duration: 0.4,
      ease: "power2.out",
      overwrite: "auto",
      zIndex: 5,
      stagger: 0.01,
    });
  };

  const flatMap = MAP_MASK.flat();

  return (
    <div style={styles.squareMapContainer}>
                 {" "}
      <div
        ref={gridRef}
        style={styles.squareMapGrid}
        // Apply the new class that contains the media-queried animation
        className="square-map-grid-mobile-rotate"
      >
                       {" "}
        {flatMap.map((isLand, index) => {
          const type = isLand === 1 ? "land" : "water";
          const tileStyle =
            isLand === 1 ? styles.landTileBaseStyle : styles.waterTileStyle;
          const className = isLand === 1 ? "moving-land-gradient" : "";

          return (
            <div
              key={index}
              style={tileStyle}
              className={className}
              data-type={type}
              ref={(el) => (squareRefs.current[index] = el)}
              onMouseEnter={() => handleMouseEnter(index, type)}
              onMouseLeave={() => handleMouseLeave(index, type)}
            />
          );
        })}
                   {" "}
      </div>
      <div>
        <TopNav />
      </div>
      <div ref={overlayRef} style={styles.heroTextOverlay}>
        <main className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 **dark**">
          <div className="container mx-auto max-w-4xl text-center">
            <h1
              ref={h1Ref} // <-- ATTACH THE REF HERE
              className="text-5xl md:text-7xl font-display font-black text-slate-900 dark:text-white leading-tight tracking-tighter"
            >
              Meet Your Business Partner            {" "}
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-300">
              Imagine a clone who loves doing the tasks you don’t. That’s us.
            </p>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 items-center justify-center gap-4 max-w-lg mx-auto pointer-events-auto">
              <a
                className="
    flex items-center justify-center gap-2
    w-full sm:w-auto lg:w-[220px]
    bg-slate-900 dark:bg-slate-200
    text-white dark:text-slate-900
    font-semibold
    py-3 px-6 text-base
    lg:py-2.5 lg:px-5 lg:text-sm
    rounded-lg
    hover:bg-slate-700 dark:hover:bg-white
    transition-all duration-300
  "
                href="#"
              >
                <span>API documentation</span>
                <span className="material-symbols-outlined">
                  arrow_right_alt
                </span>
              </a>
              <Link
                to="/get-in-touch"
                className="
    flex items-center justify-center
    w-full sm:w-auto lg:w-[220px]
    bg-primary
    text-white
    font-semibold
    py-3 px-6 text-base
    lg:py-2.5 lg:px-5 lg:text-sm
    rounded-lg
    shadow-lg shadow-blue-500/30
    hover:bg-blue-600
    transition-all duration-300
    hover:scale-105
  "
              >
                <span>Get Connect</span>
              </Link>
            </div>
            <div
              onClick={() => {
                const chatbotSection =
                  document.getElementById("chatbot-section");
                if (chatbotSection) {
                  chatbotSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
              className="mt-12 max-w-2xl mx-auto pointer-events-auto cursor-pointer group"
            >
              <div className="relative">
                {/* Gradient Glow */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>

                {/* Search Input and Button Container */}
                <div className="relative flex items-center bg-slate-900/80 dark:bg-slate-900/90 backdrop-blur-sm border border-slate-700/50 p-1.5 rounded-xl">
                  <input
                    readOnly
                    className="w-full bg-transparent text-slate-200 
             placeholder:text-transparent md:placeholder:text-slate-500
             py-3 pl-4 pr-36 focus:ring-0 border-0 outline-none text-base cursor-pointer"
                    placeholder="see how connect can help your business"
                    type="text"
                  />

                  <div className="absolute inset-y-1.5 right-1.5 flex items-center justify-center gap-2 bg-gradient-to-br from-blue-500 to-purple-600 text-white font-semibold py-2 px-4 rounded-lg text-sm group-hover:from-blue-600 group-hover:to-purple-700 transition-all">
                    <span className="material-symbols-outlined text-base">
                      auto_awesome
                    </span>
                    <span>ask sherlock</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default GSAPWorldMap;
