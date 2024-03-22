// INFORMATION
import { engInfo, srbInfo } from "@info/info-array";

// DEV DEPENDENCIES
import { useAtomValue } from "jotai";

// GSVariable
import { languageChange, darkMode } from "@global/store.js";

const Contact = () => {
  // GSVariable
  const darkModeState = useAtomValue(darkMode);
  const langChange = useAtomValue(languageChange);

  return (
    <main>
      <h1>
        {langChange
          ? engInfo.nav[engInfo.nav.length - 1]
          : srbInfo.nav[srbInfo.nav.length - 1]}
      </h1>
    </main>
  );
};

export default Contact;
