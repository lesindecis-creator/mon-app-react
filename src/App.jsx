import { useState } from "react";
import Apartmentpage from "./Apartmentpage";
import Homepage from "./Homepage";

// Constantes pour les API (Laissez vide, le Canvas fournira la clé)

// --- DONNÉES DE L'IMMEUBLE ---
const apartments = {
  100: { hasText: false },
  102: { hasText: false },
  104: { hasText: false },
  106: { hasText: false },
  108: { hasText: false },
  110: { hasText: true },
  112: { hasText: false },
  114: { hasText: false },
  116: { hasText: false },
  118: { hasText: true },
  120: { hasText: false },
  200: { hasText: false },
  202: { hasText: false },
  204: { hasText: false },
  206: { hasText: true },
  208: { hasText: false },
  210: { hasText: false },
  212: { hasText: true },
  214: { hasText: true },
  216: { hasText: true },
  218: { hasText: false },
  220: { hasText: true },
  300: { hasText: false },
  302: { hasText: false },
  304: { hasText: false },
  306: { hasText: false },
  308: { hasText: true },
  310: { hasText: false },
  312: { hasText: true },
  314: { hasText: true },
  316: { hasText: true },
  318: { hasText: false },
  320: { hasText: false },
  400: { hasText: false },
  402: { hasText: false },
  404: { hasText: false },
  406: { hasText: false },
  408: { hasText: false },
  410: { hasText: false },
  412: { hasText: false },
  414: { hasText: false },
  416: { hasText: true },
  418: { hasText: false },
  420: { hasText: false },
  500: { hasText: false },
  502: { hasText: true },
  504: { hasText: false },
  506: { hasText: false },
  508: { hasText: false },
  510: { hasText: false },
  512: { hasText: true },
  514: { hasText: false },
  516: { hasText: false },
  518: { hasText: false },
  520: { hasText: false },
  600: { hasText: false },
  602: { hasText: false },
  604: { hasText: true },
  606: { hasText: false },
  608: { hasText: true },
  610: { hasText: false },
  612: { hasText: false },
  614: { hasText: false },
  616: { hasText: true },
  618: { hasText: false },
  620: { hasText: false },
  700: { hasText: false },
  702: { hasText: false },
  704: { hasText: false },
  706: { hasText: false },
  708: { hasText: false },
  710: { hasText: false },
  712: { hasText: false },
  714: { hasText: false },
  716: { hasText: false },
  718: { hasText: false },
  720: { hasText: false },
  RDC: { hasText: false }, // Ajout du RDC
  Prompt: { hasText: true },
};

// Composant Bouton d'Appartement

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedApt, setSelectedApt] = useState(null);

  const handlePageNavigation = (aptNumber) => {
  
    switch (aptNumber) {
      case null:
        setCurrentPage("home");
        setSelectedApt(null);
        break;
      case "Fleuriste":
        setSelectedApt("Fleuriste");
        setCurrentPage("apartment");
        break;
      case "Prompt": // <-- AJOUT
        setSelectedApt("Prompt");
        setCurrentPage("apartment");
        break;
      default:
        setSelectedApt(aptNumber);
        setCurrentPage("apartment");
    }
  };

  if (currentPage === "home") {
    return <Homepage handlePageNavigation={handlePageNavigation} apartments={apartments} />;
  }

  return (
    <Apartmentpage
      handlePageNavigation={handlePageNavigation}
      apartments={apartments}
      selectedApt={selectedApt}
    />
  );

  // Page de détail de l'appartement
};

export default App;