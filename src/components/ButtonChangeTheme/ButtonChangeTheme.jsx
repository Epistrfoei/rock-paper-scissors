import darkThemeIcon from "../../icon/darkIcon.svg";
import lightThemeIcon from "../../icon/lightIcon.svg";
import "./ButtonChangeTheme.css";
const ButtonChangeTheme = ({ handleChange, theme }) => {
  return (
    <div className="button-theme-wrapper">
      <button className="button-theme" onClick={handleChange}>
        <img src={theme ? lightThemeIcon : darkThemeIcon} alt="тема" />
      </button>
    </div>
  );
};

export default ButtonChangeTheme;
