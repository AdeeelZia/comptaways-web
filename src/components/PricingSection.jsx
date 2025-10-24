import React, { useState } from "react";
import Heading from "../components/common/Heading";
import Button from "../components/common/Button";

export default function PricingSection() {
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
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
          {/* Left Profile Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/images/image2.jpg"
              alt=""
              className="object-cover w-[351px] h-[642px] rounded-[220px]"
            />
          </div>

          {/* Center Pricing Content */}
          <div className="flex flex-col items-center">
            {/* Header */}
            <div className="text-center mb-12 md:mb-[35px]">
              <Heading as="h2" className="text-[40px] mx-auto lg:max-w-xl">
                ✍️ Une offre sans engagement adaptée à votre activité
              </Heading>
            </div>
            {/* Tabs */}
            <div className="flex gap-2 mb-6 flex-wrap justify-center">
              {tabs.map((tab) => (
                <Button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-full font-semibold transition-colors duration-200 ${
                    activeTab === tab.id
                      ? "bg-emerald-500 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {tab.label}
                </Button>
              ))}
            </div>

            {/* Pricing Info */}
            <div className="text-center mb-6">
              <p className="text-gray-600 text-sm mb-2">Dès</p>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-4xl font-bold text-gray-900">45€</span>
                <span className="text-gray-600">/mois</span>
              </div>
              <p className="text-emerald-500 font-semibold mt-2">Offre Small</p>
            </div>

            {/* Benefits List */}
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

            {/* Description */}
            <p className="text-gray-600 text-xs text-center">
              Contrats sans engagement. Résiliation possible à tout moment.
            </p>
          </div>

          {/* Right Profile Image */}
          <div className="flex justify-center md:justify-start">
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
}
