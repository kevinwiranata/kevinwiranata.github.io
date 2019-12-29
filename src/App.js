import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Welcome from './pages/Welcome';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Error from './pages/Error';
import Navbar from './components/Navbar';
import './pages/Pages.css'

import {Route, Switch} from 'react-router-dom';
import Contact from './pages/Contact';

function App() {
  return (
    <>
    <Switch>
      <Route exact path="/" render={() => (
        <div>
          <Welcome/>
        </div>
      )}/>
      <Route exact path="/home" render={() => (
      <div>
        <Navbar/>
        <Home/>
        <Projects/>
        <Contact/>
      </div>)}/>
      <Route component = {Error}/>
    </Switch>
    </>
  );
}

export default App;
