import React from "react"

export default function ContactSection({ formData, onInputChange, onSubmit }) {
  return (
    <section className="mb-8 lg:mb-0">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left side - Images */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-sm h-96">
              {/* Circular image container */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-80 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-gray-300 rounded-full flex items-center justify-center text-6xl">
                    👨‍💼
                  </div>
                </div>
              </div>
              {/* Smiley face overlay */}
              <div className="absolute bottom-12 right-0 w-20 h-20 bg-yellow-300 rounded-full flex items-center justify-center text-4xl shadow-lg z-10">
                😊
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="flex flex-col justify-start">
            {/* Header */}
            <div className="mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-2xl">💬</span>
                Discutons de votre projet
              </h2>
              <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
                Nous accompagnons les acteurs du secteur différemment. Nous sommes ravis d'échanger avec vous, sur votre
                projet. Nous serons ravis d'échanger avec vous, sur votre projet. Nous serons ravis d'échanger avec
                vous, sur votre projet.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={onSubmit} className="space-y-4 lg:space-y-5">
              {/* Name and Phone Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Votre nom
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData}
                    onChange={onInputChange}
                    placeholder="Votre nom"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Votre n° de téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData}
                    onChange={onInputChange}
                    placeholder="Votre n° de téléphone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 text-sm"
                  />
                </div>
              </div>

              {/* Email Row */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Votre adresse email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData}
                  onChange={onInputChange}
                  placeholder="Votre adresse email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 text-sm"
                />
              </div>

              {/* Message Row */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Votre message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData}
                  onChange={onInputChange}
                  placeholder="Votre message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 text-sm resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-full transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
                >
                  Envoyer mon message!
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
