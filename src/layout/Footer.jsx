import React from "react";
import { Link } from "react-router-dom";

const footerLinks = [
  {
    title: "Notre site",
    links: [
      { label: "Comptabilité", to: "/comptabilite", external: false },
      {
        label: "Créer mon entreprise",
        to: "/creer-entreprise",
        external: false,
      },
      { label: "Notre appli", to: "/application", external: false },
      { label: "Tarifs", to: "/tarifs", external: false },
      { label: "Accès client", to: "/connexion", external: false },
    ],
  },
  {
    title: "Pages légales",
    links: [
      { label: "Mentions légales", to: "/mentions-legales", external: false },
      {
        label: "Politique de confidentialité",
        to: "/confidentialite",
        external: false,
      },
    ],
  },
  {
    title: "Nous suivre",
    links: [
      {
        label: "Facebook",
        to: "https://facebook.com/comptaways",
        external: true,
      },
      {
        label: "Instagram",
        to: "https://instagram.com/comptaways",
        external: true,
      },
      {
        label: "Twitter",
        to: "https://twitter.com/comptaways",
        external: true,
      },
    ],
  },
  {
    title: "Aide et service client",
    links: [
      { label: "06 99 10 75 73", to: "tel:0699107573", external: true },
      {
        label: "aide@comptaways.fr",
        to: "mailto:aide@comptaways.fr",
        external: true,
      },
    ],
  },
];

export const FooterSection = ({ title, links }) => {
  return (
    <div>
      <h5 className="text-[15px] font-semibold mb-[9px] text-[#1D1D1C]">
        {title}
      </h5>
      <hr className="border mb-[22px] text-[#0000004D] lg:hidden" />
      <ul>
        {links.map((link, index) => (
          <li key={index} className="text-[15px] text-[#4C4C4C] mb-2">
            {link.external ? (
              <a
                href={link.to}
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            ) : (
              <Link to={link.to} className="hover:underline">
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  return (
    <footer>
      <div className="relative top-20 py-[30px] px-[36.5px] lg:flex md:gap-4 lg:gap-8 xl:gap-[200px] md:justify-center rounded-t-[30px] lg:rounded-[30px] lg:mx-8 xl:mx-20 bg-[#EAFBF3]">
        <div className="text-start mb-[35px] lg:max-w-[300px]">
          <img
            src="/favicons/logo.svg"
            alt="Comptaways Logo"
            className="mb-[15px]"
          />
          <p className="text-[15px] text-[#4C4C4C]">
            Comptaways est un cabinet inscrit à l’Ordre des Experts comptables
            100 % en ligne.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-[35px]">
          {footerLinks.map((section, index) => (
            <FooterSection
              key={index}
              title={section.title}
              links={section.links}
            />
          ))}
        </div>
        {/* Show copyright inside footer on small and md screens only */}
        <div className="text-[14px] font-semibold text-center text-[#4C4C4C] lg:hidden">
          <p>Made with 💚 by 4Beez - Agence de communication</p>
        </div>
      </div>

      <div className="hidden lg:block pt-20 bg-[#F0F0F0] rounded-t-[30px]">
        <div className="text-[14px] font-semibold py-[30px] text-center text-[#4C4C4C]">
          <p>Made with 💚 by 4Beez - Agence de communication</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
