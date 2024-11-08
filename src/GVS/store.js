// DEV DEPENDENCIES
import { atomWithStorage } from "jotai/utils";

const languageChange = atomWithStorage("language", false);

const darkMode = atomWithStorage("dark-mode", true);

export { languageChange, darkMode };
