import React from "react";
import Heading from "../components/common/Heading";
import Button from "../components/common/Button";

const ConfirmationContact = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="text-center flex flex-col items-center space-y-[30px]">
        <Heading
          as="h1"
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1D1D1C]"
        >
          ✅ Votre message a bien été envoyé !
        </Heading>

        <p className="text-[#4C4C4C] text-base sm:text-lg max-w-md">
          Nous vous rappellerons sans tarder !
        </p>

        <Button variant="primary">Retourner à l’accueil</Button>
      </div>
    </section>
  );
};

export default ConfirmationContact;
