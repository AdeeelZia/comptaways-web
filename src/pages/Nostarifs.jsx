import React from "react";
import Heading from "../components/common/Heading";

const data = [
  {
    price: 45,
    size: "Offre Small",
  },
  {
    price: 85,
    size: "Offre Classique",
  },
];

const Nostarifs = () => {
  return (
    <section className="container mx-auto">
      <div className="py-[63px]">
        <Heading as="h1" className="text-[55px] max-w-[650px] mx-auto">
          🏆 Une solution complète à un prix imbattable
        </Heading>
        <div>
          <div className="inline-block">
            {data.map((item, i) => (
              <>
                <p>
                  Dès <span>{item.price}</span>€ HT / Mois
                </p>
                <Heading as="h3">{item.size}</Heading>
                <p>Sans engagement</p>
              </>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nostarifs;
