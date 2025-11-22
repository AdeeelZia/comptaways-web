import React from "react";
import Heading from "./common/Heading";
import Button from "./common/Button";

const SerenityStepsSection = () => {
  const steps = [
    {
      number: 1,
      numberColor: "bg-[#87CFFF]",
      title: "Connectez vos comptes et laissez vous guider",
      description:
        "Notre application se synchronise gratuitement à votre compte bancaire professionnel en toute sécurité. Pilotez votre entreprise grâce à vos indicateurs en temps réel !",
    },
    {
      number: 2,
      numberColor: "bg-[#2AD884]",
      title: "Nos experts-comptables vous conseillent",
      description:
        "Nos experts-comptables répondent à vos interrogations. Ils vous conseillent sur l'optimisation de votre activité. Votre conseiller comptable dédié s'occupe de vos déclarations (TVA...).",
    },
    {
      number: 3,
      numberColor: "bg-[#C9B2FF]",
      title:
        "Obtenez rapidement votre bilan certifié par un de nos expert-comptables",
      description:
        "Votre bilan est certifié par un expert-comptable membre de l'ordre.",
    },
  ];

  return (
    <section className="cw-container px-5 my-24">
      <div className="">
        <Heading as="h2" className="text-[25px]">
          {" "}
          🤝️‍ Un démarrage en toute sérénité{" "}
        </Heading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] mb-[30px] mx-auto">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col items-center px-[11px] py-[20px] max-w-[315px] h-[288px] rounded-[18px]"
              style={{ boxShadow: "0px 2px 15px 0px #0000000F" }}
            >
              <Heading
                as="h2"
                className={`flex items-center justify-center w-14 h-14 rounded-md text-white font-bold text-lg mb-4 ${step.numberColor}`}
              >
                {step.number}
              </Heading>
              <Heading
                as="h4"
                className="text-lg font-semibold leading-[1] mb-[21px] text-center"
              >
                {step.title}
              </Heading>
              <p className="text-[14px] leading-[1] text-center text-[#4C4C4C]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <Button variant="primary">Demander un devis</Button>
        </div>
      </div>
    </section>
  );
};

export default SerenityStepsSection;
