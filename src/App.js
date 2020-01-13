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
import { isBrowser } from 'react-device-detect'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { withAuthentication } from './components/session'

const App = () => {
  AOS.init({duration: 1000})
  return (
    <div className = "area">
      <Helmet><title>Code Red NIT-R</title></Helmet>
      <Router>
        <div className={isBrowser?"appBody":""}>
          <NavBar />
          <hr />
          <Switch>
            <Route exact path = "/" component = {Home} />
            <Route path = "/enigma" component = {Enigma} />
            <Route path = "/ide" component = {IDE} />
            <Route path = "/apply" component = {Apply} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </div>
  )
}

export default withAuthentication(App);
