import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form, Col, Button } from 'react-bootstrap'

import './apply.css'

const Apply = () => {
  const onSubmit = event => {
    console.log(event.currentTarget.elements["formGridFName"].value)
    event.preventDefault()
  }
  return(
    <div className="w50">
      <Form onSubmit = {onSubmit}>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridFName">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="Enter first name" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridLName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Enter last name" />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridRollNo">
            <Form.Label>NITR Roll Number</Form.Label>
            <Form.Control type="text" placeholder="Enter roll number" />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridWhyJoin">
            <Form.Label>Why do you want to join the club?</Form.Label>
            <Form.Control type="text" placeholder="Answer..." />
          </Form.Group>
        </Form.Row>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  )
}

export default Apply