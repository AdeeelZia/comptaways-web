import React from "react";
import Index from "../pages/index";
import ConfirmationContact from "../pages/ConfirmationContact";
import PageNotFound from "../pages/Error404";
import LegalNotice from "../pages/LegalNotice";
import PrendreRendezVous from "../pages/PrendreRendezVous";

const routes = [
  { path: "/", element: <Index /> },
  {path: "/PrendreRendezVous" , element: <PrendreRendezVous />},
  { path: "/ConfirmationContact", element: <ConfirmationContact /> },
  { path: "/mentions-legales", element: <LegalNotice /> },
  { path: "*", element: <PageNotFound /> },
];

export default routes;
