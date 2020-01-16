import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Image, Container, Card } from 'react-bootstrap'
import { isMobile } from 'react-device-detect'

import '../../css/apply.css'

const Apply = () => {
  return(
    <div>
      <div className = "bottomPadding" style = {{marginLeft: "auto", marginRight: "auto", maxWidth: "1000px"}}><Image src = {require('../../img/member.png')} /></div>
      {(isMobile)?
        <div>
          <Card style = {{width: "18rem", marginBottom: "10px", textAlign: "center"}}>
            <Card.Img variant = "top" src = {require('../../img/hello there.png')} />
            <Card.Title>Interested in joining the club?</Card.Title>
            <Card.Body>Being a club focussed on the sport of Competitive Programming, we are looking for passionate people. 
              Have a look around to see if you fit in!
            </Card.Body>
          </Card>
          <Card style = {{width: "18rem", marginBottom: "10px", textAlign: "center"}}>
            <Card.Img variant = "top" src = {require('../../img/plan.png')} />
            <Card.Title>Programming and Deduction skills</Card.Title>
            <Card.Body>Competitive Programming is the perfect blend of using various data structures and algorithms with peculiar paradigms to solve problems.
                Hence, we are looking for members with strong understanding of the above.
            </Card.Body>
          </Card>
          <Card style = {{width: "18rem", marginBottom: "10px", textAlign: "center"}}>
            <Card.Img variant = "top" src = {require('../../img/implementation.png')} />
            <Card.Title>Feeling unsure?</Card.Title>
            <Card.Body>Attend Enigma, a month long workshop series, where we provide training on various data structures and algorithms to get a kickstart.</Card.Body>
          </Card>
          <Card style = {{width: "18rem", marginBottom: "10px", textAlign: "center"}}>
            <Card.Img variant = "top" src = {require('../../img/ready.png')} />
            <Card.Title>Ready to join?</Card.Title>
            <Card.Body>We would be glad to have you!
                Fill up the form below and wait for the next induction test. You will receive a mail about the test details later.
            </Card.Body>
          </Card>
        </div>
      :  
        <div>
          <Container data-aos = "fade-up">
            <div style = {{borderRadius: "5px", width: "80%", height: "max-content", marginLeft: "auto", marginRight: "0", marginBottom: "10px", backgroundColor: "whitesmoke", display: "flex"}}>
              <div style = {{display: "inline-block", width: "50%", width: "max-content"}}><Image style = {{maxHeight: "20rem"}} src = {require('../../img/hello there.png')}/></div>
              <div style = {{display: "inline-block", width: "50%", fontSize: "15px", marginTop: "auto", marginBottom: "auto"}}>
                <h4>Interested in joining the club?</h4>
                <p>Being a club focussed on the sport of Competitive Programming, we are looking for passionate people.</p>
                <p>Have a look around to see if you fit in!</p>
              </div>
            </div>
            <div style = {{borderRadius: "5px", width: "80%", height: "max-content", marginLeft: "0", marginRight: "auto", marginBottom: "10px", backgroundColor: "whitesmoke", display: "flex"}}>
              <div style = {{display: "inline-block", width: "50%", width: "max-content"}}><Image style = {{maxHeight: "20rem"}} src = {require('../../img/plan.png')}/></div>
              <div style = {{display: "inline-block", width: "50%", fontSize: "15px", marginTop: "auto", marginBottom: "auto"}}>
                <h4>Programming and Deduction skills</h4>
                <p>Competitive Programming is the perfect blend of using various data structures and algorithms with peculiar paradigms to solve problems.</p>
                <p>Hence, we are looking for members with strong understanding of the above.</p>
              </div>
            </div>
            <div style = {{borderRadius: "5px", width: "80%", height: "max-content", marginLeft: "auto", marginRight: "0", marginBottom: "10px", backgroundColor: "whitesmoke", display: "flex"}}>
              <div style = {{display: "inline-block", width: "50%", width: "max-content"}}><Image style = {{maxHeight: "20rem"}} src = {require('../../img/implementation.png')}/></div>
              <div style = {{display: "inline-block", width: "50%", fontSize: "15px", marginTop: "auto", marginBottom: "auto"}}>
                <h4>Feeling unsure?</h4>
                <p>Attend Enigma, a month long workshop series, where we provide training on various data structures and algorithms to get a kickstart.</p>
                <a href = "/enigma"><Button variant = "dark">Enigma</Button></a>
              </div>
            </div>
            <div style = {{borderRadius: "5px", width: "80%", height: "max-content", marginLeft: "0", marginRight: "auto", marginBottom: "10px", backgroundColor: "whitesmoke", display: "flex"}}>
              <div style = {{display: "inline-block", width: "50%", width: "max-content"}}><Image style = {{maxHeight: "20rem"}} src = {require('../../img/ready.png')}/></div>
              <div style = {{display: "inline-block", width: "50%", fontSize: "15px", marginTop: "auto", marginBottom: "auto"}}>
                <h4>Ready to join?</h4>
                <p>We would be glad to have you!</p>
                <p>Fill up the form below and wait for the next induction test. You will receive a mail about the test details later.</p>
              </div>
            </div>
          </Container>
        </div>}
      <div className = "center" style = {{color: "#FA6432"}}><h4>***Online applications will be live after Enigma 1.0 is over!***</h4></div>
    </div>
  )
}

export default Apply