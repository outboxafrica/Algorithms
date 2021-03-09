import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Landingpage from "./Components/Landingpage";
import UserLogin from "./Components/UserLogin";
import UserSign from "./Components/UserSign";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Landingpage} />

          <Route path="/login" component={UserLogin} />

          <Route path="/signup" component={UserSign} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;