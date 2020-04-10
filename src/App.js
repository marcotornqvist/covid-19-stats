import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Landing from "./pages/Landing";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Survey from "./pages/Survey";
import Statistics from "./pages/Statistics";
import Info from "./pages/Info";
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
              <Route exact path="/" component={Landing} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/sign-in" component={Login} />
              <Route exact path="/info" component={Info} />
              <Route exact path="/statistics" component={Statistics} />
              <Route exact path="/survey" component={Survey} />
            </Switch>
          </div>
        </div>
      </Router>
    </StatState>
  );
};

export default App;
