// STYLES
import "@styles/ErrorPage.scss";

// INFO
import { srbInfo, engInfo } from "@info/info-array";

// DEV DEPENDENCIES
import { useAtomValue } from "jotai";

// GSVariable
import { languageChange } from "@global/store.js";

const ErrorPage = () => {
  const langChange = useAtomValue(languageChange);

  return (
    <>
      <main id="error_page">
        <h1>{langChange ? engInfo.errorPage : srbInfo.errorPage}</h1>
      </main>
    </>
  );
};

export default ErrorPage;
