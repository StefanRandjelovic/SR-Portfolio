// STYLES
import "@styles/Contact.scss";

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
    <main id="contact">
      <h1>
        {langChange
          ? engInfo.nav[engInfo.nav.length - 1]
          : srbInfo.nav[srbInfo.nav.length - 1]}
      </h1>
      <p>
        <span>
          {langChange ? engInfo.contact.email[0] : srbInfo.contact.email}
        </span>
        {` ${engInfo.contact.email[1]}`}
      </p>
      <p>
        <span>
          {langChange ? engInfo.contact.gitHub[0] : srbInfo.contact.gitHub}
        </span>
        {` ${engInfo.contact.gitHub[1]}`}
      </p>
    </main>
  );
};

export default Contact;
