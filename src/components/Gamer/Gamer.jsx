import "./Gamer.css";

const Gamer = ({ sign }) => {
  return (
    <div className="gamer-sign">
      <img src={sign} />
    </div>
  );
};

export default Gamer;
