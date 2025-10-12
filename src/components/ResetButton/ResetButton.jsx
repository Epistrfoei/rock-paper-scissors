import "./ResetButton.css";

const ResetButton = ({ onClick }) => {
  return (
    <div className="reset-button-wrapper">
      <button onClick={onClick} className="reset-button">
        RESET THE SCORE
      </button>
    </div>
  );
};

export default ResetButton;
