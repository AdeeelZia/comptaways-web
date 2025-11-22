import React from "react";
import Heading from "../components/common/Heading";
import Button from "../components/common/Button";

const NotreApplication = () => {
  return (
    <>
      <section className="cw-container">
        <div className="pt-[63px] pb-[90px] px-[35px]">
          <div className="flex flex-col justify-between items-center space-y-4">
            <Heading as="h1" className="text-[28px] leading-[30px] mb-[30px]">
              📱Une appli innovante et destinée à tous
            </Heading>

            <div className="flex flex-col items-center space-y-4">
              <div className="mb-[20px]">
                <img
                  src="/images/time.png"
                  alt="Card"
                  className="w-full h-full object-contain rounded-[20px]"
                />
              </div>
            </div>
            <div className="text-center md:text-left">
              <p className="mt-2 text-lg text-[#4C4C4C]">
                La solution qui simplifie
              </p>
              <ul className="mt-4 list-none space-y-2 text-lg text-gray-600">
                <li>✅ Votre gestion</li>
                <li>✅ Vos paiements</li>
                <li>✅ Votre facturation</li>
                <li>✅ Votre comptabilité</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotreApplication;
