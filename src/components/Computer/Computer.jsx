import "./Computer.css";

const Computer = ({ computerSign }) => {
  return (
    <div className="computer-sign">
      <img src={computerSign} />
    </div>
  );
};

export default Computer;
