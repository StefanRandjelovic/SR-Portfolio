// DEV DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGES
import Home from "@pages/Home";

// COMPONENTS
import NavBar from "@components/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={""} />
        <Route path="/skills" element={""} />
        <Route path="/contact" element={""} />
        <Route path="*" element={""} />
      </Routes>
    </Router>
  );
}

export default App;
