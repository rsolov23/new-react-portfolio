import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Projects from "./pages/Projects";
import ProjectsSection from "./components/ProjectsSection";
import Skills from "./pages/Skills";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";


function App() {
  return (
    <Router>
     
      <div className="App" >
        \
        <Header />
        {/* <Route exact path="/" component={Header} /> */}
        {/* <Projects />
          <ProjectsSection /> */}
        <Skills />
        {/* <Resume />
          <Contact /> */}
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
