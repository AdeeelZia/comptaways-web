import React from "react";
export default function EntrepreneursSection() {
  const testimonials = [
    {
      icon: "🎯",
      text: "Très facile d'intégrer à notre comptabilité pour les",
    },
    {
      icon: "💰",
      text: "Comptabilité et un service 100% en ligne. 50€ pour 100€ de facturation",
    },
    {
      icon: "📊",
      text: "Facile nous engageons transférer toutes les données de l'ancienne plateforme",
    },
    {
      icon: "🔧",
      text: "Facile de configurer les paramètres du changement au début de la consultation",
    },
  ];

  return (
    <section className="relative py-12 md:py-20 px-4 md:px-8 overflow-hidden">
      {/* Decorative circles */}
      <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-blue-100 rounded-full opacity-40 -ml-48"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left - Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Circular profile image */}
              <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-300 to-blue-400 flex items-center justify-center overflow-hidden shadow-lg">
                <div className="text-6xl">👨‍💼</div>
              </div>
              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-purple-300 rounded-full flex items-center justify-center shadow-lg">
                <div className="text-4xl">😊</div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              De nombreux entrepreneurs
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              comme vous rejoignent Comptaways
            </h3>

            <p className="text-gray-600 text-sm md:text-base mb-8">
              Aujourd'hui les entrepreneurs à travers différents domaines. Avec
              Comptaways, vous ne recevrez pas de factures. Comptaways vous
              offre le meilleur service.
            </p>

            {/* Testimonials Grid */}
            <div className="space-y-4">
              {testimonials.map((item, index) => (
                <div key={index} className="flex gap-3">
                  <span className="flex-shrink-0 text-2xl">{item.icon}</span>
                  <p className="text-gray-700 text-sm md:text-base">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Vision Section */}
            <div className="mt-8 p-4 bg-emerald-50 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-2">Notre vision</h4>
              <p className="text-gray-600 text-sm">
                Nous nous engageons à rendre la comptabilité accessible pour les
                entrepreneurs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
