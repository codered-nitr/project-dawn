import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './nav.css'

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {scrolled: false}
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll = () => {
    if(this.elem && this.elem.offsetTop > 0)
      this.setState({scrolled: true})
    else
      this.setState({scrolled: false})
  }
  render() {
    return(
      <Navbar className={this.state.scrolled?"color-nav":""} collapseOnSelect expand="md" variant="dark" sticky="top" ref={elem => this.elem = elem}>
        <Navbar.Brand className="nav-brand" href="/">CODE RED</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/about-us">About Us</Nav.Link>
            <Nav.Link href="/enigma">Enigma-NITR</Nav.Link>
            <Nav.Link href="/ide">IDE</Nav.Link>
            <Nav.Link href="/apply">Join</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/signup">SignUp</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default NavBar