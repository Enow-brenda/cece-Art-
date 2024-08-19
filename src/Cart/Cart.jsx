import React from 'react'
import backgroundImage from '../assets/images/bg-img/07.jpg'
import  stage4 from '../assets/images/bg-img/04.jpg'
import Footer from '../Components/footer'
import { Link } from 'react-router-dom';

const Cart = () => {
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

  const sectionStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '70vh', // adjust as needed
    width: '100%',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center'
}

  
  return (
    <div>
      <div className='header' style={sectionStyle}>
        <h1 class="text-center text-white mb-4"><span style={{color:'rgb(233, 192, 13)'}}> Shopping</span> Bag</h1>
        <h2 class="text-center text-white mb-4">Your Items Are Ready: Check and Confirm</h2>
      </div>
      <div className='container cart bg-white d-flex pt-4' style={{width:'100%',justifyContent:'center',gap:'2em'}}>
        <div className='objects' style={{width:'700px'}}>
            <h3>Cart Summary</h3>
            <table class="table table-bordered-rows" style={{width:'100%'}}>
              <tr>
                <th></th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Sub Total</th>
                <th>Delivery Fee</th>
              </tr>
              {products.map((product, index) => (
              <tr>
                <td ><b style={{color:'red'}}>X </b> </td>
                <td> 
                  <img src={stage4} style={{width:'50px',height:'70px',borderRadius:'15px'}}/><a href="/product"><u>{product.title}</u></a>
                </td>
                <td>{product.price} XAF</td>
                <td>
                  <input type="number" value={product.quantity} style={{width:'70px'}}/>
                </td>
                <td>
                  {product.price * product.quantity} XAF
                </td>
                <td>{product.deliveryFee} XAF</td>
              </tr>
              
              ))} 
            </table>
            <div class="d-flex" style={{justifyContent:'end'}}>
            
              <button style={{padding:'10px',color:'white',borderRadius:'0',background:'#4A148C',border:'none'}}>Update Cart</button>
            </div>

        </div>
        <div className='checkout' style={{width:'300px'}}>
        <h3>Cart Total</h3>
        <div>
          <div className='d-flex' style={{justifyContent:'space-between'}}>
            <b>Subtotals</b>
            <p>300XAF</p>
          </div>
          <div className='d-flex' style={{justifyContent:'space-between'}}>
            <b>Total Delivery Fee</b>
            <p>300XAF</p>
          </div>
          <div className='d-flex' style={{justifyContent:'space-between'}}>
            <b>Discount</b>
            <p>300XAF</p>
          </div>
          <hr/>
          <div className='d-flex' style={{justifyContent:'space-between'}}>
            <b>Total</b>
            <p>300XAF</p>
          </div>
          <button style={{padding:'10px',color:'white',borderRadius:'0',background:'#4A148C',border:'none'}}><a href="/checkout" >Proceed To Check Out</a></button>
          
        </div>
        </div>

      </div>
      <Footer/>
    </div>
  )
}

export default Cart