import GlassSection from "./GlassSection";
import { industryConfig } from "./industryConfig";

const IndustryOutcomes = ({ industry }) => {
  const { outcomes } = industryConfig[industry];

  return (
    <GlassSection>
      <h2 className="heading-font text-3xl text-center mb-14">
        Outcomes You Can Expect
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {outcomes.map((outcome, i) => (
          <div
            key={i}
            className="p-8 bg-gradient-to-br from-white/50 to-white/20 backdrop-blur-xl rounded-3xl shadow-xl text-center"
          >
            <p className="text-lg font-semibold">{outcome}</p>
          </div>
        ))}
      </div>
    </GlassSection>
  );
};

export default IndustryOutcomes;
