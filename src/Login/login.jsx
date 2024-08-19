import React, { useEffect, useState } from 'react'
import { BrowserRouter,Routes, Route} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/png/logo-no-background.png'
import './style.css';

function Login(){
    const [view, setView] = useState(true); // Initially set to true

    const togglePosition = () => {
      setView(!view);
    };

    useEffect(() => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css';
        document.head.appendChild(link);
        return () => {
            document.head.removeChild(link);
          };
        }, []);
    return (
       <div className='content justify-content-center align-items-center d-flex shadow-lg mt-4' id="content">
        {/*Registration form*/}
            <div className='col-md d-flex justify-content-center'>
                <div className='header-text mb-4'>
                    <h2 style={{color:'#4A148C'}}>Create Account</h2>
                    <div class="social-icons">
                    <a href="#" class="icon"><i class="fa-brands fa-google-plus-g"></i></a>
                    <a href="#" class="icon"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="#" class="icon"><i class="fa-brands fa-github"></i></a>
                    <a href="#" class="icon"><i class="fa-brands fa-linkedin-in"></i></a>
                </div>
                <span style={{ display: 'block', textAlign: 'center' }}>or use your email for registration</span>
                    <Form>
                         <Form.Group className="mb-2" controlId="formBasicEmail">
                            <Form.Label>Customer Name</Form.Label>
                            <Form.Control type="email" />
                        </Form.Group> 
                    
                        <Form.Group className="mb-2" controlId="formBasicEmail">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" />
                        </Form.Group> 
                        <Form.Group className="mb-2" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" />
                        </Form.Group> 
                        <Form.Group className="mb-2" controlId="formBasicPassword">
                            <Form.Label>Confirm  Password</Form.Label>
                            <Form.Control type="password" />
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="formBasicPassword">
                            
                            <Form.Control type="hidden" value="USER"/>
                        </Form.Group>

                        
                        
                        <Form.Group className="mb-2" controlId="formBasicButton" >
                            <Form.Control type="submit" style={{
                                    backgroundColor: '#4A148C', // Replace with your desired color
                                    color: '#FFFFFF', // Text color
                                    padding: '10px 20px',
                                    border: 'none',
                                    borderRadius: '5px',
                                
                                }} className='mainButton' value="Register" />
                        </Form.Group> 
                        
                    </Form>
                    
                </div>
            </div>
            {/*Sign in */}
            <div className='col-md d-flex justify-content-center'>
                <div className='header-text mb-4'>
                    <h2 style={{color:'#4A148C'}}>Log In</h2>
                    <div class="social-icons">
                    <a href="#" class="icon"><i class="fa-brands fa-google-plus-g"></i></a>
                    <a href="#" class="icon"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="#" class="icon"><i class="fa-brands fa-github"></i></a>
                    <a href="#" class="icon"><i class="fa-brands fa-linkedin-in"></i></a>
                </div>
                <span style={{ display: 'block', textAlign: 'center' }}>or use your email for Signing in</span>
                    <Form>
                    <Form.Group className="mb-2" controlId="formBasicEmail">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" />
                        </Form.Group> 
                        <Form.Group className="mb-2" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" />
                        </Form.Group> 
    
                        <Link to="/forgotpassword" style={{ display: 'block', textAlign: 'center' ,color:'#4A148C'}}>Forgot Password?</Link>
                        
                        
                        <Form.Group className="mb-2" controlId="formBasicButton" >
                            <Form.Control type="submit" style={{
                                    backgroundColor: '#4A148C', // Replace with your desired color
                                    color: '#FFFFFF', // Text color
                                    padding: '10px 20px',
                                    border: 'none',
                                    borderRadius: '5px',
                                
                                }} className='mainButton' value="Login" />
                        </Form.Group> 
                        
                    </Form>
                    
                </div>
            </div>
            
            <div className='col-md d-flex justify-content-center align-items-center p-4' style={{position:'absolute',background:'#4A148C', zIndex: '2',width:'50%',height:'100%',left: view ? '0' : '50%',borderRadius:'20px',flexDirection:'column',transition:'left 0.5s'}}>
                {
                    view ?  
                     <> 
                     <img src={Logo} width="170" alt="logo"/>
                     <h2 style={{color:'white'}}>Join Us Today</h2>
                    <p style={{color:'white'}} className='text-center'>Create an account to explore Cece Royse's art, save your favorites, and enjoy exclusive offers</p>
                    <Button onClick={togglePosition} style={{width:'50%',borderRadius:'0',background:'none',border:'2px white solid'}} >Register</Button>
                    </>            
                    :
                    <> 
                    <img src={Logo} width="170" alt="logo"/>
                    <h2 style={{color:'white'}}>Welcome Back</h2>
                   <p style={{color:'white'}} className='text-center'>Sign in to access your personal gallery, track orders, and stay updated on new releases</p>
                   <Button onClick={togglePosition} style={{width:'50%',borderRadius:'0',background:'none',border:'2px white solid'}} >Log In</Button>
                   </>  
                }
 
            </div>
            
       </div>
     )
}

export default Login