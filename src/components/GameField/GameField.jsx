import ButtonChangeTheme from "../ButtonChangeTheme/ButtonChangeTheme";
import GameSings from "../GameSigns/GameSigns";
import "./GameField.css";
import { useState } from "react";
import Paper2 from "../../icon/Paper2.svg";
import Rock2 from "../../icon/Rock2.svg";
import Scissors2 from "../../icon/Scissors2.svg";
import Gamer from "../Gamer/Gamer";
import Computer from "../Computer/Computer";
import CalculateWinner from "../CalculateWinner/CalculateWinner";

const GameField = () => {
  const [isLightTheme, setLightTheme] = useState(true);
  const [sign, setSign] = useState(null);
  const [computerSign, setComputerSign] = useState(null);

  const gameSigns = [
    { name: "ROCK", url: Rock2, id: 1 },
    { name: "PAPER", url: Paper2, id: 2 },
    { name: "SCISSORS", url: Scissors2, id: 3 },
  ];

  const handleChange = () => {
    setLightTheme((isLightTheme) => !isLightTheme);
  };

  const handleSign = (event) => {
    const urlList = gameSigns.map((elem) => elem.url);
    const randomSign = Math.floor(Math.random() * urlList.length);
    setComputerSign(() => urlList[randomSign]);
    setSign(() => event.target.id);
  };

  return (
    <div className={`game-field-wrapper  ${isLightTheme ? "light" : "dark"}`}>
      <ButtonChangeTheme
        handleChange={handleChange}
        isLightTheme={isLightTheme}
      />
      <h1>Rock Paper Scissors</h1>

      <div className="game">
        <Gamer sign={sign} />
        <CalculateWinner sign={sign} computerSign={computerSign} />
        <Computer computerSign={computerSign} />
      </div>

      <div>Choose your move, rock paper or scissors?</div>

      <GameSings gameSigns={gameSigns} handleSign={handleSign} />
    </div>
  );
};

export default GameField;
