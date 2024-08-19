import React from 'react'
import  image from '../assets/images/bg-img/09.jpg'
import Card from 'react-bootstrap/Card';
import Sidebar from '../Components/sidebar'
import Table from 'react-bootstrap/Table';
import './profile.css'

const profile = () => {
  const orders=[
    {
        orderStatus: "Delivered",
        orderDate: "2024-07-15",
        itemsNo: 3,
        totalPrice: 45.50
    },
    {
        orderStatus: "Pending",
        orderDate: "2024-07-16",
        itemsNo: 5,
        totalPrice: 75.00
    },
    {
        orderStatus: "Shipped",
        orderDate: "2024-07-17",
        itemsNo: 2,
        totalPrice: 30.00
    },
    {
        orderStatus: "Cancelled",
        orderDate: "2024-07-18",
        itemsNo: 1,
        totalPrice: 15.00
    },
    {
        orderStatus: "Processing",
        orderDate: "2024-07-19",
        itemsNo: 4,
        totalPrice: 60.00
    }
]

  return (
   <div>
        
        <div className='row'>
          <div className='col-3'>
          <Sidebar/>
          </div>
            
            <div className='col-9'>
              <br></br>
              <h2 style={{textAlign:'left',color:'rgb(233, 192, 13)'}}>My Dashboard</h2>
              
              <hr style={{border:'#4A148C solid 2px'}}/>
              <h3>Welcome Back Enow Brenda</h3>
              <div className='d-flex gap-4'>
              <Card style={{ width: '18rem' ,background:'#4A148C ',color:'white'}}>
              <Card.Body>
              <Card.Title style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                  <p style={{fontSize:'30px'}}className='text-white'>My Reviews</p>
                  <p style={{background:'white',padding:'5px 10px',borderRadius:'50px'}}>4</p>
                </Card.Title>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem',background:'#4A148C ',color:'white' }}>
              <Card.Body>
                <Card.Title style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                  <p style={{fontSize:'30px'}}className='text-white'>Notifications</p>
                  <p style={{background:'white',padding:'5px 10px',borderRadius:'50px'}}>4</p>
                </Card.Title>
               
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem' ,background:'#4A148C ',color:'white'}}>
              <Card.Body>
                <Card.Title style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                  <p style={{fontSize:'30px'}} className='text-white'>My Orders</p>
                  <p style={{background:'white',padding:'5px 10px',borderRadius:'50px'}}>4</p>
                </Card.Title>
               
              </Card.Body>
            </Card>
            
              </div>
              <br></br>
              <div className=''>
                <h2 style={{textAlign:'left',color:'rgb(233, 192, 13)'}}>My Latest Orders</h2>
                <hr style={{border:'#4A148C solid 2px'}}/>
                <Table responsive="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Order Status</th>
            <th>Order Date</th>
            <th>Items No</th>
            <th>Total Price</th>
          
            
          </tr>
        </thead>
        <tbody>
        {orders.map((order, index) => (
          <tr>
            <td>{index+1}</td>
            <td>{order.orderStatus}</td>
            <td>{order.orderDate}</td>
            <td>{order.itemsNo}</td>
            <td>{order.totalPrice} XAF</td>
            
          
          </tr>
        ))}
        </tbody>
      </Table>
              </div>

            </div>
        </div>
    
   </div>
   
  )
}

export default profile