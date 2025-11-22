import React from "react";

export default function PartnerSection() {
  const partners = [
    { name: "Société Générale", logo: "🏦" },
    { name: "Crédit du Nord", logo: "⭐" },
    { name: "Crédit Mutuel", logo: "❤️" },
    { name: "BNP Paribas", logo: "🏛️" },
    { name: "CIC", logo: "🔵" },
    { name: "Banque Populaire", logo: "✖️" },
    { name: "Caisse d'Épargne", logo: "💰" },
    { name: "Crédit Agricole", logo: "🌾" },
    { name: "HSBC", logo: "🌐" },
  ];

  return (
    <section className="cw-container py-[30px] px-[36.5px]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">
            👉 Nos banques partenaires
          </h2>
          <p className="text-gray-600 text-sm lg:text-base max-w-2xl mx-auto leading-relaxed">
            Notre application se connecte à toutes les banques les plus
            courantes. Vos flux bancaires remontent automatiquement sur notre
            application.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="overflow-x-hidden">
          <div className="flex gap-4 lg:gap-6 w-max">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center lg:w-[249px] h-[143px] shadow-[0_2px_15px_0_rgba(0,0,0,0.06)]
 p-4 lg:p-6 bg-white rounded-[18px] hover:bg-gray-100 transition-colors duration-200 flex-shrink-0"
              >
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl mb-2">
                    {partner.logo}
                  </div>
                  <p className="text-xs lg:text-sm font-medium text-gray-700">
                    {partner.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
