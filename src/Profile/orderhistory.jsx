import React from 'react'
import  image from '../assets/images/bg-img/09.jpg'
import Card from 'react-bootstrap/Card';
import Sidebar from '../Components/sidebar'
import Pagination from 'react-bootstrap/Pagination';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './profile.css'
import { useState } from 'react';

const Orderhistory = () => {
    const products=[
        {
          title:'product 1',
          category:'decoration',
          image:'../assets/images/icon/download.jfif',
          rating:2.6,
          price:2500,
          quantity:3,
          deliveryFee:300
    
        },
        {
          title: 'product 2',
          category: 'painting',
          image: '../assets/images/icon/painting1.jfif',
          rating: 4.8,
          price: 4500,
          quantity:3,
          deliveryFee:300
        },
        {
          title: 'product 3',
          category: 'sculpture',
          image: '../assets/images/icon/sculpture1.jfif',
          rating: 4.7,
          price: 8000,
          quantity:3,
          deliveryFee:300
        },
        {
          title: 'product 4',
          category: 'jewelry',
          image: '../assets/images/icon/jewelry1.jfif',
          rating: 4.5,
          price: 3000 ,
          quantity:3,
          deliveryFee:300
        },
        {
          title: 'product 5',
          category: 'decoration',
          image: '../assets/images/icon/decoration2.jfif',
          rating: 4.9,
          price: 2000 ,
          quantity:3,
          deliveryFee:300
        }
      ]
const [showView, setShowView] = useState(false);
const [showEdit, setShowEdit] = useState(false);
const [showDelete, setShowDelete] = useState(false);

const handleClose1 = () => setShowView(false);
const handleClose2 = () => setShowEdit(false);
const handleClose3 = () => setShowDelete(false);

const handleShowView = () => setShowView(true);
const handleShowEdit = () => setShowEdit(true);
const handleShowDelete = () => setShowDelete(true);
  let active = 1;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>,
    );
  }
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
            
            <div className='col-9' style={{marginLeft:''}}>
              <br></br>
              
              <div className=''>
                <h2 style={{textAlign:'left',color:'rgb(233, 192, 13)'}}>My Orders History</h2>

                <div className='container mb-2 pt-2 d-flex' style={{justifyContent:'space-between',alignItems:'center'}}>
          <p>Showing 1-8 of 139 Results</p>
            <div className='d-flex' style={{width:'50%'}}>
            <input type="text"  placeholder="Search" style={{background:"#e0e0e0"}}/>
        <   button><i className='fas fa-search'></i></button>
      </div>

    </div>
    <Table responsive="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Order Status</th>
            <th>Order Date</th>
            <th>Items No</th>
            <th>Total Price</th>
            <th></th>
            
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
            <td>
                <button  className="me-2" onClick={handleShowView}><i className='fa fa-eye mx-2'></i></button>
                <button className="me-2" onClick={handleShowEdit}><i className='fa fa-pen mx-2'></i></button>
                <button className="me-2" onClick={handleShowDelete}><i className='fa fa-trash mx-2'></i></button>
            </td>
          
          </tr>
        ))}
        </tbody>
      </Table>
              </div>
              <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}> 
              
              <Pagination>{items}</Pagination>
              </div>
              
            </div>
        </div>
        <Modal  show={showView} onHide={handleClose1}>
            <Modal.Header closeButton>
                <Modal.Title>Order Details</Modal.Title>
            </Modal.Header>
                <Modal.Body>
                    <div className='orders d-flex' style={{justifyContent:'space-between'}}>
                        <div>
                            <h6>Order Number</h6>
                            <p>ORD2345</p>
                        </div>
                        <div>
                            <h6>Order Status</h6>
                            <p>Completed</p>
                        </div>
                        <div>
                            <h6>Order Date</h6>
                            <p>27th may 2023</p>
                        </div>
                    </div>
                    <div className='orders d-flex' style={{justifyContent:'space-between'}}>
                        <div>
                            <h6>Payment Method</h6>
                            <p>ORD2345</p>
                        </div>
                        <div>
                            <h6>Total Price</h6>
                            <p>3000 XAF</p>
                        </div>
                        <div>
                            <h6>Payment Status</h6>
                            <p>On delivery</p>
                        </div>
                 
                    </div>
                    <table class="table table-bordered-rows" style={{width:'100%'}}>
                            <tr>
                                
                                <th style={{width:'30%'}}>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Sub Total</th>
                                <th>Delivery Fee</th>
                            </tr>
                            {products.map((product, index) => (
                            <tr>
                                
                                <td> 
                                    {product.title}
                                </td>
                                <td>{product.price} </td>
                                <td>
                                   {product.quantity}
                                </td>
                                <td>
                                {product.price * product.quantity} 
                                </td>
                                <td>{product.deliveryFee} </td>
                            </tr>
                           
              ))} 
            </table>
            <hr></hr>
            <div className='orders d-flex' style={{justifyContent:'space-between'}}>
                <h6>Total :</h6>
                <h4>3000 XAF</h4>
            </div>
           
                </Modal.Body>
            <Modal.Footer>
           
            <Button variant="primary" onClick={handleClose1}>
                Download Receipt
            </Button>
          
            </Modal.Footer>
      </Modal>
      <Modal show={showEdit} onHide={handleClose2}  size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Edit Order History</Modal.Title>
            </Modal.Header>
                <Modal.Body>
                    <h6>Quantity Update</h6>
                    <div className='row'>
                    {products.map((product, index) => (
                        <div className=' col-3 ' >
                            {product.title}<input type="number" value={product.quantity}/>
                        </div>
                    ))}
                    </div>
                <Table responsive="sm">
        <thead>
          <tr>
          <th></th>
          <th style={{width:'30%'}}>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Sub Total</th>
            <th>Delivery Fee</th>
            <th></th>
            
          </tr>
          
        </thead>
        <tbody>
        {products.map((product, index) => (
                            <tr>
                                <td><b style={{color:'red'}}>X </b></td>
                                <td> 
                                    {product.title}
                                </td>
                                <td>{product.price} </td>
                                <td>
                                   {product.quantity}
                                </td>
                                <td>
                                {product.price * product.quantity} 
                                </td>
                                <td>{product.deliveryFee} </td>
                                <td></td>
                            </tr>
                           
              ))}         </tbody>
      </Table> 
                </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose2}>
                Close
            </Button>
            <Button variant="primary" onClick={handleClose2}>
                Save Changes
            </Button>
            </Modal.Footer>
      </Modal>
      <Modal show={showDelete} onHide={handleClose3}>
            <Modal.Header closeButton>
                <Modal.Title>Confirm Delete</Modal.Title>
            </Modal.Header>
                <Modal.Body>Are you sure you want to delete this?</Modal.Body>
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

export default Orderhistory