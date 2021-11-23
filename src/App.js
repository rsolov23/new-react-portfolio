import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Projects from "./components/Projects/Projects"

function App() {
  return (
    <Router>
      <div>
        <Header />
  <Projects />
      </div>
    </Router>
  );
}

export default App;
