// STYLES
import "@styles/Skills.scss";

// INFORMATION
import { engInfo, srbInfo } from "@info/info-array";

// DEV DEPENDENCIES
import { useAtomValue } from "jotai";

// GSVariable
import { languageChange, darkMode } from "@global/store.js";

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
      <p>
        {langChange
          ? engInfo.skills.hardSkills[0]
          : srbInfo.skills.hardSkills[0]}
      </p>
      <p>
        {langChange
          ? engInfo.skills.softSkills[0]
          : srbInfo.skills.softSkills[0]}
      </p>
      <p>
        {langChange
          ? engInfo.skills.transferableSkills[0]
          : srbInfo.skills.transferableSkills[0]}
      </p>
      <p>
        {langChange
          ? engInfo.skills.jobRelatedSkills[0]
          : srbInfo.skills.jobRelatedSkills[0]}
      </p>
      <p>
        {langChange
          ? engInfo.skills.adaptiveSkills[0]
          : srbInfo.skills.adaptiveSkills[0]}
      </p>
    </main>
  );
};

export default Skills;
<main>Skills</main>;
