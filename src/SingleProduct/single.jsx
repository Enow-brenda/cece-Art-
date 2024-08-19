import React from 'react'
import  image from '../assets/images/bg-img/09.jpg'

const Single = () => {
    const product={
        title: 'product 4',
    category: 'jewelry',
    image: '../assets/images/icon/jewelry1.jfif',
    rating: 4.5,
    price: '3000 XAF'
    }
   
  return (
    <div>
        <div className='container px-5  mt-3'>
            <div className='row' style={{height:'70vh'}}>
                <div className='col-5'>
                    <img src={image} style={{height:'60vh'}}/>
                    <div class="row mt-2">
                        <img className="col-3" src={image} style={{height:'10vh',width:'25%'}} />
                        <img className="col-3" src={image}  style={{height:'10vh',width:'25%'}}/>
                        <img className="col-3" src={image}  style={{height:'10vh',width:'25%'}}/>
                        <img className="col-3" src={image}  style={{height:'10vh',width:'25%'}}/>
                      
                     
                    </div>

                </div>
                <div className='col-7'>
                    <p>Home / artwork</p>
                    <h3>{product.title}</h3>
                    <h4>{product.price}</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Single