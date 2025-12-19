import IndustryFAQ from "../../components/IndustryFAQ";
import IndustryHero from "../../components/IndustryHero";
import IndustryOverview from "../../components/IndustryOverview";
import IndustryProblems from "../../components/IndustryProblems";
import IndustrySolution from "../../components/IndustrySolution";
import IndustryOutcomes from "../../components/IndustryOutcomes";
import FinalPoster from "../../components/FinalPoster";
import Footer from "../../components/Footer";

const Ecommerce = () => {
  return (
    <>
      <IndustryHero
        title={"High-Performance\nEcommerce at Scale"}
        description="Handle traffic spikes, flash sales, and global demand with AI-driven reliability."
        bgImage="/images/ecommerce-hero.jpg"
        theme="ecommerce"
      />

      <IndustryOverview industry="ecommerce" />
      <IndustryProblems industry="ecommerce" />
      <IndustrySolution industry="ecommerce" />
      <IndustryOutcomes industry="ecommerce" />

      <IndustryFAQ industry="ecommerce" />

      <FinalPoster />
      <Footer />
    </>
  );
};

export default Ecommerce;
