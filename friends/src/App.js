import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Nav from './components/Nav';
import Login from './components/Login';
import Logout from './components/Logout'
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

function App() {
  return (
    <Router>
        <div className="App">
          <Nav/>
          <Switch>
            <PrivateRoute exact path="/protected" component={FriendsList} />
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout}/>
            <Route component={Login} />
            <Route component={Logout}/>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
