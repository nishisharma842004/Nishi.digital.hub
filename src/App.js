import { useEffect, useState } from "react";
import Preloader from "../src/components/Pre";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar";



import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";
import "./App.css";
import Certificates from "./components/Certificates/Certificates"; // Only imported once
import CodingProfiles from "./components/CodingProfiles/CodingProfiles";
import Footer from "./components/Footer";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/ResumeNew";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
       

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/project" element={<Projects />} />
  <Route path="/about" element={<About />} />
  <Route path="/resume" element={<Resume />} />
  <Route path="/codingprofile" element={<CodingProfiles />} />
  <Route path="/certificates" element={<Certificates />} />
  <Route path="/experience" element={<Experience />} />
  <Route path="*" element={<Navigate to="/" />} />
</Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
