import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "../components/container";
import Banner from "../components/Banner";
import Button from "../components/common/Button";

const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const NavigationLinks = [
    { label: "Comptabilité", path: "/" },
    { label: "Créer mon entreprise", path: "/about" },
    { label: "Notre appli", path: "/services" },
    { label: "Tarifs", path: "/blog" },
    { label: "Accès client", path: "/contact" },
  ];

  const toggleMobileNav = () => setIsMobileNavOpen((prev) => !prev);

  return (
    <>
      <Banner />
      <header
        className="w-full sticky top-0 bg-white z-50"
        style={{ boxShadow: "0px 0.41px 3.05px #0000000F" }}
      >
        <Container className="flex items-center justify-between p-2 sm:px-4">
          <Link to="/" className="flex items-center ml-2">
            <img
              src="/favicons/logo.svg"
              alt="Cabinet Expert Logo"
              className="h-9 sm:h-10 md:h-12 lg:h-auto object-contain"
            />
          </Link>
          <nav className="hidden xl:flex items-center gap-8">
            <ul className="flex gap-6 text-black font-medium">
              {NavigationLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="hover:text-[#2AD884] transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center">
            <button
              type="button"
              aria-label="Compte utilisateur"
              className="p-2 bg-[#2AD884] rounded-full text-white lg:mr-3"
            >
              <img src="/favicons/users.svg" alt="Icône utilisateur" />
            </button>
            <div className="hidden xl:flex items-center gap-3">
              <Button className="px-4 py-2 bg-[#2AD884] rounded-full text-white font-semibold text-sm">
                06 99 10 75 73
              </Button>
              <Button className="hidden xl:inline-block px-4 py-2 bg-[#2AD884] rounded-full text-white font-semibold text-sm">
                Prendre rendez-vous
              </Button>
            </div>
            <button
              type="button"
              onClick={toggleMobileNav}
              className="xl:hidden p-2"
              aria-label="Ouvrir le menu"
            >
              <img src="/favicons/menu-hamburger.svg" alt="Icône menu" />
            </button>
          </div>
        </Container>
        <div
          className={`fixed top-0 right-0 w-3/4 h-full bg-white z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${
            isMobileNavOpen ? "translate-x-0" : "translate-x-full"
          } rounded-l-[30px] p-6`}
        >
          <div className="flex items-center justify-between mb-6">
            <Link
              to="/"
              onClick={() => setIsMobileNavOpen(false)}
              className="w-32 min-w-40"
            >
              <img
                src="/favicons/logo.svg"
                alt="Cabinet Expert Logo"
                className="w-full h-auto object-contain"
              />
            </Link>
            <button
              onClick={toggleMobileNav}
              aria-label="Fermer le menu"
              className="p-2 rounded-md hover:bg-gray-200 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <ul className="flex flex-col gap-5 text-black font-medium">
            {NavigationLinks.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.path}
                  onClick={() => setIsMobileNavOpen(false)}
                  className="hover:text-[#2AD884] transition-colors duration-200"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3">
            <Button variant="primary" className="w-full text-sm font-semibold">
              06 99 10 75 73
            </Button>
            <Button variant="primary" className="w-full text-sm font-semibold">
              Prendre rendez-vous
            </Button>
          </div>
        </div>
        {isMobileNavOpen && (
          <div
            onClick={toggleMobileNav}
            className="fixed inset-0 bg-opacity-30 z-40 lg:hidden"
          />
        )}
      </header>
    </>
  );
};

export default Header;
