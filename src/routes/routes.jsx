import React from "react";
import Index from "../pages/index";
import NotreApplication from "../pages/NotreApplication";
import LegalNotice from "../pages/LegalNotice";
import PrendreRendezVous from "../pages/PrendreRendezVous";
import Nostarifs from "../pages/Nostarifs";
import Comptabilité from "../pages/comptabilité";
import PageNotFound from "../pages/Error404";

const routes = [
  { path: "/", element: <Index /> },
  { path: "/notre-application", element: <NotreApplication /> },
  { path: "/comptabilité", element: <Comptabilité /> },
  { path: "/Nostarifs", element: <Nostarifs /> },
  { path: "/PrendreRendezVous", element: <PrendreRendezVous /> },
  { path: "/mentions-legales", element: <LegalNotice /> },
  { path: "*", element: <PageNotFound /> },
];

export default routes;
