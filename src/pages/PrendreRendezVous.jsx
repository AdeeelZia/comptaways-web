import React from "react";
import Heading from "../components/common/Heading";
import Button from "../components/common/Button";
import Input from "../components/common/InputField";

const PrendreRendezVous = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-4 xl:px-[286px] my-[54px]">
      <div className="w-full flex flex-col items-center space-y-8">
        <Heading
          as="h1"
          className="text-[28px] leading-[30px] mb-[30px] md:text-4xl lg:text-[55px] md:leading-[60px] md:mb-[50px] text-center"
        >
          📨 Contactez-nous dès aujourd’hui !
        </Heading>

        <img
          src="/images/booking/appointment.jpg"
          alt="Appointment"
          className="w-full h-[370px] object-cover rounded-[30px]"
        />

        <form className="w-full flex flex-col space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input placeholder="Votre nom" />
            <Input placeholder="Votre prénom" />
            <Input placeholder="Votre n° de téléphone" />
            <Input placeholder="Votre adresse email" />
          </div>

          <Input
            as="textarea"
            placeholder="Votre message"
            className="w-full !rounded-[20px] pb-32"
          />

          <div className="flex justify-center">
            <Button variant="primary">Envoyer mon message !</Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default PrendreRendezVous;
