import IndustryFAQ from "../../components/IndustryFAQ";
import IndustryHero from "../../components/IndustryHero";
import IndustryOverview from "../../components/IndustryOverview";
import IndustryProblems from "../../components/IndustryProblems";
import IndustrySolution from "../../components/IndustrySolution";
import IndustryOutcomes from "../../components/IndustryOutcomes";
import FinalPoster from "../../components/FinalPoster";
import Footer from "../../components/Footer";


const Salon = () => {
  return (
    <>
      <IndustryHero
        title={"Elevate Your Salon\nExperience"}
        description="Streamline bookings, manage stylists, and grow your beauty brand."
        bgImage="/2077.jpg"
        theme="salon"
      />
      <IndustryOverview industry="salon" />
      <IndustryProblems industry="salon" />
      <IndustrySolution industry="salon" />
      <IndustryOutcomes industry="salon" />

      {/* Normal page content */}
      <section className="py-24 px-8 bg-gray-50">{/* Salon content */}</section>
      <IndustryFAQ industry="salon" />
      <FinalPoster />
      <Footer />
    </>
  );
};

export default Salon;
