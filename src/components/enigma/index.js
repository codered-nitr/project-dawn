import React from 'react'
import { Container, Image, Row, Col, Jumbotron, Button } from 'react-bootstrap'
import '../../css/enigma.css'

const Enigma = () => {
  return(
    <div>
      <Container>
        <Image style = {{marginTop: "-10px"}} src = {require('../../img/enigma.png')} />
        <div className = "bottomPadding">
          <Jumbotron className = "black-back">
            <h1 className = "spl">Aim</h1>
            <p>Even if NIT Rourkela is considered one of the premier engineering institutions in India, its scholars fail to prove their mettle
              in the fastest growing engineering major, i.e. Computer Science and Engineering. In the list of universities having the best coders
              in the world as documented by <a style = {{color: "#FA6432", textDecorationLine: "none"}} href = "https://blog.hackerrank.com/which-universities-have-the-best-student-developers/">HackerRank</a>, it is glorious to find more than 20 Indian institutions in the Top 50, however, at the
              same time, it is quite disheartening to see NIT Rourkela completely missing out. We aim to help and encourage more and more young
              minds to dive deep into the world of coding so that we can soon find NIT Rourkela leading in this sector as well.
            </p>
            <p className = "spl" style = {{fontSize: "1.25rem"}}>A workshop series to kickstart your competitive programming journey!</p>
          </Jumbotron>
          <iframe name="ifrm" id="ifrm" style={{paddingLeft: "5.75%", paddingRight: "5.75%", width: "100%", height: "400px", objectFit: "contain", overflow: "hidden", position: "relative", border: "2px solid #FA3264", borderRadius: "10px"}} src={require('../../img/univ.png')} scrolling="yes" allowTransparency="true" frameBorder = {0} ></iframe>
        </div>
        <div className = "bottomPadding">
          <Jumbotron className = "black-back">
            <h1 className = "spl">Why NIT Rourkela is not in Top 50?</h1>
          </Jumbotron>
          <Image src = {require('../../img/peeps.png')} />
        </div>
        <div className = "bottomPadding">
          <Jumbotron className = "black-back">
            <h1 className = "spl">Topics to be covered</h1>
          </Jumbotron>
          <Row>
            <Col><Image src = {require('../../img/topics.png')}/></Col>
            <Col>
              <Jumbotron className = "black-back jfy">
                <ul>
                  <li>Time and Space complexity</li>
                  <li>Searching and Sorting</li>
                  <li>Bit manipulation</li>
                  <li>Recursion and backtracking</li>
                  <li>Greedy and Dynamic programming</li>
                  <li>Hashing</li>
                  <li>And more...</li>
                </ul>
              </Jumbotron>
            </Col>
          </Row>
        </div>
        <div className = "center">
          <a href="https://bit.ly/enigmanitr" target="_blank"><Button variant="primary">Register Now!</Button></a>
        </div>
      </Container>
    </div>
  )
}

export default Enigma