import React from "react";
import Heading from "../components/common/Heading";
import Button from "./common/Button";
import Input from "../components/common/InputField";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="cw-container py-[30px] px-[36.5px] lg:px-12 scroll-mt-20"
      aria-labelledby="contact-heading"
    >
      <div className="lg:flex lg:items-center lg:gap-10">
        {/* Left Image Section */}
        <div className="hidden lg:flex lg:w-1/2 gap-[30px]">
          <img
            src="/images/contact1.png"
            alt="Person working on a project"
            className="rounded-[220px] w-52 xl:w-[297px] h-[642px] object-cover"
            loading="lazy"
          />
          <div className="relative">
            <img
              src="/images/contact2.jpg"
              alt="Discussion during a meeting"
              className="rounded-[220px] w-52 xl:w-[297px] h-[642px] object-cover mt-[82px]"
              loading="lazy"
            />
            <div className="absolute top-10 left-0">
              <img
                src="/favicons/copie2.svg"
                alt="Decorative element"
                className="w-28 xl:w-auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Right Form Section */}
        <div className="flex flex-col lg:w-1/2 mt-10 lg:mt-0">
          <header>
            <Heading
              as="h2"
              id="contact-heading"
              className="text-[25px] lg:text-[40px] text-left mb-6 lg:mb-10"
            >
              💬 Discutons de votre projet
            </Heading>
            <p className="text-[#4C4C4C] text-[15px] lg:text-base leading-relaxed mb-6 lg:mb-10">
              Nous accompagnons tous les secteurs d'activité (actuellement près
              de <strong>60 secteurs différents</strong>). Nous serons ravis
              d'échanger avec vous sur votre projet et de vous accompagner vers
              la réussite.
            </p>
          </header>

          <form
            className="w-full flex flex-col space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input label="Nom" placeholder="Votre nom" required />
              <Input label="Prénom" placeholder="Votre prénom" required />
              <Input
                label="Téléphone"
                placeholder="Votre n° de téléphone"
                type="tel"
              />
              <Input
                label="Email"
                placeholder="Votre adresse email"
                type="email"
                required
              />
            </div>

            <Input
              as="textarea"
              label="Message"
              placeholder="Votre message"
              className="w-full !rounded-[20px] pb-32 resize-none"
              required
            />

            <Button variant="primary" type="submit" className="max-w-fit">
              Envoyer mon message&nbsp;!
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
