// STYLES
import "@styles/About.scss";

// INFORMATION
import { engInfo, srbInfo } from "@info/info-array";

// DEV DEPENDENCIES
import { useAtomValue } from "jotai";

// GSVariable
import { languageChange, darkMode } from "@global/store.js";

// IMG import
import MyIMG from "@images/My_img.png";

const About = () => {
  // GSVariable
  const darkModeState = useAtomValue(darkMode);
  const langChange = useAtomValue(languageChange);

  return (
    <main id="about" className={darkModeState ? "darkA" : null}>
      <div className="leftSideAbout">
        <img src={MyIMG} alt="My image" id="myIMG" />
        <label htmlFor="#myIMG">
          {langChange ? engInfo.aboutImg : srbInfo.aboutImg}
        </label>
      </div>
      <div className="rightSideAbout">
        <h1>{langChange ? engInfo.nav[2] : srbInfo.nav[0]}</h1>
        <p>{langChange ? engInfo.about[0] : srbInfo.about[0]}</p>
        <p>{langChange ? engInfo.about[1] : srbInfo.about[1]}</p>
        <p>{langChange ? engInfo.about[2] : srbInfo.about[2]}</p>
        <p>{langChange ? engInfo.about[3] : srbInfo.about[3]}</p>
      </div>
    </main>
  );
};

export default About;
