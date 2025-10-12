import darkThemeIcon from "../../icon/darkIcon.svg";
import lightThemeIcon from "../../icon/lightIcon.svg";
import "./ButtonChangeTheme.css";
const ButtonChangeTheme = ({ handleChange, isLightTheme }) => {
  return (
    <div className="button-theme-wrapper">
      <button className="button-theme" onClick={handleChange}>
        <img src={isLightTheme ? lightThemeIcon : darkThemeIcon} alt="тема" />
      </button>
    </div>
  );
};

export default ButtonChangeTheme;
