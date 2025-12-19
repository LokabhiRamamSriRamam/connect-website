import IndustryFAQ from "../../components/IndustryFAQ";
import IndustryHero from "../../components/IndustryHero";
import IndustryOverview from "../../components/IndustryOverview";
import IndustryProblems from "../../components/IndustryProblems";
import IndustrySolution from "../../components/IndustrySolution";
import IndustryOutcomes from "../../components/IndustryOutcomes";
import FinalPoster from "../../components/FinalPoster";
import Footer from "../../components/Footer";

const RealEstate = () => {
  return (
    <>
      <IndustryHero
        title={"Next-Gen Real Estate\nManagement"}
        description="Simplify property operations, tenant communication, and market forecasting with AI-powered tools."
        bgImage="/images/realestate-hero.jpg"
        theme="realestate"
      />

      <IndustryOverview industry="realestate" />
      <IndustryProblems industry="realestate" />
      <IndustrySolution industry="realestate" />
      <IndustryOutcomes industry="realestate" />

      <IndustryFAQ industry="realestate" />

      <FinalPoster />
      <Footer />
    </>
  );
};

export default RealEstate;
