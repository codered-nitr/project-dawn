import React from 'react'
import '../../css/home.css'
import { Card, Button, Container, Row, Col } from 'react-bootstrap'
const About = () => {
  return(
    <Container>
      <Row className = "justify-content-md-center bottomPadding topPadding">
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={require('../../img/cp.png')} />
            <Card.Body>
              <Card.Title>What are we here for?</Card.Title>
              <Card.Text>
                We aim at honing the sport of Competitive Programming and revitalizing the coding culture at NIT Rourkela.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={require('../../img/why-another.png')} />
            <Card.Body>
              <Card.Text>
                Of course, there are some well established coding clubs at NITR, but we felt the need for something different, something unique.
                A club that encourages participation from every member and strictly disregards inactivity.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">P.S. No disrespect meant towards any club</small>
            </Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={require('../../img/busting.png')} />
            <Card.Body>
              <Card.Text>
              A common myth is that programming is only for the smartest people. No. 
              Anyone can code. Need any guidance or help? We are here for you, irrespective of whether you are a member or not.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className = "justify-content-md-center bottomPadding">
        <Col>
          <Card border = "warning" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={require('../../img/discussion.png')} />
            <Card.Header>Achieving our goals: Weekly discussions</Card.Header>
            <Card.Body>
              <Card.Text>
                Practice on your own. Discuss problems or concepts during weekly meets
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col></Col>
        <Col>
          <Card border = "warning" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={require('../../img/leaderboard.png')} />
            <Card.Header>Achieving our goals: Monthly Online Contests</Card.Header>
            <Card.Body>
              <Card.Text>
                Being able to solve all the questions is not the aim, learning the underlying concepts is.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className = "justify-content-md-center bottomPadding">
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={require('../../img/workshop.png')} />
            <Card.Header>Achieving our goals: Open to all workshops</Card.Header>
            <Card.Body>
              <Card.Text>
                At least one workshop every semester, with hands-on practice sessions, to spread awareness and to get newcomers started in the sport of competitive programming.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col></Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={require('../../img/passion.png')} />
            <Card.Header>Achieving our goals: Passion</Card.Header>
            <Card.Body>
              <Card.Text>
                If you are passionate about it, nothing can stop you from achieving it.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default About