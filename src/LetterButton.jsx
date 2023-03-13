const baseClasses = "text-white font-bold m-1 p-2 rounded";
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
