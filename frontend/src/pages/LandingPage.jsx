import React, { useRef, useState, useEffect } from "react";
import GSAPWorldMap from "../components/GSAPWorldMap";
import Industry from "../components/Industry";
import BrandsSection from "../components/BrandsSection";
import Features from "../components/Features";
import FinalPoster from "../components/FinalPoster";
import Numbers1 from "../components/numbers";
import Numbers2 from "../components/Numbers.2";
import FAQ from "../components/FAQ.jsx";
import Footer from "../components/Footer";
import IntegrationSection from "../components/IntegrationSection";

function LandingPage() {
  const featuresRef = useRef(null);
  const [showFeatureNav, setShowFeatureNav] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowFeatureNav(entry.isIntersecting);
      },
      {
        threshold: 0.2,
      }
    );

    if (featuresRef.current) {
      observer.observe(featuresRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* 🌈 GLOBAL MOVING GRADIENT STYLES */}
  <style>{`
  /* Soft moving gradient from whitish-pink → whitish-blue → white */
  .landing-gradient {
    background: linear-gradient(
      120deg,
      rgba(255, 240, 245, 1),  /* very light pink */
      rgba(224, 240, 255, 1),  /* very light blue */
      rgba(255, 255, 255, 1)   /* pure white */
    );
    background-size: 300% 300%;
    animation: gradientShift 15s ease infinite;
  }

  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`}</style>

      <div className="relative min-h-screen overflow-hidden">
        {/* 🌈 FIXED GLOBAL BACKGROUND */}
        <div className="fixed inset-0 -z-10 landing-gradient" />

        {/* PAGE CONTENT */}
        <GSAPWorldMap />
      <Numbers2 />
        <Industry />
        <BrandsSection />

        {/* Observe Features section */}
        <div ref={featuresRef}>
          <Features showMobileNav={showFeatureNav} />
        </div>
        <Numbers1 />
        <FinalPoster />
             <IntegrationSection />
     
        <FAQ />
        <Footer />
      </div>
    </>
  );
}

export default LandingPage;
