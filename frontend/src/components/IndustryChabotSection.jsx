import GlassSection from "./GlassSection";
import { industryConfig } from "./IndustryConfig";

const IndustryChatbotSection = ({ industry, Chatbot }) => {
  const { chatbotPrompt } = industryConfig[industry];

  return (
    <GlassSection>
      <h2 className="heading-font text-3xl text-center mb-6">
        Ask Our AI
      </h2>
      <p className="text-center text-lg text-gray-700 mb-12">
        {chatbotPrompt}
      </p>

      <div className="max-w-3xl mx-auto">
        <Chatbot industry={industry} />
      </div>
    </GlassSection>
  );
};

export default IndustryChatbotSection;
