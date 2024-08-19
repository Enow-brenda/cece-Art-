import React,{useState} from 'react'
import  image from '../assets/images/bg-img/09.jpg'
import Card from 'react-bootstrap/Card';
import Sidebar from '../Components/sidebar'
import Pagination from 'react-bootstrap/Pagination';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './profile.css'

const Notification2 = () => {
const [showDelete, setShowDelete] = useState(false);

const handleClose3 = () => setShowDelete(false);

const handleShowDelete = () => setShowDelete(true);
    const [activeId3,setActiveId3]=useState(0)
    let active = 1;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>,
    );
  }
const messages=[{
  subject:'Custom Request Art Accepted',
  message:'We have the honor to tell you that we accept to do your custom art but at a price of 5000 XAF',
  date:'23/02/2024',

},
{
    subject: "Custom Request Art Accepted",
    message: "We have the honor to tell you that we accept to do your custom art but at a price of 5000 XAF",
    date: "22/01/2024"
},
{
    subject: "Order Shipped",
    message: "Your order has been shipped and is on its way. Expected delivery date is 2024-08-10.",
    date: "21/02/2024"
},
{
    subject: "Payment Confirmation",
    message: "We have received your payment of 10000 XAF for the custom art piece. Thank you for your purchase!",
    date: "03/12/2023"
}]

  return (
   <div>
        
        <div className='row'>
          <div className='col-3'>
          <Sidebar/>
          </div>
            
            <div className='col-9' style={{marginLeft:''}}>
              <br></br>
              
              <div className=''>
                <h2 style={{textAlign:'left',color:'rgb(233, 192, 13)'}}>Notifications</h2>
                <hr style={{border:'#4A148C solid 2px'}}/>
                <div className='categories mb-2'>
       
          <div>
          
            <button key={0} onClick={()=>setActiveId3(0)} className={activeId3==0?'activecat':''} style={{borderRadius:'5px',margin:'5px'}}>Received</button>
            <button key={0} onClick={()=>setActiveId3(1)} className={activeId3==1?'activecat':''} style={{borderRadius:'5px',margin:'5px'}}>Sent</button>
            <button onClick={handleShowDelete} style={{float:'right'}}><i className='fa fa-trash'></i></button>
          </div>
    </div>
    <Table responsive="sm">
        <thead>
          <tr>
            <th><input type="checkbox"/></th>
            <th>#</th>
            <th>Subject</th>
            <th style={{width:'50%'}}>Description</th>
            <th>Date/Time</th>
            
          </tr>
        </thead>
        <tbody>
        {messages.map((message, index) => (
          <tr>
            <td><input type="checkbox"/></td>
            <td>{index+1}</td>
            <td>{message.subject}</td>
            <td>{message.message}</td>
            <td>{message.date}</td>
          
        
          
          </tr>
        ))}
        </tbody>
      </Table>
              </div>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'10px 5%'}}> 
              <p>Showing 1-50 of 139 Results</p>
              <Pagination>{items}</Pagination>
              </div>
            </div>
        </div>
        <Modal show={showDelete} onHide={handleClose3}>
            <Modal.Header closeButton>
                <Modal.Title>Confirm Delete</Modal.Title>
            </Modal.Header>
                <Modal.Body>Are you sure you want to delete 5 items?</Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose3}>
                Cancel
            </Button>
            <Button variant="primary" onClick={handleClose3}>
                Confirm
            </Button>
            </Modal.Footer>
      </Modal>
    
   </div>
   
  )
}

export default Notification2