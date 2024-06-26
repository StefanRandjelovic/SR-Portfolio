// STYLES
import "@styles/Home.scss";

// DEV DEPENDENCIES
import { useAtomValue } from "jotai";

// GSVariable
import { languageChange, darkMode } from "@global/store.js";

// IMG ASSETS
import Avatar from "@images/avatarR.jpg";

// INFORMATION
import { engInfo, srbInfo } from "@info/info-array";
import CV_SRB from "@documents/SR_CV_SRB.pdf";
import CV_ENG from "@documents/SR_CV_ENG.pdf";

const Home = () => {
  // GSVariable
  const darkModeState = useAtomValue(darkMode);
  const langChange = useAtomValue(languageChange);

  return (
    <>
      <main className={darkModeState ? "darkH" : null} id="home">
        <div className="homeLeft">
          <img src={Avatar} alt="Cartoonified image" id="bckImg" />
          <a
            href={langChange ? CV_ENG : CV_SRB}
            target="_blank"
            className="message"
          >
            {langChange ? engInfo.home[3] : srbInfo.home[3]}
          </a>
        </div>
        <div className="homeRight">
          <p>{langChange ? engInfo.home[0] : srbInfo.home[0]}</p>
          <p>{langChange ? engInfo.home[1] : srbInfo.home[1]}</p>
          <p>{langChange ? engInfo.home[2] : srbInfo.home[2]}</p>
        </div>
      </main>
    </>
  );
};

export default Home;
