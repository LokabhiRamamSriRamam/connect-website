import IndustryFAQ from "../../components/IndustryFAQ";
import IndustryHero from "../../components/IndustryHero";
import IndustryOverview from "../../components/IndustryOverview";
import IndustryProblems from "../../components/IndustryProblems";
import IndustrySolution from "../../components/IndustrySolution";
import IndustryOutcomes from "../../components/IndustryOutcomes";
import FinalPoster from "../../components/FinalPoster";
import Footer from "../../components/Footer";

const Restaurant = () => {
  return (
    <>
      <IndustryHero
        title={"Smarter Restaurant\nOperations"}
        description="Handle peak hours, online orders, and kitchen operations with AI-driven efficiency."
        bgImage="/images/restaurant-hero.jpg"
        theme="restaurant"
      />

      <IndustryOverview industry="restaurant" />
      <IndustryProblems industry="restaurant" />
      <IndustrySolution industry="restaurant" />
      <IndustryOutcomes industry="restaurant" />

      <IndustryFAQ industry="restaurant" />

      <FinalPoster />
      <Footer />
    </>
  );
};

export default Restaurant;
