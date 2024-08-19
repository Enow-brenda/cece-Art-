import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import image1 from  '../assets/images/icon/download (3).jfif'
import { Link } from 'react-router-dom';

const newArrival = () => {
  const products=[
    {
      title:'product 1',
      category:'decoration',
      image:'../assets/images/icon/download.jfif',
      rating:2.6,
      price:'2500 XAF'

    },
    {
      title: 'product 2',
      category: 'painting',
      image: '../assets/images/icon/painting1.jfif',
      rating: 4.8,
      price: '4500 XAF'
    },
    {
      title: 'product 3',
      category: 'sculpture',
      image: '../assets/images/icon/sculpture1.jfif',
      rating: 4.7,
      price: '8000 XAF'
    },
    {
      title: 'product 4',
      category: 'jewelry',
      image: '../assets/images/icon/jewelry1.jfif',
      rating: 4.5,
      price: '3000 XAF'
    },
    {
      title: 'product 5',
      category: 'decoration',
      image: '../assets/images/icon/decoration2.jfif',
      rating: 4.9,
      price: '2000 XAF'
    },
    {
      title: 'product 6',
      category: 'painting',
      image: '../assets/images/icon/painting2.jfif',
      rating: 4.4,
      price: '5000 XAF'
    },
    {
      title: 'product 7',
      category: 'sculpture',
      image: '../assets/images/icon/sculpture2.jfif',
      rating: 4.6,
      price: '7500 XAF'
    },
    {
      title: 'product 8',
      category: 'jewelry',
      image: '../assets/images/icon/jewelry2.jfif',
      rating: 4.8,
      price: '3500 XAF'
    }
  ]
  return (
      
    <div class="container my-5">
    <h2 class="text-center mb-4"><span style={{color:'rgb(233, 192, 13)'}}>ArtWork </span> Gallery</h2>
    <div class="row row-cols-1 row-cols-md-4 g-4">
    {products.map((product, index) => (
      <div class="col">
        <div class="card product-card">
          <img src={image1} class="card-img-top p-2" style={{height:'20em'}}alt="Product 1"/>
          <div class="card-body">
            <p>{product.category}</p>
            <h5 class="card-title">{product.title}</h5>
            <p class="card-text">
              <div className='d-flex ' style={{justifyContent:'space-between',alignItems:'center'}}>
                <div>
                
                {
            [...Array(5)].map((_,index)=>{
              
                return <i key={index} className='fa fa-star' style={{color:index+1< product.rating ? 'yellow' : ''}}/>
            })
        }{product.rating} 
                  <h3>{product.price}</h3>
                </div>
                <div>
                  <Link to=""><i className='fas fa-shopping-cart p-2 mb-1' style={{background:'#4A148C',color:'white',borderRadius:'5px'}}></i></Link>
                  <br/>
                  <Link to=""><i className='fas fa-eye p-2' style={{background:'rgb(233, 192, 13)',color:'white',borderRadius:'5px'}}></i></Link>
               </div>
              </div>
            </p>
        
          </div>
        </div>
      </div>
    ))}
                   
    </div>
    <div className='d-flex justify-content-center align-items-center m-4'>
    <Link to="/artwoeks" style={{borderRadius:'0',padding:'8px',background:'none',color:'#4A148C',border:'2px #4A148C solid',textAlign:'center',fontSize:'20px'}} >View More</Link>
    </div>
   
  </div>
          
   
  )
}

export default newArrival