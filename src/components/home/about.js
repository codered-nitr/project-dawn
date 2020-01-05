import React, { Component } from 'react'
import '../../css/home.css'
import { Card, Container, Row, Col, Carousel } from 'react-bootstrap'

const cards = [
  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={require('../../img/cp.png')} />
  <Card.Body>
    <Card.Title>What are we here for?</Card.Title>
    <Card.Text>
      We aim at honing the sport of Competitive Programming and revitalizing the coding culture at NIT Rourkela.
    </Card.Text>
  </Card.Body>
  </Card>,
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
  </Card>,
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={require('../../img/busting.png')} />
    <Card.Body>
      <Card.Text>
      A common myth is that programming is only for the smartest people. No. 
      Anyone can code. Need any guidance or help? We are here for you, irrespective of whether you are a member or not.
      </Card.Text>
    </Card.Body>
  </Card>,
  <Card border = "warning" style={{ width: '18rem' }}>
    <Card.Img variant="top" src={require('../../img/discussion.png')} />
    <Card.Header>Achieving our goals: Weekly discussions</Card.Header>
    <Card.Body>
      <Card.Text>
        Practice on your own. Discuss problems or concepts during weekly meets
      </Card.Text>
    </Card.Body>
  </Card>,
  <Card border = "warning" style={{ width: '18rem' }}>
    <Card.Img variant="top" src={require('../../img/workshop.png')} />
    <Card.Header>Achieving our goals: Open to all workshops</Card.Header>
    <Card.Body>
      <Card.Text>
        At least one workshop every semester, with hands-on practice sessions, to spread awareness and to get newcomers started in the sport of competitive programming.
      </Card.Text>
    </Card.Body>
  </Card>,
  <Card border = "warning" style={{ width: '18rem' }}>
    <Card.Img variant="top" src={require('../../img/leaderboard.png')} />
    <Card.Header>Achieving our goals: Monthly Online Contests</Card.Header>
    <Card.Body>
      <Card.Text>
        Being able to solve all the questions is not the aim, learning the underlying concepts is.
      </Card.Text>
    </Card.Body>
  </Card>,
  <Card border = "warning" style={{ width: '18rem' }}>
    <Card.Img variant="top" src={require('../../img/passion.png')} />
    <Card.Header>Achieving our goals: Passion</Card.Header>
    <Card.Body>
      <Card.Text>
        If you are passionate about it, nothing can stop you from achieving it.
      </Card.Text>
    </Card.Body>
  </Card>
]

class About extends Component {
  constructor(props) {
    super(props);
    this.state = { wReset: 2 }
  }

  componentDidMount(){
    window.addEventListener("resize", this.resize)
    this.resize()
  }

  resize = () => {
    let currentRState = (window.innerWidth <= 770) ? 0 : (window.innerWidth < 1200) ? 1 : 2
    if(currentRState !== this.state.wReset)
      this.setState({wReset: currentRState})
  }

  render() {
    console.log(this.state.wReset)
    return(
      <div>
        {this.state.wReset == 2 ?
          <Container>
            <Row noGutters className = "justify-content-md-center bottomPadding topPadding">
              <Col>{cards[0]}</Col>
              <Col>{cards[1]}</Col>
              <Col>{cards[2]}</Col>
            </Row>
            <Row noGutters className = "justify-content-md-center bottomPadding">
              <Col>{cards[3]}</Col>
              <Col>{cards[4]}</Col>
              <Col>{cards[5]}</Col>
            </Row>
            <Row noGutters className = "justify-content-md-center bottomPadding">
              <Col></Col>
              <Col>{cards[6]}</Col>
              <Col></Col>
            </Row>
          </Container>
          : this.state.wReset == 1 ?
          <Container>
            <Row className = "justify-content-md-center bottomPadding topPadding">
              <div className = "colcen"><Col>{cards[0]}</Col></div>
              <div className = "colcen"><Col>{cards[1]}</Col></div>
            </Row>
            <Row className = "justify-content-md-center bottomPadding">
              <div className = "colcen"><Col>{cards[2]}</Col></div>
              <div className = "colcen"><Col>{cards[3]}</Col></div>
            </Row>
            <Row className = "justify-content-md-center bottomPadding">
              <div className = "colcen"><Col>{cards[4]}</Col></div>
              <div className = "colcen"><Col>{cards[5]}</Col></div>
            </Row>
            <Row className = "justify-content-md-center bottomPadding">
              <div className = "colcen"><Col>{cards[6]}</Col></div>
            </Row>
          </Container>
          :
          <div className = "ctr about topPadding">
            <Carousel fade interval = {4000}>
              {cards.map(card => (
                <Carousel.Item>
                  <div className = "colcen"><Col>{card}</Col></div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        }
      </div>
    )
  }
}

export default About