import "./ApartmentButton.css"

const ApartmentButton = ({ num, onClick, hasText }) => {

  return (
    <button key={num} onClick={() => onClick(num)} className={hasText ? "btn-has-text" : "btn-no-text"}>
      {num}
    </button>
  );
};

export default ApartmentButton