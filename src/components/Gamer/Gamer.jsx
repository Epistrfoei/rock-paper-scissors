import "./Gamer.css";

const Gamer = ({ sign }) => {
  return (
    <div className="gamer-sign">
      <img src={sign} alt="знак" />
    </div>
  );
};

export default Gamer;
