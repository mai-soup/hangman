import Hangman from "./Hangman";

function App() {
  return (
    <div className="container mx-auto px-3 text-center flex flex-col items-center h-screen justify-center bg-[#191117]/60">
      <h1 className="text-6xl mb-2 text-[#FFB703] font-bold text-shadow shadow-[#fb8500]">
        Hangman
      </h1>
      <Hangman />
    </div>
  );
}

export default App;
