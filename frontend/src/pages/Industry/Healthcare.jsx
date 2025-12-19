import IndustryFAQ from "../../components/IndustryFAQ";
import IndustryHero from "../../components/IndustryHero";
import IndustryOverview from "../../components/IndustryOverview";
import IndustryProblems from "../../components/IndustryProblems";
import IndustrySolution from "../../components/IndustrySolution";
import IndustryOutcomes from "../../components/IndustryOutcomes";
import FinalPoster from "../../components/FinalPoster";
import Footer from "../../components/Footer";

const Healthcare = () => {
  return (
    <>
      <IndustryHero
        title={"Reliable Healthcare\nSystems at Scale"}
        description="Ensure performance, availability, and trust for critical healthcare applications."
        bgImage="/images/healthcare-hero.jpg"
        theme="healthcare"
      />

      <IndustryOverview industry="healthcare" />
      <IndustryProblems industry="healthcare" />
      <IndustrySolution industry="healthcare" />
      <IndustryOutcomes industry="healthcare" />

      <IndustryFAQ industry="healthcare" />

      <FinalPoster />
      <Footer />
    </>
  );
};

export default Healthcare;
