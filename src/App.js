import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Statistics from "./pages/Statistics";
import About from "./pages/About";
import StatState from "./context/stat/StatState";
import "./App.scss";

const App = () => {
  return (
    <StatState>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Statistics} />
              <Route exact path="/about" component={About} />
            </Switch>
          </div>
        </div>
      </Router>
    </StatState>
  );
};

export default App;
