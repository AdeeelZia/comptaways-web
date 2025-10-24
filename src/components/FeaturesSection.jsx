import React from "react"
export default function FeaturesSection() {
  const features = [
    "Module de facturation et de relance clients",
    "Automatisation des tâches administratives et comptables",
    "Synchronisation bancaire",
    "Collecte des justificatifs",
    "Signalisation de la valeur problème",
  ]

  return (
    <section className="relative py-12 md:py-20 px-4 md:px-8 overflow-hidden">
      {/* Decorative headphone circle - left side */}
      <div className="hidden lg:block absolute -left-32 top-20 w-64 h-64 opacity-80">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle cx="100" cy="100" r="95" fill="none" stroke="#000" strokeWidth="8" />
          <circle cx="70" cy="100" r="20" fill="#000" />
          <circle cx="130" cy="100" r="20" fill="#000" />
          <path d="M 70 120 Q 70 140 100 140 Q 130 140 130 120" fill="none" stroke="#000" strokeWidth="8" />
        </svg>
      </div>

      {/* Decorative purple circle - top right */}
      <div className="hidden lg:block absolute -right-20 -top-20 w-48 h-48 bg-purple-200 rounded-full opacity-60"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-gray-900">Découvrez le fonctionnement</span>
            <br />
            <span className="text-gray-900">de notre logiciel partenaire</span>
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl">
            Connectez votre comptabilité à notre application. Vous avez accès à tous les outils nécessaires pour
            découvrir les fonctionnalités.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left - Features List */}
          <div>
            <ul className="space-y-3 md:space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="text-gray-700 text-sm md:text-base">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <input
                type="email"
                placeholder="Entrer votre adresse mail"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <button className="px-6 py-2 bg-emerald-500 text-white rounded-full font-medium text-sm hover:bg-emerald-600 transition-colors whitespace-nowrap">
                Je veux tester
              </button>
            </div>

            <p className="text-emerald-600 text-xs md:text-sm mt-3 cursor-pointer hover:underline">En savoir plus</p>
          </div>

          {/* Right - Laptop Image Placeholder */}
          <div className="hidden lg:flex justify-center">
            <div className="relative w-80 h-56 bg-gray-100 rounded-lg shadow-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-2">💻</div>
                <p className="text-gray-500 text-sm">Laptop Preview</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
