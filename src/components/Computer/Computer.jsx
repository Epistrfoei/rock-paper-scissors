import "./Computer.css";

const Computer = ({ computerSign }) => {
  return (
    <div className="computer-sign">
      <img src={computerSign} alt="знак" />
    </div>
  );
};

export default Computer;
