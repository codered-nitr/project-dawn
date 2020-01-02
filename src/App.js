import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar'
import IDE from './components/ide'
import Home from './components/home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Apply from './components/apply';
import Footer from './components/footer';
import Maintenance from './components/maintenance';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Router>
      <div className="appBody">
        <NavBar />
        <hr />
        <Switch>
          <Route exact path = "/" component = {Home} />
          <Route path = "/about-us" component = {Maintenance} />
          <Route path = "/enigma" component = {Maintenance} />
          <Route path = "/ide" component = {IDE} />
          <Route path = "/apply" component = {Maintenance} />
          <Route path = "/login" component = {Maintenance} />
          <Route path = "/signup" component = {Maintenance} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
