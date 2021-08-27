import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Navbar from "./Navbar";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename="/reactportfolio">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/projects" component={Projects} />
        <Redirect to="/" />
        <Home />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
