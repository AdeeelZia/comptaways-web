import React from "react"
export default function ClientReviewsSection() {
  const reviews = [
    {
      name: "Gwenaëlle",
      role: "Comptabilité auto",
      text: "Comptabilité auto et comptabilité complète. Avec Comptaways, je recommande fortement de faire confiance à l'équipe pour la gestion de votre comptabilité à l'avance.",
    },
    {
      name: "Catherine",
      role: "Chef d'entreprise",
      text: "J'ai trouvé à qui confier ma comptabilité de mon entreprise. Comptaways m'a permis de me concentrer sur mon activité. Comptaways change vraiment la vie des entrepreneurs.",
    },
    {
      name: "Rémi",
      role: "Chef d'entreprise",
      text: "Comptabilité auto accompagnée des tâches de gestion. Comptaways m'a permis de me concentrer sur mon activité. Comptaways change vraiment la vie des entrepreneurs.",
    },
  ]

  return (
    <section className="relative py-12 md:py-20 px-4 md:px-8 bg-emerald-50 overflow-hidden">
      {/* Decorative coral circle - bottom right */}
      <div className="hidden lg:block absolute -right-24 -bottom-24 w-64 h-64 bg-orange-200 rounded-full opacity-50"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Les avis de <span className="text-emerald-600">nos clients</span>
          </h2>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              {/* Green dot indicator */}
              <div className="flex items-start gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-emerald-500 flex-shrink-0 mt-1"></div>
              </div>

              <h3 className="font-bold text-gray-900 mb-1">{review.name}</h3>
              <p className="text-emerald-600 text-sm font-medium mb-3">{review.role}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
