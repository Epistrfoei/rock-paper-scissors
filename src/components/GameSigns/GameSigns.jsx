import "../Button/Button.css";
import "./GameSigns.css";
const GameSings = ({ gameSigns, handleSign }) => {
  return (
    <ul className="signs">
      {gameSigns.map((sign, i) => (
        <li key={Object.values(sign)}>
          <button className="button" id={sign.url} onClick={handleSign}>
            {sign.name}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default GameSings;
