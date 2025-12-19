import GlassSection from "./GlassSection";
import { industryConfig } from "./industryConfig";

const IndustryProblems = ({ industry }) => {
  const { problems } = industryConfig[industry];

  return (
    <GlassSection>
      <h2 className="heading-font text-3xl text-center mb-14">
        Challenges We Solve
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {problems.map((problem, i) => (
          <div
            key={i}
            className="p-8 rounded-3xl bg-white/40 backdrop-blur-xl shadow-lg"
          >
            <p className="text-lg font-medium text-gray-800">{problem}</p>
          </div>
        ))}
      </div>
    </GlassSection>
  );
};

export default IndustryProblems;
