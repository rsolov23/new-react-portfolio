import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { GlobalStyles } from "./styles/Global";
import NavBar from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import ProjectsSection from "./components/Projects/ProjectsSection";
import Skills from "./components/Skills/Skills";
import Resume from "./components/Resume/Resume";
import Footer from "./components/Footer/Footer";
import Contact from "./pages/Contact";
import Preloader from "../src/pages/Pre";

function App() {
  const [load, updateLoad] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);
  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <GlobalStyles />
        <NavBar />
        <Header exact path="/" component={Header} />
        <div>
          <Route exact path="/projects" component={ProjectsSection} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/contact" component={Contact} />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
