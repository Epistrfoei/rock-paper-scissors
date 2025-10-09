import "./ResetButton.css";

const ResetButton = ({ resetValue }) => {
  return (
    <div className="reset-button-wrapper">
      <button onClick={resetValue} className="reset-button">
        RESET THE SCORE
      </button>
    </div>
  );
};

export default ResetButton;
