import React,{useState} from 'react'
import  image from '../assets/images/bg-img/09.jpg'
import Card from 'react-bootstrap/Card';
import Sidebar from '../Components/sidebar'
import Pagination from 'react-bootstrap/Pagination';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import  stage4 from '../assets/images/bg-img/04.jpg'
import './profile.css'

const Myreviews = () => {
const [showEdit, setShowEdit] = useState(false);
const [showDelete, setShowDelete] = useState(false);
const [showDelete2, setShowDelete2] = useState(false);

const handleClose1 = () => setShowEdit(false);
const handleClose2 = () => setShowDelete(false);
const handleClose3 = () => setShowDelete2(false);

const handleShowEdit = () => setShowEdit(true);
const handleShowDelete = () => setShowDelete(true);
const handleShowDelete2 = () => setShowDelete2(true);



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
const reviews=[{
  review:'',
  productName:'product1',
  rating:4,
  date:'23/02/2024',

}
]
const testimonials=[{
    review:'',
    rating:5,
    date:'12/08/2'
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
                <h2 style={{textAlign:'left',color:'rgb(233, 192, 13)'}}>My Reviews</h2>
                <hr style={{border:'#4A148C solid 2px'}}/>
                <div className='categories mb-2'>
       
          <div>
          
            <button key={0} onClick={()=>setActiveId3(0)} className={activeId3==0?'activecat':''} style={{borderRadius:'5px',margin:'5px'}}>On Products</button>
            <button key={0} onClick={()=>setActiveId3(1)} className={activeId3==1?'activecat':''} style={{borderRadius:'5px',margin:'5px'}}>Testimonial</button>
            <button onClick={handleShowDelete2} style={{float:'right'}}><i className='fa fa-trash'></i></button>
          </div>
    </div>
    {
        activeId3==0 ?   
        <Table responsive="sm">
        <thead>
          <tr>
          <th><input type="checkbox"/></th>
            <th>#</th>
            <th>Product</th>
            <th style={{width:'40%'}}>Review</th>
            <th>Ratings</th>
            <th>Date/Time</th>
            <th></th>
            
          </tr>
        </thead>
        <tbody>
        {reviews.map((review, index) => (
          <tr>
            <td><input type="checkbox"/></td>
            <td>{index+1}</td>
            <td> 
                <img src={stage4} style={{width:'50px',height:'70px',borderRadius:'15px',marginRight:'20px'}}/><a href="/product"><u>{review.productName}</u></a>
            </td>
            <td>{review.message}</td>
            <td>{review.rating} <i className='fa fa-star' style={{color:'yellow'}}></i></td>
            <td>{review.date}</td>
            <td>
            <button onClick={handleShowEdit} className='me-2'><i className='fa fa-pen '></i></button>
            <button onClick={handleShowDelete} ><i className='fa fa-trash'></i></button>
            </td>
          
          </tr>
        ))}
        </tbody>
      </Table> 
      :
      <Table responsive="sm">
      <thead>
        <tr>
          <th><input type="checkbox"/></th>
          <th>#</th>
          <th style={{width:'30%'}}>Review</th>
          <th>Rating</th>
          <th>Date/Time</th>
          <th></th>
          
        </tr>
      </thead>
      <tbody>
      {testimonials.map((testimonial, index) => (
        <tr>
          <td><input type="checkbox"/></td>
          <td>{index+1}</td>
          <td>{testimonial.review}</td>
          <td>{testimonial.rating} <i className='fa fa-star' style={{color:'yellow'}}></i></td>
          <td>{testimonial.date}</td>
          <td>
          <button onClick={handleShowEdit} className='me-2'><i className='fa fa-pen '></i></button>
          <button onClick={handleShowDelete} ><i className='fa fa-trash'></i></button>
          </td>
        
      
        
        </tr>
      ))}
      </tbody>
    </Table>
    }
  
              </div>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'10px 5%'}}> 
              <p>Showing 1-50 of 139 Results</p>
              <Pagination>{items}</Pagination>
              </div>
            </div>
        </div>
        <Modal  show={showEdit} onHide={handleClose1}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Testimonial / Reviews</Modal.Title>
            </Modal.Header>
                <Modal.Body>
                    <h6>Details</h6>
                    <Form style={{width:'100%'}}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Rating</Form.Label>
             <select>
                <option value="1"> 1<i className='fa fa-star' style={{color:'yellow'}}></i></option>
                <option value="2"> 2<i className='fa fa-star' style={{color:'yellow'}}></i></option>
                <option value="3"> 3<i className='fa fa-star' style={{color:'yellow'}}></i></option>
                <option value="4"> 4<i className='fa fa-star' style={{color:'yellow'}}></i></option>
                <option value="5"> 5<i className='fa fa-star' style={{color:'yellow'}}></i></option>
             </select>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Your Review</Form.Label>
              <Form.Control as="textarea" rows={6} col={50} />
            </Form.Group>
          </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose1}>
                Close
            </Button>
            <Button variant="primary" onClick={handleClose1}>
                Save Changes
            </Button>
            </Modal.Footer>
      </Modal>
      <Modal show={showDelete} onHide={handleClose2}>
            <Modal.Header closeButton>
                <Modal.Title>Confirm Delete</Modal.Title>
            </Modal.Header>
                <Modal.Body>Are you sure you want to delete this?</Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose2}>
                Cancel
            </Button>
            <Button variant="primary" onClick={handleClose2}>
                Confirm
            </Button>
            </Modal.Footer>
      </Modal>
      <Modal show={showDelete2} onHide={handleClose3}>
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

export default Myreviews