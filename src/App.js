import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Welcome from './pages/Welcome';
import Home from './pages/Home';
import Projects from './pages/Projects';
import PythonProjects from './pages/Python_Project';
import Error from './pages/Error';
import Navbar from './components/Navbar';

import {Route, Switch, Link} from 'react-router-dom';

function App() {
  return (
    <>
    <Switch>
      <Route exact path="/" render={() => (
        <div>
          <Welcome/>
        </div>
      )}/>
      <Route exact path="/home" render={() => (<div><Navbar/><Home/></div>)}/>
      <Route exact path="/projects/" render={() => (<div><Navbar/><Projects/></div>)}/>
      <Route exact path="/projects/:python" render={() => (<div><Navbar/><PythonProjects/></div>)}/>
      <Route exact path="/contact" render={() => (<div><Navbar/><Home/></div>)}/>
      <Route component = {Error}/>
    </Switch>
    </>
  );
}

export default App;
