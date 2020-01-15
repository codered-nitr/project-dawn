import React, { Component } from 'react'
import './css/App.css'
import './css/bg.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar'
import IDE from './components/ide'
import Home, { Fly } from './components/home'
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
import Account from './components/account'
import { ScaleLoader } from 'react-spinners'
import OnImagesLoaded from 'react-on-images-loaded'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }
  render(){
    AOS.init({duration: 1000})
    return (
      <div className = "area">      
        <Helmet><title>Code Red NIT-R</title></Helmet>
        <OnImagesLoaded onLoaded = {() => this.setState({loading: false})}>
          {this.state.loading?<>{Loader}</>:
            <Router>
              <div className={isBrowser?"appBody":""}>
                <NavBar />
                <hr />
                <Switch>
                  <Route exact path = "/" component = {Home} />
                  <Route path = "/enigma" component = {Enigma} />
                  <Route path = "/ide" component = {IDE} />
                  <Route path = "/apply" component = {Apply} />
                  <Route path = "/account" component = {Account} />
                </Switch>
                <Footer />
              </div>
            </Router>
          }
        </OnImagesLoaded>
      </div>
    )
  }
}

const Loader = 
  <div>
    <Fly />
    <div style = {{height: "100vh", display: "flex", alignItems: "center", justifyContent: "center"}}>
      <ScaleLoader
        height={125}
        margin={15}
        width={6}
        color={"#FA3264"}
      />
    </div>
  </div>

export default withAuthentication(App);
