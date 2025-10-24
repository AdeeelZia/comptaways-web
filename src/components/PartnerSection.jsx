import React from "react"

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
  ]

  return (
    <section className="mb-12 lg:mb-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">
            <span className="text-2xl">🏦</span>
            Nos banques partenaires
          </h2>
          <p className="text-gray-600 text-sm lg:text-base max-w-2xl mx-auto leading-relaxed">
            Notre sélection de partenaires à travers les banques. Vous trouverez certainement votre banque parmi nos
            partenaires. Vous trouverez certainement votre banque parmi nos partenaires.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 lg:p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              <div className="text-center">
                <div className="text-3xl lg:text-4xl mb-2">{partner.logo}</div>
                <p className="text-xs lg:text-sm font-medium text-gray-700">{partner.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
