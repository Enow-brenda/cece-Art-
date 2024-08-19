import React from 'react'
import  image from '../assets/images/bg-img/09.jpg'
import Card from 'react-bootstrap/Card';
import Sidebar from '../Components/sidebar'
import Pagination from 'react-bootstrap/Pagination';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import './profile.css'

const Myaccount = () => {
    let active = 1;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>,
    );
  }
const user={
    name:'Enow Brenda',
    password:'123',
    email:'enow@gmail.com',
    phone:'673456789',
    address:'street5'
}

  return (
   <div>
        
        <div className='row'>
          <div className='col-3'>
          <Sidebar/>
          </div>
            
            <div className='col-9' style={{marginLeft:''}}>
              <br></br>
              
              <div className=''>
                <h2 style={{textAlign:'left',color:'rgb(233, 192, 13)'}}>Account Settings</h2>
                <hr style={{border:'#4A148C solid 2px'}}/>
                <div className='row'>
                    <div className='col-6'> 
                        <h4>Personal Details</h4>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Customer Name</Form.Label>
                                <Form.Control type="text" value={user.name} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" value={user.email}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="text" value={user.address} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control type="text" value={user.phone} />
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <button style={{background:'#4A148C',color:'white'}}>Update</button>
                            </Form.Group>
                        
                        </Form>
                        </div>
                    <div className='col-6'><h4>Change Password</h4>
                    <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Old Password</Form.Label>
                                <Form.Control type="password"  />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>New Password</Form.Label>
                                <Form.Control type="password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Confirm New Password</Form.Label>
                                <Form.Control type="password" />
                            </Form.Group>
                            <Form.Group className="mb-3" >
                            <button style={{background:'#4A148C',color:'white'}}>Change Password</button>
                            </Form.Group>
                        
                        </Form></div>
                </div>
               
                
              
              </div>
            </div>
        </div>
    
   </div>
   
  )
}

export default Myaccount