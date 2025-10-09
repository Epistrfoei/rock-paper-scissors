import Paper2 from "../../icon/Paper2.svg";
import Rock2 from "../../icon/Rock2.svg";
import Scissors2 from "../../icon/Scissors2.svg";
import CounterScore from "../CounterScore/CounterScore";

import "./calculateWinner.css";

const CalculateWinner = ({ sign, computerSign }) => {
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
      <div className="calculate-winner">
        {winner}
        <CounterScore winner={winner} />
      </div>
    </>
  );
};

export default CalculateWinner;
