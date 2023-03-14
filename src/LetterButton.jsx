const baseClasses =
  "text-white font-bold m-0.5 sm:py-3 py-4 md:py-7 px-2 lg:px-4 rounded text-2xl lg:text-4xl ";
const onClasses = baseClasses + " bg-orange-500 hover:bg-orange-700";
const offClasses = baseClasses + " bg-orange-600 opacity-50 cursor-not-allowed";

const LetterButton = ({ letter, disabled, handleClicked }) => {
  return (
    <button
      onClick={handleClicked}
      disabled={disabled}
      className={disabled ? offClasses : onClasses}
    >
      {letter}
    </button>
  );
};

export default LetterButton;
