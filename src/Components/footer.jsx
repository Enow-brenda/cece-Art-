import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Logo from '../assets/images/png/logo-no-background.png';


const Footer = () => {
  return (
    <footer className="footer mt-5 pt-4 " style={{background:'#000'}}>
      <Container>
        <Row>
          <Col md={3}>
          <h4 className='text-white'><span style={{color:'rgb(233, 192, 13)'}}>Contact</span> Me</h4>
            <p>123 Art Street</p>
            <p>Yaounde, Cameroon</p>
            <p>Phone:  +237 656 789 990</p>
            <p>Email: info@ceceroyse.com</p>
          </Col>
          <Col md={3}>
          <h4 className='text-white'><span style={{color:'rgb(233, 192, 13)'}}>Quick</span> Links</h4>
            <ul className="list-unstyled links">
              <li><a style={{color:'#495057'}} href="/">Home</a></li>
              <li><a style={{color:'#495057'}} href="/about">About Us</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/faq">FAQ</a></li>
              <li><a href="/terms">Terms & Conditions</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
            </ul>
          </Col>
          <Col md={3}>
          <h4 className='text-white'><span style={{color:'rgb(233, 192, 13)'}}>Follow</span> Me</h4>
            <div className="social-icon">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            </div>
          </Col>
          <Col md={3}>
            <img src={Logo}
            />
          </Col>
        </Row>
        <Row>
          <Col className="text-center py-3">
            <p className='text-white'>&copy; {new Date().getFullYear()} Cece Royse 's Creation. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
