import GlassSection from "./GlassSection";
import { industryConfig } from "./industryConfig";

const IndustrySolution = ({ industry }) => {
  const { solutionSteps } = industryConfig[industry];

  return (
    <GlassSection>
      <h2 className="heading-font text-3xl text-center mb-16">
        How Connect Helps
      </h2>

      <div className="flex flex-col md:flex-row gap-10 justify-center">
        {solutionSteps.map((step, i) => (
          <div
            key={i}
            className="flex-1 p-8 bg-white/40 backdrop-blur-xl rounded-3xl shadow-lg text-center"
          >
            <span className="text-purple-600 text-2xl font-bold">
              {i + 1}
            </span>
            <p className="mt-4 text-lg">{step}</p>
          </div>
        ))}
      </div>
    </GlassSection>
  );
};

export default IndustrySolution;
