import Paper2 from "../../icon/Paper2.svg";
import Rock2 from "../../icon/Rock2.svg";
import Scissors2 from "../../icon/Scissors2.svg";
import CounterScore from "../CounterScore/CounterScore";

import "./calculateWinner.css";

const CalculateWinner = ({ sign, computerSign }) => {
  const identificationWinner = () => {
    if (
      (sign === Paper2 && computerSign === Rock2) ||
      (sign === Rock2 && computerSign === Scissors2) ||
      (sign === Scissors2 && computerSign === Paper2)
    ) {
      return "YOU WON !";
    } else if (
      (sign === Paper2 && computerSign === Scissors2) ||
      (sign === Scissors2 && computerSign === Rock2) ||
      (sign === Rock2 && computerSign === Paper2)
    ) {
      return "COMPUTER WON !";
    } else {
      return "НИЧЬЯ !";
    }
  };

  const winner = identificationWinner();

  return (
    <>
      <div className="calculate-winner">
        {winner}
        <CounterScore winner={winner} />
      </div>
    </>
  );
};

export default CalculateWinner;
