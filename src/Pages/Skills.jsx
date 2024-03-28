// STYLES
import "@styles/Skills.scss";

// INFORMATION
import { engInfo, srbInfo } from "@info/info-array";

// DEV DEPENDENCIES
import { useAtomValue } from "jotai";

// GSVariable
import { languageChange, darkMode } from "@global/store.js";

// HELPER FUNCTIONS
import { getImgH, getImgS } from "@helpers/helpers";

const Skills = () => {
  // GSVariable
  const darkModeState = useAtomValue(darkMode);
  const langChange = useAtomValue(languageChange);

  return (
    <main id="skills" className={darkModeState ? "darkS" : null}>
      <h1>
        {langChange
          ? engInfo.nav[engInfo.nav.length - 2]
          : srbInfo.nav[srbInfo.nav.length - 2]}
      </h1>
      <h2>{langChange ? engInfo.skills.a : srbInfo.skills.a}</h2>
      <div className="hardSkills">
        {langChange
          ? engInfo.skills.hardSkills.map((skill) => (
              <div className="gridElem">
                <p key={crypto.randomUUID()}>{skill}</p>
                <img src={getImgH(skill)} alt={skill} />
              </div>
            ))
          : srbInfo.skills.hardSkills.map((skill) => (
              <div className="gridElem">
                <p key={crypto.randomUUID()}>{skill}</p>
                <img src={getImgH(skill)} alt={skill} />
              </div>
            ))}
      </div>
      <h2>{langChange ? engInfo.skills.b : srbInfo.skills.b}</h2>
      <div className="softSkills">
        {langChange
          ? engInfo.skills.softSkills.map((skill) => (
              <div className="gridElem">
                <p key={crypto.randomUUID()}>{skill}</p>
                <img src={getImgS(skill)} alt={skill} />
              </div>
            ))
          : srbInfo.skills.softSkills.map((skill) => (
              <div className="gridElem">
                <p key={crypto.randomUUID()}>{skill}</p>
                <img src={getImgS(skill)} alt={skill} />
              </div>
            ))}
      </div>
    </main>
  );
};

export default Skills;
<main>Skills</main>;
