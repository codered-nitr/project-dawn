import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form, Col, Button } from 'react-bootstrap'

import '../../css/apply.css'

const Apply = () => {
  const onSubmit = event => {
    console.log(event.currentTarget.elements["formGridFName"].value)
    event.preventDefault()
  }
  return(
    <div className="form-wrapper">
    <div className="w50">
      <Form onSubmit={onSubmit}>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridFName">
            <Form.Label>First Name</Form.Label>
            <Form.Control required type="text" placeholder="Enter first name" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridLName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Enter last name" />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridRollNo">
            <Form.Label>NITR Roll Number</Form.Label>
            <Form.Control required pattern="[0-9]{3}-/[A-Z]/i{2}-[0-9]{4}" type="text" placeholder="Enter roll number" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPhoneNo">
            <Form.Label> Contact Number</Form.Label>
            <Form.Control required type="tel" placeholder="Enter phone number" />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Check 
            type="switch"
            id="custom-switch"
            label="Do you have any prior Competetive Programming experience?"
            className = "check-box"
          />
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridWhyJoin">
            <Form.Label>Why do you want to join the club?</Form.Label>
            <Form.Control as="textarea" rows="4" placeholder="Answer..." />
          </Form.Group>
        </Form.Row>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check custom type="checkbox" label="I accept the terms and conditions." className = "check-box"/>
        </Form.Group>
        <Button type="submit" id="submit">Submit</Button>
      </Form>
    </div>
    </div>
  )
}

export default Apply