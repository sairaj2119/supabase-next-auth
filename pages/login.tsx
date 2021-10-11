import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import Image from 'next/image'
import Divider from '../components/Divider'

const Login = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {}

  return (
    <Container style={{ width: '35%' }}>
      <h1 className="my-4">Login</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <div className="gap-2 d-grid">
          <Button type="submit" variant="primary">
            Submit
          </Button>
          <Divider />
          <Button
            type="submit"
            variant="outline-dark"
            className="mt-3 d-flex align-items-center justify-content-center"
          >
            <Image src="/google.svg" width="20" height="20" alt="Google Logo" />
            <div className="mx-3">Login with Google</div>
          </Button>
        </div>
      </Form>
    </Container>
  )
}

export default Login
