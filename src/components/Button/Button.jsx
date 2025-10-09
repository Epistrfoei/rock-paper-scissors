import "./Button.css";
const Button = ({ handlePage }) => {
  return (
    <button className="button" onClick={handlePage}>
      PLAY
    </button>
  );
};

export default Button;
