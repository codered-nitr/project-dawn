import React from 'react'
import './css/App.css'
import './css/bg.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar'
import IDE from './components/ide'
import Home from './components/home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Apply from './components/apply'
import Footer from './components/footer'
import Maintenance from './components/maintenance'
import { Helmet } from 'react-helmet'
import Enigma from './components/enigma'

function App() {
  return (
    <div className = "area">
      <Helmet><title>Code Red NIT-R</title></Helmet>
      <Router>
        <div className="appBody">
          <NavBar />
          <hr />
          <Switch>
            <Route exact path = "/" component = {Home} />
            <Route path = "/enigma" component = {Enigma} />
            <Route path = "/ide" component = {IDE} />
            <Route path = "/apply" component = {Apply} />
            <Route path = "/login" component = {Maintenance} />
            <Route path = "/signup" component = {Maintenance} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
