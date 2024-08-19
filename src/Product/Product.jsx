import React, { useState } from 'react'
import backgroundImage from '../assets/images/bg-img/06.jpg'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import image1 from  '../assets/images/icon/download (3).jfif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import Pagination from 'react-bootstrap/Pagination';
import Footer from '../Components/footer'
import './product.css'


const Product = () => {
  const [activeId1,setActiveId1]=useState(0)
  let active = 1;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>,
    );
  }

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
  const sectionStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '60vh', // adjust as needed
    width: '100%',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center'
}
const populars=[
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
  }

]
const categories=[
'All','Home Decor','Wall Art','Fashion Accessories','Custom Designs','Seasonal Decorations','Tableware','Clothing','Others'
]
  

  return (
    <div>
      <div class="">
      <div className='header' style={sectionStyle}>
        <h1 class="text-center mb-4"><span style={{color:'rgb(233, 192, 13)'}}> Artwork</span> Shop</h1>
        <h2 class="text-center mb-4">Cece Royse’s Signature Designs: Where Art Comes Alive</h2>
      </div>
  
  <div class="row container mt-5 " style={{margin:'auto'}}>
    
    <div class="col-md-8">
      <div className='container mb-3 pt-2 ' style={{border:'2px solid yellow'}}>
          <p>Showing 1-12 of 139 Results</p>
      </div>
    
    <div class="row row-cols-1 row-cols-md-3 ">
    {products.map((product, index) => (
      <div class="col">
        <div class="card product-card mb-3" style={{width:'13em'}}>
          <img src={image1} class="card-img-top p-2" style={{height:'12em'}}alt="Product 1"/>
          <div class="card-body">
            <h6 class="card-title">{product.title}</h6>
            <p class="card-text">
              <div className='d-flex ' style={{justifyContent:'space-between',alignItems:'center'}}>
                <div>
                
                {
            [...Array(5)].map((_,index)=>{
              
                return <i key={index} className='fa fa-star' style={{color:index+1< product.rating ? 'yellow' : ''}}/>
            })
        }{product.rating} 
                  <h5>{product.price}</h5>
                </div>
                <div>
                  <Link to=""><i className='fas fa-shopping-cart p-2 mb-1' style={{background:'#4A148C',color:'white',borderRadius:'5px',fontSize:'10px'}}></i></Link>
                  <br/>
                  <Link to=""><i className='fas fa-eye p-2' style={{background:'rgb(233, 192, 13)',color:'white',borderRadius:'5px',fontSize:'10px'}}></i></Link>
               </div>
              </div>
            </p>
        
          </div>
        </div>
      </div>
    ))}
   
            
    </div>
    <Pagination size="lg">{items}</Pagination>
   <br />  
    </div>
    <aside class="col-md-4" style={{position:'static'}}>
      <div className='d-flex'>
        <input type="text"  placeholder="Search" style={{background:"#e0e0e0"}}/>
        <button><i className='fas fa-search'></i></button>
      </div>
      <hr/>
      <div className='categories'>
        <h4>All Categories</h4>
          <div>
          {categories.map((category, index) => (
            <button key={index} onClick={()=>setActiveId1(index)} className={activeId1==index?'activecat':''} style={{borderRadius:'5px',margin:'5px'}}>{category}</button>
          ))}
          </div>
      </div>
      <div className='categories'>
        <h4>Popular Products</h4>
          <div >
          {populars.map((popular, index) => (
          <div className='d-flex align-items-center'>
            <img src={backgroundImage} style={{width:'70px',height:'90px',borderRadius:'10px'}} className='m-2'/>
            <div >
              <a href="/product"><u> {popular.title}</u></a><br/>
              {
            [...Array(5)].map((_,index)=>{
              
                return <i key={index} className='fa fa-star' style={{color:index+1< popular.rating ? 'yellow' : ''}}/>
            })
        }{popular.rating} 
            </div>
           
          </div>
          ))}
          </div>
      </div>
      <div className='Customized'>
          <h4>Customize your pieces</h4>
          <p>Want a customized piece ? </p>
          <div className='d-flex align-items-center text-center' style={{justifyContent:'space-between'}}>
          <div className='d-flex justify-content-center align-items-center ' style={{flexDirection:'column'}}> 
           <Link to ="https://wa.me/672084416"><FontAwesomeIcon icon={faWhatsapp} size="4x" color="green" /></Link>
            <p>Contact the artist </p>
          </div>
          <p>Or</p>
          <div>
          <Link to ="/"><i className='fa fa-message' style={{color:'#4A148C',fontSize:'50px'}}></i></Link>
          <p>Leave us your Specifications</p>
          </div>
          </div>

          
         
          
      </div>
      
    </aside>
  </div>
  
 
</div>
<Footer/>
    </div>
  )
}

export default Product