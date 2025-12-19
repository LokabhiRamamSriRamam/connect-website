import IndustryFAQ from "../../components/IndustryFAQ";
import IndustryHero from "../../components/IndustryHero";
import IndustryOverview from "../../components/IndustryOverview";
import IndustryProblems from "../../components/IndustryProblems";
import IndustrySolution from "../../components/IndustrySolution";
import IndustryOutcomes from "../../components/IndustryOutcomes";
import FinalPoster from "../../components/FinalPoster";
import Footer from "../../components/Footer";

const Education = () => {
  return (
    <>
      <IndustryHero
        title={"AI-Powered\nEducation Platforms"}
        description="Deliver personalized learning, track student progress, and scale educational content with AI."
        bgImage="/images/education-hero.jpg"
        theme="education"
      />

      <IndustryOverview industry="education" />
      <IndustryProblems industry="education" />
      <IndustrySolution industry="education" />
      <IndustryOutcomes industry="education" />

      <IndustryFAQ industry="education" />

      <FinalPoster />
      <Footer />
    </>
  );
};

export default Education;
