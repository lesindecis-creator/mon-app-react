import ApartmentButton from "./ApartmentButton";
import "./Homepage.css"

const Homepage = ({ handlePageNavigation, apartments }) => {
  const handleApartmentClick = (aptNumber) => {
    handlePageNavigation(aptNumber);
  };

  return (
    <div className='page-container'>
      {/* Conteneur de l'immeuble centré */}
      <div>
        {/* Façade de l'immeuble */}
        <div className='building-facade'>
          {/* Toit de l'immeuble (Marquise) */}
          <div className='building-roof'></div>

          <div className='building-inner-content'>
            {/* Titre */}
            <h1>Derrière les numéros</h1>

            {/* Conteneur des cases */}
            <div>
              {/* Définir les lignes d'appartements */}
              {[7, 6, 5, 4, 3, 2, 1].map((floor) => (
                <div key={floor}>
                  {[...Array(11)].map((_, i) => {
                    const unit = i * 2;
                    const num = (floor * 100 + unit).toString().padStart(3, "0");

                    if (apartments[num]) {
                      return (
                        <ApartmentButton
                          key={num}
                          num={num}
                          onClick={handleApartmentClick}
                          hasText={apartments[num].hasText}
                        />
                      );
                    }
                    return <div key={num} className='w-16 h-16'></div>; // Placeholder vide
                  })}
                </div>
              ))}

              {/* Conteneur pour le bouton Fleuriste et le bouton RDC et le bouton Prompt */}
             <div className="ground-floor-wrapper">
                <button onClick={() => handleApartmentClick("Fleuriste")} className='florist-button'>
                  Fleuriste
                </button>
                <button onClick={() => handleApartmentClick("RDC")} className='rdc-button'>
                  RDC
                </button>
                <button onClick={() => handleApartmentClick("Prompt")} className='prompt-button'>
                  Prompt
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;