import IndustryFAQ from "../../components/IndustryFAQ";
import IndustryHero from "../../components/IndustryHero";
import IndustryOverview from "../../components/IndustryOverview";
import IndustryProblems from "../../components/IndustryProblems";
import IndustrySolution from "../../components/IndustrySolution";
import IndustryOutcomes from "../../components/IndustryOutcomes";
import FinalPoster from "../../components/FinalPoster";
import Footer from "../../components/Footer";

const Dentist = () => {
  return (
    <>
      <IndustryHero
        title={"Smart Dental Clinic\nOperations"}
        description="Manage appointments, staff, and patient care efficiently with AI-driven systems."
        bgImage="/images/dentist-hero.jpg"
        theme="dentist"
      />

      <IndustryOverview industry="dentist" />
      <IndustryProblems industry="dentist" />
      <IndustrySolution industry="dentist" />
      <IndustryOutcomes industry="dentist" />

      <IndustryFAQ industry="dentist" />

      <FinalPoster />
      <Footer />
    </>
  );
};

export default Dentist;
