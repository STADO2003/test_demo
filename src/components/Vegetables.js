import React from 'react'
import { Container } from 'react-bootstrap'
import { Button,Card } from 'react-bootstrap'

export default function Vegetables() {
  return (
    <>
       <Container>
       <div>
      <Card style={{ width: '18rem' }}>
  
  <Card.Body>
    <Card.Title>Spinach</Card.Title>
    
    <Card.Text>
      Rs.20/kg
    </Card.Text>
    <Button variant="primary">Book</Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  
  <Card.Body>
    <Card.Title>Carrot</Card.Title>
    
    <Card.Text>
      Rs.30/kg
    </Card.Text>
    <Button variant="primary">Book</Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  
  <Card.Body>
    <Card.Title>Onion</Card.Title>
    <Card.Text>
      Rs.120/kg
    </Card.Text>
    <Button variant="primary">Book</Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  
  <Card.Body>
    <Card.Title>Apple</Card.Title>
    
    <Card.Text>
      Rs.160/kg
    </Card.Text>
    <Button variant="primary">Book</Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  
  <Card.Body>
    <Card.Title>Banana</Card.Title>
    
    <Card.Text>
      Rs.80/dozen
    </Card.Text>
    <Button variant="primary">Book</Button>
  </Card.Body>
</Card>
    </div>
       </Container>
    </>
  )
}
