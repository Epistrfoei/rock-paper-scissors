import { useEffect, useState } from "react";
import "./gamers.css";
import ResetButton from "../ResetButton/ResetButton";

const CounterScore = ({ winner }) => {
  const [playerCounter, setPlayerCounter] = useState(0);
  const [computerCounter, setComputerCounter] = useState(0);

  const initialValue = 0;

  const resetValue = () => {
    setPlayerCounter(() => initialValue);
    setComputerCounter(() => initialValue);
  };

  useEffect(() => {
    if (winner.includes("YOU WON !")) {
      setPlayerCounter((playerCounter) => playerCounter + 1);
    } else if (winner.includes("COMPUTER WON !")) {
      setComputerCounter(() => computerCounter + 1);
    }
  }, [winner]);

  return (
    <>
      <ResetButton resetValue={resetValue} />
      <div className="gamers">
        <p>PLAYER SCORE: {playerCounter}</p>
        <p>COMPUTER SCORE: {computerCounter} </p>
      </div>
    </>
  );
};

export default CounterScore;
