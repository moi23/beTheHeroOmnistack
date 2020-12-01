import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './pages/login/index';
import Home from './pages/home/index';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/">
            <Login />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/dashboard">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
