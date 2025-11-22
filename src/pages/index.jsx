import React from "react";
import PartnerSection from "../components/PartnerSection";
import ContactSection from "../components/ContactSection";
import EntrepreneursSection from "../components/EntrepreneursSection";
import ClientReviewsSection from "../components/ClientReviewsSection";
import FeaturesSection from "../components/FeaturesSection";
import SupportSection from "../components/SupportSection";
import SerenityStepsSection from "../components/SerenityStepsSection";
import PricingSection from "../components/PricingSection";

const HomePage = () => {
  return (
    <>
      {/* <PricingSection /> */}
      <SerenityStepsSection />
      <SupportSection />
      <EntrepreneursSection />
      <ClientReviewsSection />
      <FeaturesSection />
      <PartnerSection />
      <ContactSection />
    </>
  );
};

export default HomePage;
