import Button from "../Button/Button";
import ButtonChangeTheme from "../ButtonTheme/ButtonChangeTheme";
import Game from "../Game/Games";
import GameSings from "../GameSigns/GameSigns";
import ResetButton from "../ResetButton/ResetButton";
import "./GameField.css";
import { Children, useState } from "react";
import Paper2 from "../../../public/Paper2.svg";
import Rock2 from "../../../public/Rock2.svg";
import Scissors2 from "../../../public/Scissors2.svg";
import GameScore from "../GameScore/GameScore";
import Gamer from "../Gamer/Gamer";
import Computer from "../Computer/Computer";
import IsWinner from "../IsWinner/IsWinner";

const GameField = () => {
  const [theme, setTheme] = useState(true);
  const [counter, setCounter] = useState(0);
  const [sign, setSign] = useState(null);
  const [computerSign, setComputerSign] = useState(null);
  const [gamerCounter, setGamerCounter] = useState(0);
  const [computerCounter, setComputerCounter] = useState(0);

  const gameSigns = [
    { name: "ROCK", url: Rock2, id: 1 },
    { name: "PAPER", url: Paper2, id: 2 },
    { name: "SCISSORS", url: Scissors2, id: 3 },
  ];

  const handleChange = () => {
    setTheme(!theme);
  };

  const resetCounter = () => {
    setCounter(() => 0);
  };

  const handleSign = (event) => {
    let random = gameSigns.map((elem) => elem.url);
    let newRandom = Math.floor(Math.random() * random.length);
    setComputerSign(() => random[newRandom]);
    setSign(() => event.target.id);
  };

  const kek = () => {
    setGamerCounter(() => gamerCounter + 1);
  };

  return (
    <div className={`game-field-wrapper  ${theme ? "light" : "dark"}`}>
      <ButtonChangeTheme handleChange={handleChange} theme={theme} />
      <h1>Rock Paper Scissors</h1>

      <div className="game">
        <Gamer sign={sign} />
        <IsWinner sign={sign} computerSign={computerSign} />
        <Computer computerSign={computerSign} />
      </div>

      <div>Choose your move, rock paper or scissors?</div>

      <GameSings gameSigns={gameSigns} handleSign={handleSign} />
    </div>
  );
};

export default GameField;
