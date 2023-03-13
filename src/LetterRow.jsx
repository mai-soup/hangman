import LetterButton from "./LetterButton";

const LetterRow = ({ row, usedLetters, handleLetterClick }) => {
  const generateLetters = () => {
    return row.split("").map(l => {
      return (
        <LetterButton
          key={l}
          letter={l}
          disabled={usedLetters.includes(l)}
          handleClicked={handleLetterClick}
        />
      );
    });
  };

  return <div>{generateLetters()}</div>;
};

export default LetterRow;
