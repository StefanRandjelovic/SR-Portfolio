// DEV DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useAtomValue } from "jotai";
import { useEffect } from "react";

// GSVariable
import { languageChange } from "@global/store.js";

// PAGES
import Home from "@pages/Home";
import About from "@pages/About";
import Contact from "@pages/Contact";
import Skills from "@pages/Skills";
import ErrorPage from "@pages/ErrorPage";

// COMPONENTS
import NavBar from "@components/NavBar";

function App() {
  // GSVariable
  const langChange = useAtomValue(languageChange);

  // DYNAMIC TITLE CHANGER
  useEffect(() => {
    document.title = langChange ? "SR Portfolio site" : "SR Portfolio sajt";
  }, [langChange]);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
