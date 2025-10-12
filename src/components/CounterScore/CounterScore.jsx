import { useEffect, useState } from "react";
import "./gamers.css";
import ResetButton from "../ResetButton/ResetButton";

const CounterScore = ({ winner }) => {
  const [counter, setCounter] = useState(0);
  const [computerCounter, setComputerCounter] = useState(0);

  const initialValue = 0;

  const resetValue = () => {
    setCounter(() => initialValue);
    setComputerCounter(() => initialValue);
  };

  useEffect(() => {
    if (winner.includes("YOU WON !")) {
      setCounter((counter) => counter + 1);
    } else if (winner.includes("COMPUTER WON !")) {
      setComputerCounter(() => computerCounter + 1);
    }
  }, [winner]);

  return (
    <>
      <ResetButton resetValue={resetValue} />
      <div className="gamers">
        <p>PLAYER SCORE: {counter}</p>
        <p>COMPUTER SCORE: {computerCounter} </p>
      </div>
    </>
  );
};

export default CounterScore;
