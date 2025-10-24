import React from "react"

export default function SerenityStepsSection() {
  const steps = [
    {
      number: 1,
      title: "Connectez vos comptes et liaisez vos gésier",
      description:
        "Connectez vos comptes bancaires et de paiement en quelques clics. Nous nous occupons de la synchronisation automatique de vos données.",
    },
    {
      number: 2,
      title: "Nos experts-comptables vous conseillent",
      description:
        "Bénéficiez de conseils personnalisés de nos experts-comptables. Ils vous accompagnent dans la gestion de votre comptabilité.",
    },
    {
      number: 3,
      title: "Obtenez rapidement votre bilan certifié par un de nos experts",
      description: "Recevez votre bilan certifié rapidement. Nos experts valident vos documents pour vous.",
    },
  ]

  return (
    <section className="py-16 px-4 md:py-24 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            <span className="text-2xl">✨</span> Un démarrage en toute sérénité
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col">
              {/* Step Number */}
              <div className="mb-4">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600 font-bold text-lg">
                  {step.number}
                </div>
              </div>

              {/* Step Content */}
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button className="px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-full transition-colors duration-200">
            Commencer maintenant
          </button>
        </div>
      </div>
    </section>
  )
}
