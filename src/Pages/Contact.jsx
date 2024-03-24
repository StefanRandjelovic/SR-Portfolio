// STYLES
import "@styles/Contact.scss";

// INFORMATION
import { engInfo, srbInfo } from "@info/info-array";

// DEV DEPENDENCIES
import { useAtomValue } from "jotai";

// GSVariable
import { languageChange, darkMode } from "@global/store.js";

// HELPER FUNCTIONS
import { handleCopyText, handleOnlyCopy } from "@helpers/helpers";

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
      <div className="message">
        <p>
          {langChange ? engInfo.contact.message[0] : srbInfo.contact.message[0]}
        </p>
        <p>
          {langChange ? engInfo.contact.message[1] : srbInfo.contact.message[1]}
        </p>
      </div>

      <p
        title={langChange ? "Click to copy" : "Kliknite za kopiranje"}
        id="mail"
        onClick={() =>
          handleOnlyCopy(
            engInfo.contact.email[1],
            document.querySelector("#copied")
          )
        }
      >
        <span>
          {langChange ? engInfo.contact.email[0] : srbInfo.contact.email}
        </span>
        {` ${engInfo.contact.email[1]}`}
      </p>
      <p
        title={
          langChange
            ? "Click to copy, Ctrl + Click to follow link"
            : "Kliknite za kopiranje, Ctrl + klik da pratite link"
        }
        id="git"
        onClick={(event) =>
          handleCopyText(
            event,
            engInfo.contact.gitHub[1],
            document.querySelector("#copied")
          )
        }
      >
        <span>
          {langChange ? engInfo.contact.gitHub[0] : srbInfo.contact.gitHub}
        </span>
        {` ${engInfo.contact.gitHub[1]}`}
      </p>
      <div className="socialM">
        <p>
          {langChange
            ? engInfo.contact.socialMedia.socialM
            : srbInfo.contact.socialMedia.socialM}
        </p>
        <p
          title={
            langChange
              ? "Click to copy, Ctrl + Click to follow link"
              : "Kliknite za kopiranje, Ctrl + klik da pratite link"
          }
          id="linkedIn"
          onClick={(event) =>
            handleCopyText(
              event,
              engInfo.contact.socialMedia.linkedIn[1],
              document.querySelector("#copied")
            )
          }
        >
          <span>{engInfo.contact.socialMedia.linkedIn[0]}</span>

          {` ${engInfo.contact.socialMedia.linkedIn[1]}`}
        </p>
      </div>
      <p id="copied">COPIED!</p>
    </main>
  );
};

export default Contact;
