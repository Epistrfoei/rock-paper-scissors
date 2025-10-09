import Button from "../Button/Button";
import ButtonChangeTheme from "../ButtonTheme/ButtonChangeTheme";
import "./homeScreen.css";
import { useState } from "react";

const HomeScreen = ({ handlePage }) => {
  const [theme, setTheme] = useState(true);

  const handleChange = () => {
    setTheme(!theme);
  };

  return (
    <div>
      <div className={`home-wrapper ${theme ? "light" : "dark"}`}>
        <ButtonChangeTheme handleChange={handleChange} theme={theme} />
        <Button handlePage={handlePage} />
        <h1>Rock Paper Scissors The game</h1>
      </div>
    </div>
  );
};

export default HomeScreen;
