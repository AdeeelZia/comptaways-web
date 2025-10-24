import React from "react"
export default function SupportSection() {
  return (
    <section className="py-16 px-4 md:py-24 md:px-8 bg-gradient-to-br from-purple-100 to-purple-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Profile Image */}
          <div className="flex justify-center">
            <div className="relative w-56 h-56 md:w-64 md:h-64">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-purple-300 rounded-full"></div>
              <div className="absolute inset-2 bg-gray-300 rounded-full flex items-center justify-center text-gray-500 text-sm">
                Profile Image
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex flex-col">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              <span className="text-2xl">✨</span> Vous êtes accompagné par nos équipes
            </h2>

            <p className="text-gray-700 font-semibold mb-2">La comptabilité devient simple</p>

            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Tout au long de l'année, nos experts vous accompagnent. Vous pouvez les contacter directe à tout moment
              pour poser vos questions.
            </p>

            {/* CTA Button */}
            <div>
              <button className="px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-full transition-colors duration-200">
                Commencer maintenant
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
