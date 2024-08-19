import React from 'react'
import backgroundImage from '../assets/images/bg-img/07.jpg'
import  stage4 from '../assets/images/bg-img/04.jpg'

const Checkout= () => {
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
        <h1 class="text-center text-white mb-4"><span style={{color:'rgb(233, 192, 13)'}}> Check Out</span> Securely</h1>
        <h2 class="text-center text-white mb-4">Almost There! Just a Few More Steps</h2>
      </div>
      <div className='container cart bg-white d-flex pt-4' style={{width:'100%',justifyContent:'center',gap:'2em'}}>
        <div className='objects' style={{width:'700px'}}>
            <h3>Product Summary</h3>
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
                  {product.quantity}
                </td>
                <td>
                  {product.price * product.quantity} XAF
                </td>
                <td>{product.deliveryFee} XAF</td>
              </tr>
              
              ))} 
            </table>
            <div class="d-flex" style={{justifyContent:'space-between'}}>
              <div class="d-flex gap-1">
                <input type="text" style={{width:'50%'}}/>
                <button style={{padding:'10px',color:'white',borderRadius:'0',background:'#4A148C',border:'none'}}>Apply Coupon</button>
              </div>

            </div>

        </div>
        <div className='checkout' style={{width:'300px'}}>
        <div style={{width:'310px',paddingRight:'0px'}}>
            <h3>Payment Details</h3>
            <div className='d-flex' style={{justifyContent:'space-between'}}>
            <b>Payment Method</b>
            <div>
              <div>
                <input type="radio" name="payment" style={{width:'10%'}}/> MTN MOMO
              </div>
              <div >
                <input type="radio" name="payment" style={{width:'10%'}}/> Orange Money
              </div>
             
              <div>
                <input type="radio" name="payment" style={{width:'10%'}}/>Cash-OnDelivery
              </div>
               
            </div>
          </div>
          <div className='' style={{justifyContent:'space-between'}}>
            <b>Account PhoneNumber</b>
            <input type="text" className='form-control sm'/>
          </div>
          <div className='' style={{justifyContent:'space-between'}}>
            <b>Delivery Name</b>
            <input type="text" className='form-control sm'/>
          </div>
          <div className='' style={{justifyContent:'space-between'}}>
            <b>Delivery Address</b>
            <input type="text" className='form-control sm'/>
          </div>
           
          </div>
        <h3>Cart Total</h3>
        <div>
          <div className='d-flex' style={{justifyContent:'space-between'}}>
            <b>Subtotals</b>
            <p>300 XAF</p>
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
          <button style={{padding:'10px',color:'white',borderRadius:'0',background:'#4A148C',border:'none'}}>Place Order</button>
         
        </div>
        </div>

      </div>
    </div>
  )
}

export default Checkout