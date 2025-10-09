import "./Game.css";
import { useState } from "react";
import Gamer from "../Gamer/Gamer";
import Computer from "../Computer/Computer";
import IsWinner from "../IsWinner/IsWinner";
import GameScore from "../GameScore/GameScore";

const Game = ({
  sign,
  computerSign,
  gamerCounter,
  setGamerCounter,
  computerCounter,
  setComputerCounter,
}) => {
  return (
    <>
      {/* <GameScore />
      <div>Победитель</div>
      <div className="game">
        <Gamer sign={sign} />
        <IsWinner
          sign={sign}
          computerSign={computerSign}
          gamerCounter={gamerCounter}
          setGamerCounter={setGamerCounter}
          computerCounter={computerCounter}
          setComputerCounter={setComputerCounter}
        />

        <Computer computerSign={computerSign} />
      </div> */}
    </>
  );
};

export default Game;
