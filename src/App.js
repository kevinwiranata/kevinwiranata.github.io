import React from 'react';
import './css/App.css'
import Welcome from './pages/Welcome';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Error from './pages/Error';
import About from './pages/About';
import Navbar from './components/Navbar';
import './css/Pages.css';


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
        <About/>
        <Portfolio/>
        <Contact/>
      </div>)}/>
      <Route component = {Error}/>
    </Switch>
    </>
  );
}

export default App;
