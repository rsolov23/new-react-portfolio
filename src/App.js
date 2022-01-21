import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GlobalStyles } from "./styles/Global";
import NavBar from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Resume from "./components/Resume/Resume";
import Footer from "./components/Footer/Footer";
import Contact from "./pages/Contact";
import Preloader from "../src/pages/Pre";
import ParticleBackground from "./pages/Particle";
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
        <GlobalStyles />
        <ParticleBackground />
        <NavBar />

        <Switch>
          <Header exact path="/" component={Header} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
