import GlassSection from "./GlassSection";
import { industryConfig } from "./IndustryConfig";

const IndustryOverview = ({ industry }) => {
  const data = industryConfig[industry];

  return (
    <GlassSection>
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="heading-font text-4xl font-bold text-gray-900">
            {data.title}
          </h2>
          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            {data.overview}
          </p>
        </div>

        <img
          src={data.image}
          alt={industry}
          className="rounded-3xl shadow-2xl object-cover w-full h-[360px]"
        />
      </div>
    </GlassSection>
  );
};

export default IndustryOverview;
