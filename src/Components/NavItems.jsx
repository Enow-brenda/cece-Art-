import React from 'react'
import { useState ,useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import NavDropdown from 'react-bootstrap/NavDropdown';
import './style.css'


const NavItems = () => {
 
  const [activeId, setActiveId] = useState(null);
  const [login,setLogin] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Set the activeId based on the current location
    switch (location.pathname) {
      case '/':
        setActiveId(1);
        break;
      case '/about':
        setActiveId(2);
        break;
      case '/artworks':
        setActiveId(3);
        break;
      case '/contact':
        setActiveId(4);
        break;
      case '/cart':
        setActiveId(5);
        break;
      case '/event':
        setActiveId(6);
        break;
      case '/profile':
        setActiveId(7);
        break;
      default:
        setActiveId(null);
        break;
    }
  }, [location.pathname]);
  
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css';
    document.head.appendChild(link);
    return () => {
        document.head.removeChild(link);
      };
    }, []);

    function rgbColor(){
      var red=Math.floor(Math.random()*255)
      var green=Math.floor(Math.random()*255)
      var blue=Math.floor(Math.random()*255)
      return "RGB("+red+","+blue+","+green+")";
       
   }
  

  return (
    <Navbar  style={{width:'100%',padding:'15px 50px',background:'#4A148C'}} variant="dark" expand="lg" className="navbar-custom">
    <Container fluid>
      <b className='text-white' id="logo" style={{fontSize:'20px',fontFamily:''}}>Cece Royse 's Creation</b>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-2" style={{padding:'0px 50px'}}>
          <Nav.Link href="/"  className={activeId === 1 ? 'navactive' : 'text-white'} onClick={()=>handleClick(1)} >
          <i className="fas fa-home"></i> Home
          </Nav.Link>
          <Nav.Link href="/about"   className={activeId === 2 ? 'mx-1 navactive' : 'mx-1 text-white'} onClick={()=>handleClick(2)} >
          <i className="fas fa-person"></i> About Cece Royse
          </Nav.Link>
          <Nav.Link href="/artworks" className={activeId === 3 ? 'mx-1 navactive' : 'mx-1 text-white'} onClick={()=>handleClick(3)} >
          <i className="fas fa-palette"></i> Artworks
          </Nav.Link>
          <Nav.Link href="/contact" className={activeId === 4 ? 'mx-1 navactive' : 'mx-1 text-white'} onClick={()=>handleClick(4)} >
          <i className="fas fa-phone"></i> Contact
          </Nav.Link>
          <Nav.Link href="/cart" className={activeId === 5 ? 'mx-1 navactive' : 'mx-1 text-white'} onClick={()=>handleClick(5)} >
            <i className="fas fa-shopping-cart"></i> Cart
          </Nav.Link>
          <Nav.Link href="/event" className={activeId === 6 ? 'me-3 mx-1 navactive' : ' me-5 mx-1 text-white'} onClick={()=>handleClick(6)} >
            <i className="fas fa-bell"></i> Events
          </Nav.Link>
        
        </Nav>
        <Nav className='me-2'>
          {
            login ?
            <>
             <Nav.Link href="/profile" className={activeId === 7 ? 'text-white' : ''} onClick={()=>handleClick(7)} >
            <span style={{backgroundColor:rgbColor(),color:'white',padding:'10px 15px',borderRadius:'80%',marginRight:'5px'}}>E</span> Enow Brenda
            </Nav.Link>
            <Nav.Link href="/login"  >
            <i className="fas fa-sign-out-alt" style={{color:'white'}}></i>
            </Nav.Link>
            
            </>
           
          :
          <Nav.Link href="/login" className='text-white' style={{background:'rgb(233, 192, 13)',}}>
            Login / Register
        </Nav.Link>
          }
         
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

  )
}

export default NavItems