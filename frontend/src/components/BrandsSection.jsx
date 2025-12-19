import React from 'react';

const brands = [
  { name: "Anna's Kitchen", logo: "/Brands/Anna.png" },
  { name: "The Central App", logo: "/Brands/central-logo.png" },
  { name: "Harish Kitchen", logo: "/Brands/HK.png" },
  { name: "Juhi's Confident Clinic", logo: "/Brands/Juhi.png" },
  { name: "Subject Buddy", logo: "/Brands/SubjectBuddy.png" },
  { name: "The Fit Fork", logo: "/Brands/TFF.png" },
];

const BrandsSection = () => {
  return (
    <section className="relative z-10 py-16 bg-transparent dark:bg-background-dark border-t border-gray-200 dark:border-gray-800">
      
      <div className="container mx-auto px-4 mb-10 text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Brands that Love Us
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          Trusted by forward-thinking brands across domains
        </p>
      </div>

      <div className="relative overflow-hidden w-full group">
        
        {/* Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-12 md:w-24 z-20 bg-gradient-to-r from-[#EFEEFA] dark:from-background-dark to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-12 md:w-24 z-20 bg-gradient-to-l from-[#EFEEFA] dark:from-background-dark to-transparent pointer-events-none"></div>

        {/* KEY FIXES HERE:
            1. 'w-max': Forces the container to be as wide as its content (not the screen).
            2. 'min-w-full': Ensures it fills screen if content is small.
            3. Removed 'w-1/2' from children: They now size naturally.
        */}
        <div className="flex w-max min-w-full animate-scroll hover:[animation-play-state:paused]">
          
          {/* First Set */}
          <div className="flex items-center shrink-0 gap-12 px-6 md:gap-16 md:px-8">
            {brands.map((brand, index) => (
              <img
                key={`brand-1-${index}`}
                src={brand.logo}
                alt={`${brand.name} Logo`}
                // Reduced height slightly on mobile (h-6) -> desktop (h-10)
                className="h-6 md:h-10 w-auto opacity-60 hover:opacity-100 dark:invert transition-opacity duration-300 cursor-pointer object-contain mix-blend-multiply dark:mix-blend-normal"
              />
            ))}
          </div>

          {/* Duplicate Set */}
          <div className="flex items-center shrink-0 gap-12 px-6 md:gap-16 md:px-8">
            {brands.map((brand, index) => (
              <img
                key={`brand-2-${index}`}
                src={brand.logo}
                alt={`${brand.name} Logo`}
                className="h-6 md:h-10 w-auto opacity-60 hover:opacity-100 dark:invert transition-opacity duration-300 cursor-pointer object-contain mix-blend-multiply dark:mix-blend-normal"
              />
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;