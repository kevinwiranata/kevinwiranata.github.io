import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Python_Projects from './pages/Python_Project';
import Error from './pages/Error';
import Navbar from './components/Navbar';

import {Route, Switch, Link} from 'react-router-dom';

function App() {
  return (
    <>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/projects/" component={Projects}/>
      <Route exact path="/projects/:python" component = {Python_Projects}/>
      <Route component = {Error}/>
    </Switch>
    </>
  );
}

export default App;
