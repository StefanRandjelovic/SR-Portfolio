// DEV DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGES
import Home from "@pages/Home";
import About from "@pages/About";
import Contact from "@pages/Contact";
import Skills from "@pages/Skills";

// COMPONENTS
import NavBar from "@components/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={""} />
      </Routes>
    </Router>
  );
}

export default App;
