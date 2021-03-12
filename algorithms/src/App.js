import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Landingpage from './components/Landingpage'
import Blog  from './components/Blog'
import UserLogin from './components/UserLogin'
import UserSign from './components/UserSign'
import LookBook from './pages/lookBook';


function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Landingpage} />
          <Route path="/login" component={UserLogin} />
          <Route path="/signup" component={UserSign} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/lookbook" component={LookBook} />
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
