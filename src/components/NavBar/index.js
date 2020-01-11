import React, { Component, useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Modal, InputGroup, FormControl, Button, Form } from 'react-bootstrap'
import '../../css/nav.css'
import { IoMdLogIn, IoMdKey } from 'react-icons/io'
import { IconContext } from 'react-icons'
import { TiUserOutline } from 'react-icons/ti'
import { MdEmail } from 'react-icons/md'
import { FaSlackHash } from 'react-icons/fa'

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {scrolled: false, showLSU: false}
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
        <Navbar.Brand className="nav-brand" href="/">CODE <span className = "red">RED</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/enigma">Enigma-NITR</Nav.Link>
            <Nav.Link href="/ide">IDE</Nav.Link>
            <Nav.Link href="/apply">Join</Nav.Link>
          </Nav>
          <Nav>
            <span className = "logButton" title = "Login/SignUp" style = {{marginLeft: "auto", marginRight: "auto"}}>
              <IconContext.Provider value = {{color: "inherit", size: "2em"}}>
                <IoMdLogIn style = {{cursor: "pointer"}} onClick = {() => this.setState({showLSU: true})} />
                <LSU show = {this.state.showLSU} onHide = {() => this.setState({showLSU: false})} />
              </IconContext.Provider>
            </span>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

const LSU = props => {
  const [sign, setSign] = useState(false)

  const [lEmail, setLEmail] = useState("")
  const [lPass, setLPass] = useState("")
  const onLogin = event => {
    //console.log(lEmail, lPass)
    event.preventDefault()
  }
  const disableLogin = lEmail === "" || lPass === "" 
  
  const [sName, setSName] = useState("")
  const [sEmail, setSEmail] = useState("")
  const [sRoll, setSRoll] = useState("")
  const [sPass, setSPass] = useState("")
  const onCreate = event => {
    //console.log(sName, sEmail, sRoll, sPass)
    event.preventDefault()
  }
  const disableSignUp = sName === "" || sEmail === "" || sRoll === "" || sPass === ""
  return(
    <Modal {...props} aria-labelledby = "contained-modal-title-vcenter" className = "lsuModal" centered>
      <Modal.Header style = {{backgroundColor: "#050505", color: "#FA3264"}}>
        <h4 style = {{fontFamily: "Courier"}}>Welcome to Code Red</h4>
      </Modal.Header>
      <Modal.Body style = {{backgroundColor: "#050505", color: "whitesmoke"}}>
      <IconContext.Provider value = {{color: "whitesmoke", size: "2em"}}>
      {!sign?
        <div style = {{width: "80%", margin: "auto"}}>
          <h5 style = {{textAlign: "center"}}>LOGIN</h5>
          <Form onSubmit = {onLogin}>
            <InputGroup className = "LSUgroup">
              <InputGroup.Prepend><TiUserOutline /></InputGroup.Prepend>
              <FormControl type = "email" className = "LSU" value = {lEmail} onChange = {event => setLEmail(event.target.value)} placeholder = "Email" />
            </InputGroup>
            <InputGroup className = "LSUgroup">
              <InputGroup.Prepend><IoMdKey /></InputGroup.Prepend>
              <FormControl type = "password" className = "LSU" value = {lPass} onChange = {event => setLPass(event.target.value)} placeholder = "Password" />
            </InputGroup>
            <div style = {{textAlign: "center"}}><Button type = "submit" variant = "dark" id = "LSUsubmit" disabled = {disableLogin}>Login</Button></div>
          </Form>
          <p style = {{textAlign: "center"}}>Don't have an account? <span style = {{color: "#FA6432", cursor: "pointer"}} onClick = {() => setSign(true)}>Sign Up</span></p>
        </div>
      :
        <div style = {{width: "80%", margin: "auto"}}>
          <h5 style = {{textAlign: "center"}}>Create an Account</h5>
          <Form onSubmit = {onCreate}>
            <InputGroup className = "LSUgroup">
              <InputGroup.Prepend><TiUserOutline /></InputGroup.Prepend>
              <FormControl className = "LSU" value = {sName} onChange = {event => setSName(event.target.value)} placeholder = "Name" />
            </InputGroup>
            <InputGroup className = "LSUgroup">
              <InputGroup.Prepend><FaSlackHash /></InputGroup.Prepend>
              <FormControl className = "LSU" pattern = "[0-9]{3}[A-Za-z]{2}[0-9]{4}" value = {sRoll} onChange = {event => setSRoll(event.target.value)} placeholder = "Roll No. (Ex. 119CS0XXX)" />
            </InputGroup>
            <InputGroup className = "LSUgroup">
              <InputGroup.Prepend><MdEmail /></InputGroup.Prepend>
              <FormControl type = "email" className = "LSU" value = {sEmail} onChange = {event => setSEmail(event.target.value)} placeholder = "Email" />
            </InputGroup>
            <InputGroup className = "LSUgroup">
              <InputGroup.Prepend><IoMdKey /></InputGroup.Prepend>
              <FormControl type = "password" className = "LSU" value = {sPass} onChange = {event => setSPass(event.target.value)} placeholder = "Password" />
            </InputGroup>
            <div style = {{textAlign: "center"}}><Button type = "submit" variant = "dark" id = "LSUsubmit" disabled = {disableSignUp}>Create</Button></div>
          </Form>
          <p style = {{textAlign: "center"}}>Already have an account? <span style = {{color: "#FA6432", cursor: "pointer"}} onClick = {() => setSign(false)}>Login</span></p>
        </div>
      }
      </IconContext.Provider>
      </Modal.Body>
    </Modal>
  )
}

export default NavBar

export { LSU }