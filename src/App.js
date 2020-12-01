import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './pages/login/index';
import Home from './pages/home/index';
import Cadastro from './pages/cadastro/index';

const App = () => {
  return (
    <Router>
      <div>
        <Route path="/cadastro">
          <Cadastro />
        </Route>
        <Switch>
          <Route exact path="/dashboard">
            <Home />
          </Route>
          <Route path="/">
            <Login />
          </Route>

          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
