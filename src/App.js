import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Projects from "./pages/Projects";
import ProjectsSection from "./components/ProjectsSection";

function App() {
  return (
    <>
      <Router>
        <div>
          <Header />
          <Projects />
          <ProjectsSection />
        </div>
      </Router>
    </>
  );
}

export default App;
