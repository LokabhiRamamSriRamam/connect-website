import IndustryFAQ from "../../components/IndustryFAQ";
import IndustryHero from "../../components/IndustryHero";
import IndustryOverview from "../../components/IndustryOverview";
import IndustryProblems from "../../components/IndustryProblems";
import IndustrySolution from "../../components/IndustrySolution";
import IndustryOutcomes from "../../components/IndustryOutcomes";
import FinalPoster from "../../components/FinalPoster";
import Footer from "../../components/Footer";

const Finance = () => {
  return (
    <>
      <IndustryHero
        title={"AI-Driven Financial\nSolutions"}
        description="Optimize transactions, detect fraud, and enhance customer experience with AI-powered systems."
        bgImage="/images/finance-hero.jpg"
        theme="finance"
      />

      <IndustryOverview industry="finance" />
      <IndustryProblems industry="finance" />
      <IndustrySolution industry="finance" />
      <IndustryOutcomes industry="finance" />

      <IndustryFAQ industry="finance" />

      <FinalPoster />
      <Footer />
    </>
  );
};

export default Finance;
