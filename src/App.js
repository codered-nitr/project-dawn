import React from 'react'
import './css/App.css'
import './css/bg.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar'
import IDE from './components/ide'
import Home from './components/home'
import { BrowserRouter as Router, Route, HashRouter, Switch } from 'react-router-dom'
import Apply from './components/apply'
import Footer from './components/footer'
import Maintenance from './components/maintenance'
import { Helmet } from 'react-helmet'

function App() {
  return (
    <div className = "area rain">
      <Helmet><title>Code Red NIT-R</title></Helmet>
      <Router basename = {process.env.PUBLIC_URL}>
        <div className="appBody">
          <NavBar />
          <hr />
          <ul className="circles"><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ul>
          <Switch>
            <Route exact path = "/" component = {Home} />
            <Route path = "/enigma" component = {Maintenance} />
            <Route path = "/ide" component = {IDE} />
            <Route path = "/apply" component = {Maintenance} />
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