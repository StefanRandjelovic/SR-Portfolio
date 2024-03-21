// DEV DEPENDENCIES
import { Link } from "react-router-dom";

// SVG Assets
import SrLogo from "@svg/SR.svg";

// STYLES
import "@styles/NavBar.scss";

const NavBar = () => {
  return (
    <nav>
      <Link id="logo" to={"/"} title="Home page">
        <img src={SrLogo} alt="logo" />
      </Link>
      <div className="right-side">
        <Link to={"/about"}>About</Link>
        <Link to={"/skills"}>Skills</Link>
        <Link to={"/contact"}>Contact</Link>
      </div>
    </nav>
  );
};

export default NavBar;
