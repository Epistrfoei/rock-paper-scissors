import IsWinner from "../IsWinner/IsWinner";
import "./GameScore.css";

const GameScore = ({ computerCounter, gamerCounter }) => {
  return (
    <>
      <div className="gamers">
        <p>PLAYER SCORE: {gamerCounter}</p>
        <p>COMPUTER SCORE: {computerCounter}</p>
      </div>
    </>
  );
};

export default GameScore;
