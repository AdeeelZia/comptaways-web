import React, { useState } from "react";
import Heading from "../components/common/Heading";
import Button from "../components/common/Button";
import ContactSection from "../components/ContactSection";

const Comptabilite = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const reasons = [
    {
      id: 1,
      title: "Le prix",
      text: "Nos tarifs sont transparents et justes. Avec Comptaways vous ne payez que ce que vous utilisez. Pas de facturation surprise. Les prix sont connus à l'avance et calculés au forfait. Les forfaits sont sans engagement.",
    },
    {
      id: 2,
      title: "La simplicité",
      text: "Comptaways simplifie votre comptabilité grâce à une interface claire et intuitive. Vous gérez vos documents et vos factures en quelques clics.",
    },
    {
      id: 3,
      title: "L’accompagnement",
      text: "Nos experts vous accompagnent au quotidien pour répondre à vos questions et vous aider à piloter votre activité en toute sérénité.",
    },
  ];

  const faqData = [
    {
      question: "Êtes-vous expert comptable ?",
      answer:
        "Nous sommes inscrit au tableau de l'ordre des experts comptables. Trouvez-nous sur la liste des Experts-comptables.",
    },
    {
      question: "Y a t-il un engagement ?",
      answer:
        "Nous sommes inscrit au tableau de l'ordre des experts comptables. Trouvez-nous sur la liste des Experts-comptables.",
    },
    {
      question: "Vais-je disposer d'un conseiller ?",
      answer:
        "Nous sommes inscrit au tableau de l'ordre des experts comptables. Trouvez-nous sur la liste des Experts-comptables.",
    },
    {
      question: "J'ai déjà un expert comptable. Comment faire pour vous rejoindre ?",
      answer:
        "Nous sommes inscrit au tableau de l'ordre des experts comptables. Trouvez-nous sur la liste des Experts-comptables.",
    },
    {
      question: "Faites-vous tous les secteurs d'activité ?",
      answer:
        "Nous sommes inscrit au tableau de l'ordre des experts comptables. Trouvez-nous sur la liste des Experts-comptables.",
    },
    {
      question: "Je suis auto entrepreneur. Puis-faire appel à vos services ?",
      answer:
        "Nous sommes inscrit au tableau de l'ordre des experts comptables. Trouvez-nous sur la liste des Experts-comptables.",
    },
    {
      question: "Pouvons nous facturer sur l'application ?",
      answer:
        "Nous sommes inscrit au tableau de l'ordre des experts comptables. Trouvez-nous sur la liste des Experts-comptables.",
    },
  ];

  return (
    <div>
      {/* 3 Raisons Section */}
      <section className="py-[63px] px-4 flex flex-col items-center text-center">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <Heading className="text-[28px] mb-[30px]">
            ✍️ 3 raisons de souscrire à une offre Comptaways
          </Heading>

          <div className="mb-10 flex justify-center">
            <img
              src="/images/laptop.png"
              alt="Laptop illustration"
              className="mx-auto max-w-full h-auto"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center w-full mb-[30px]">
            {reasons.map((reason) => (
              <div
                key={reason.id}
                className="w-[315px] bg-white rounded-[18px] p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
              >
                <div className="w-[57px] h-[57px] flex items-center justify-center rounded-[5px] bg-[#2AD884] text-white font-bold text-lg mb-4">
                  {reason.id}
                </div>
                <Heading as="h4" className="font-semibold text-[18px] mb-2">
                  {reason.title}
                </Heading>
                <p className="text-gray-700 text-[15px] leading-relaxed">
                  {reason.text}
                </p>
              </div>
            ))}
          </div>
          <Button variant="primary">Prendre rendez-vous</Button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-[100px] px-4 flex flex-col items-center text-center">
        <div className="max-w-3xl w-full">
          <Heading className="text-[25px] mb-[20px]">
            🤔 Réponses à vos questions
          </Heading>
          <p className="mb-[20px]">
            Vous trouverez les réponses aux questions auxquelles nous répondons
            le plus fréquemment. Si vous n’avez pas réponse à votre question,
            contactez-nous.
          </p>

          <img
            src="/images/workingLaptop.jpg"
            alt=""
            className="h-[314px] w-[314px] object-cover rounded-[30px] mx-auto mb-[30px]"
          />

          {/* FAQ List */}
          <div className="space-y-4 text-left mb-[30px]">
            {faqData.map((item, index) => (
              <div key={index} className="border-b border-gray-300 pb-3">
                <div
                  onClick={() => handleToggle(index)}
                  className="flex justify-between items-center cursor-pointer py-4"
                >
                  <p className="font-medium text-[16px]">{item.question}</p>
                  <div
                    className={`w-10 h-10 flex justify-center items-center rounded-full bg-[#87CFFF] transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  >
                    <img
                      src="/favicons/uparrow.svg"
                      alt="toggle arrow"
                      className="w-5 h-5"
                    />
                  </div>
                </div>

                {/* Answer section (only visible if open) */}
                {openIndex === index && (
                  <div className="mt-2 text-gray-700 text-[15px] leading-relaxed">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="bg-[#EAFBF3] rounded-[20px] h-[141px]">
            <p>Encore des questions ?</p>
            <Button variant="primary">
                Contactez nous !
            </Button>
          </div>
        </div>
      </section>

      <section>
        <ContactSection />
      </section>
    </div>
  );
};

export default Comptabilite;
