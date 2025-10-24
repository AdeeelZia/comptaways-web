import React from "react";

const Banner = () => {
  return (
    <div className="hidden lg:block bg-[#C9B2FF]">
      <div className="container flex justify-between items-center h-7 px-[3.813rem]">
        <div className="flex-1"></div>
        <p className="text-sm font-normal mr-24 text-[#1D1D1C]">
          Offre du mois : 3 mois de comptabilité offerte pour tout parrainage 🚀
        </p>
        <div className="flex items-center">
          <img src="/favicons/logo-vector.svg" alt="logo-vector" />
          <p className="inline-flex text-sm font-normal ml-4 text-[#1D1D1C]">
            Expert-comptable certifié 🇫🇷{" "}
            <img
              src="/favicons/flag-france.svg"
              alt="france-logo-icon"
              className="max-w-3 ml-2"
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
