import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Features from "./components/features/Features";
import FooterBottom from "./components/footer/FooterBottom";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import ProjectView from "./components/projects/ProjectView/ProjectView";

function App() {
  return (
    <Router>
      <div className="w-full h-auto bg-bodyColor text-lightText px-4">
        <Navbar />
        <div className="max-w-screen-xl mx-auto">
          <Routes>
            <Route path="/" element={<><Banner /><Features /><Projects /><Resume /><Contact /></>} />
            {/* Dynamic route for individual project views */}
            <Route path="/projects/:id" element={<ProjectView />} />
          </Routes>
          <FooterBottom />
        </div>
      </div>
    </Router>
  );
}

export default App;
