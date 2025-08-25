// App entry: renders a single product card with greeting
import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from './components/Img';
import Name from './components/Name';
import Description from './components/Description';
import Price from './components/Price';

function App() {
  // Simple friendly prompt to greet the user
  let userName = prompt("What is your name?")

  return (
    <>
      {/* Product card styled via .app-card in App.css */}
      <Card className="app-card mb-3">
        <Image style={{ height: "300px" }} />
        <Card.Body>
          <Card.Title><Name /></Card.Title>
          <Card.Text><Description /></Card.Text>
          {/* Primary CTA styled with .price-btn gradient */}
          <Button className="price-btn" variant="primary"><Price /></Button>
        </Card.Body>
      </Card>
      {/* Greeting row below the card */}
      <div className='d-flex align-items-center justify-content-center greeting'>
      {userName? <img src="https://www.clipartmax.com/png/middle/182-1828676_person-icons-person-icon.png" alt="person_icon" style={{height: "50px", width: "50px", borderRadius:"100%"}}/>: null}
      <h4>Hello {userName ? userName : "there!"}</h4>
      </div>
    </>
  )
}

export default App
