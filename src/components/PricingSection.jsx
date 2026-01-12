import React, { useState } from "react";
import Heading from "../components/common/Heading";
import Button from "../components/common/Button";

const PricingSection = () => {
  const [activeTab, setActiveTab] = useState("particuliers");

  const tabs = [
    { id: "particuliers", label: "Particuliers" },
    { id: "auto-entrepreneur", label: "Auto-entrepreneur" },
    { id: "creation", label: "Création" },
  ];

  const benefits = [
    "Création de votre entreprise incluse",
    "Application comptable offerte",
    "Module de facturation",
  ];

  return (
    <section className="py-16 px-4 md:py-24 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
          <div className="hidden lg:flex justify-center md:justify-end">
            <img
              src="/images/image2.jpg"
              alt=""
              className="object-cover w-[351px] h-[642px] rounded-[220px]"
            />
          </div>
          <div className="flex flex-col items-center">
            <Heading
              as="h2"
              className="text-[25px] lg:text-[40px] mb-[30px] mx-auto lg:max-w-xl"
            >
              ✍️ Une offre sans engagement adaptée à votre activité
            </Heading>

            <div className="flex overflow-x-auto space-x-2 scrollbar-hide scroll-smooth">
              {tabs.map((tab) => (
                <Button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-full font-semibold whitespace-nowrap transition-colors duration-200 ${
                    activeTab === tab.id
                      ? "bg-emerald-500 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {tab.label}
                </Button>
              ))}
            </div>

            <div className="text-center mb-6">
              <p className="text-gray-600 text-sm mb-2">Dès</p>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-4xl font-bold text-gray-900">45€</span>
                <span className="text-gray-600">/mois</span>
              </div>
              <p className="text-emerald-500 font-semibold mt-2">Offre Small</p>
            </div>
            <div className="space-y-3 mb-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <p className="text-gray-700 text-sm">{benefit}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-600 text-xs text-center">
              Contrats sans engagement. Résiliation possible à tout moment.
            </p>
          </div>
          <div className="hidden lg:flex justify-center md:justify-start">
            <img
              src="/images/image1.jpg"
              alt=""
              className="object-cover w-[351px] h-[642px] rounded-[220px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
