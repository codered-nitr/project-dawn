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
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import $ from 'jquery'

function App() {
  return (
    <Router>
      <div className="appBody area rain">
        <NavBar />
        <hr />
        <ul class="circles"><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ul>
        <Switch>
          <Route exact path = "/" component = {Home} />
          <Route path = "/about-us" component = {Maintenance} />
          <Route path = "/enigma" component = {Maintenance} />
          <Route path = "/ide" component = {IDE} />
          <Route path = "/apply" component = {Maintenance} />
          <Route path = "/login" component = {Maintenance} />
          <Route path = "/signup" component = {Maintenance} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
