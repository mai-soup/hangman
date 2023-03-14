import { useState } from "react";
import getWord from "./wordList";
import image0 from "./assets/0.jpg";
import image1 from "./assets/1.jpg";
import image2 from "./assets/2.jpg";
import image3 from "./assets/3.jpg";
import image4 from "./assets/4.jpg";
import image5 from "./assets/5.jpg";
import image6 from "./assets/6.jpg";
import image7 from "./assets/7.jpg";
import image8 from "./assets/8.jpg";
import image9 from "./assets/9.jpg";
import image10 from "./assets/10.jpg";
const imgs = [
  image0,
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
];
import LetterRow from "./LetterRow";

const letters = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];

const Hangman = ({ maxMistakes = 10 }) => {
  const [answer, setAnswer] = useState(getWord());
  const [guess, setGuess] = useState(answer.split("").map(l => "_"));
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState(0);

  const handleLetterClick = e => {
    const newLtr = e.target.textContent;
    if (!answer.includes(newLtr)) setWrongGuesses(i => i + 1);
    setGuessedLetters(ltrs => [...ltrs, newLtr]);
    setGuess(
      answer
        .split("")
        .map(l => (l === newLtr || guessedLetters.includes(l) ? l : "_"))
    );
  };

  const handleRestart = () => {
    setAnswer(getWord());
    setGuess(answer.split("").map(l => "_"));
    setGuessedLetters([]);
    setWrongGuesses(0);
  };

  console.log(guess.join(""), answer, answer === guess.join(""));
  const lost = wrongGuesses >= maxMistakes;
  const won = answer === guess.join("");
  return (
    <div className="flex flex-col justify-center h-4/5 w-full sm:w-4/5 lg:w-1/3">
      <h1 className="text-6xl mb-2 text-[#FFB703] font-bold text-shadow shadow-[#fb8500]">
        Hangman
      </h1>
      <img
        src={imgs[wrongGuesses]}
        alt={`${wrongGuesses}/${maxMistakes}`}
        className="shrink object-scale-down h-auto"
      />
      <p className="text-white text-lg">
        {wrongGuesses}/{maxMistakes}
      </p>
      <h2 className="text-white text-4xl my-2 tracking-wider uppercase">
        {guess}
      </h2>
      {lost && (
        <p className="text-white text-2xl my-2">
          You lost. The correct word was{" "}
          <strong className="uppercase">{answer}</strong>.
        </p>
      )}
      {won && <p className="text-white text-2xl my-2">Congratulations!</p>}
      {!lost && !won ? (
        <div>
          {letters.map(row => (
            <LetterRow
              key={row}
              row={row}
              usedLetters={guessedLetters}
              handleLetterClick={handleLetterClick}
            />
          ))}
        </div>
      ) : (
        <button
          onClick={handleRestart}
          className="text-white font-bold m-1 p-2 rounded  bg-orange-500 hover:bg-orange-700"
        >
          New game?
        </button>
      )}
    </div>
  );
};

export default Hangman;
