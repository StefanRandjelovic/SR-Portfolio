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
    <main>
      <h1>
        {langChange
          ? engInfo.nav[engInfo.nav.length - 2]
          : srbInfo.nav[srbInfo.nav.length - 2]}
      </h1>
    </main>
  );
};

export default Skills;
<main>Skills</main>;
