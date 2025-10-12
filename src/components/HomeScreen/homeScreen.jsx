import Button from "../Button/Button";
import ButtonChangeTheme from "../ButtonChangeTheme/ButtonChangeTheme";
import "./homeScreen.css";
import { useState } from "react";

const HomeScreen = ({ handlePage }) => {
  const [isLightTheme, setLightTheme] = useState(true);

  const handleChange = () => {
    setLightTheme(() => !isLightTheme);
  };

  return (
    <div>
      <div className={`home-wrapper ${isLightTheme ? "light" : "dark"}`}>
        <ButtonChangeTheme
          handleChange={handleChange}
          isLightTheme={isLightTheme}
        />
        <Button handlePage={handlePage} />
        <h1>Rock Paper Scissors The game</h1>
      </div>
    </div>
  );
};

export default HomeScreen;
