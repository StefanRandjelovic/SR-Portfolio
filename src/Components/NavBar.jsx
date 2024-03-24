// DEV DEPENDENCIES
import { Link } from "react-router-dom";
import { useAtom } from "jotai";
import { useEffect } from "react";

// SVG Assets
import SrLogo from "@svg/SR.svg";
import Dark from "@svg/dark_mode.svg";
import Light from "@svg/light_mode.svg";

// STYLES
import "@styles/NavBar.scss";

// HELPERS
import { darkBackground } from "@helpers/helpers";

// INFORMATION
import { engInfo, srbInfo } from "@info/info-array";

// GSVariable
import { languageChange, darkMode } from "@global/store.js";

const NavBar = () => {
  // GSVariable
  const [darkModeState, setDarkModeState] = useAtom(darkMode);
  const [langChange, setLangChange] = useAtom(languageChange);

  // DARK MODE BACKGROUND CHANGER
  useEffect(() => {
    darkBackground(darkModeState);
  }, [darkModeState]);

  return (
    <nav className={darkModeState ? "dark" : null}>
      <Link id="logo" to={"/"} title="Home page">
        <img src={SrLogo} alt="logo" />
      </Link>
      <div id="nonLogo">
        <div className="left-side">
          <p onClick={() => setLangChange(false)}>{engInfo.nav[0]}</p>
          <p onClick={() => setLangChange(true)}>{engInfo.nav[1]}</p>
        </div>
        <div className="right-side">
          <Link to={"/about"}>
            {langChange ? engInfo.nav[2] : srbInfo.nav[0]}
          </Link>
          <Link to={"/skills"}>
            {langChange ? engInfo.nav[3] : srbInfo.nav[1]}
          </Link>
          <Link to={"/contact"}>
            {langChange ? engInfo.nav[4] : srbInfo.nav[2]}
          </Link>
        </div>
        <img
          onClick={() => setDarkModeState(!darkModeState)}
          src={darkModeState ? Light : Dark}
          alt="Dark/Light mode toggle"
          id="darkMode"
        />
      </div>
    </nav>
  );
};

export default NavBar;
