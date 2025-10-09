import { useEffect, useState } from "react";
import Paper2 from "../../../public/Paper2.svg";
import Rock2 from "../../../public/Rock2.svg";
import Scissors2 from "../../../public/Scissors2.svg";
import GameScore from "../GameScore/GameScore";
import CounterScore from "../CounterScore/CounterScore";
import "./winner.css";

const IsWinner = ({ sign, computerSign }) => {
  const isWinner = () => {
    let result;
    if (sign === Paper2 && computerSign === Rock2) {
      result = "YOU WON !";
    } else if (sign === Rock2 && computerSign === Scissors2) {
      result = "YOU WON !";
    } else if (sign === Scissors2 && computerSign === Paper2) {
      result = "YOU WON !";
    } else if (sign === Paper2 && computerSign === Scissors2) {
      result = "COMPUTER WON !";
    } else if (sign === Scissors2 && computerSign === Rock2) {
      result = "COMPUTER WON !";
    } else if (sign === Rock2 && computerSign === Paper2) {
      result = "COMPUTER WON !";
    } else if (sign === computerSign) {
      result = "НИЧЬЯ !";
    }

    return result;
  };

  const winner = isWinner();

  return (
    <>
      <div className="winner">
        {winner}
        <CounterScore winner={winner} />
      </div>
    </>
  );
};

export default IsWinner;
