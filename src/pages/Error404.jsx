import React from "react";
import { Link } from "react-router-dom";
import Heading from "../components/common/Heading";
import Button from "../components/common/Button";

const PageNotFound = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="text-center flex flex-col items-center">
        <img
          src="/images/notFoundPage/frame.png"
          alt="Frame Image"
          className="object-contain mb-6 w-[250px] sm:w-[300px] md:w-[400px]"
        />
        <Heading
          as="h1"
          className="text-[32px] sm:text-[40px] md:text-[55px] font-bold mb-4"
        >
          Page introuvable...
        </Heading>
        <p className="max-w-[446px] text-[15px] sm:text-[17px] text-center text-[#1D1D1C] mb-6 px-4">
          La page que vous recherchez n’existe pas ou est introuvable. Nous
          faisons notre maximum pour résoudre le problème.
        </p>
        <Link to={"/"}>
        <Button variant="primary">Retourner à l’accueil</Button>
        </Link>
      </div>
    </section>
  );
};

export default PageNotFound;
