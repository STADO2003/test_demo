import React from 'react'
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

export default function Login() {
  return (
    <>
    
    <Container>
    <div className="jumbotron jumbotron-fluid">
  <div className="container">
    <h1 className="display-4">Welcome to Login section</h1>
    
  </div>
</div>
    <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>User id</Form.Label>
    <Form.Control type="string" placeholder="Enter user id" />
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Log In
  </Button>
</Form>
    </Container>
    </>
  )
}
