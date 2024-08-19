
import React from 'react'
import Button from 'react-bootstrap/Button';
import backgroundImage from '../assets/images/bg-img/06.jpg'
import image1 from '../assets/images/craft1.jfif';
import image2 from '../assets/images/craft2.jfif';
import image3 from '../assets/images/craft3.jfif';
import image4 from '../assets/images/d17a34f5f0ee2c0b9c329ba4359a2eec.jpg';
import { Link } from 'react-router-dom';

const hero = () => {

    const sectionStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '80vh', // adjust as needed
        width: '100%',
        gap:'10em'
    }
  return (
    <div style={sectionStyle} className='d-flex  align-items-center justify-content-center'>
        <div className='hero-caption text-center' style={{width:'40%'}}>
            <h1 className=''>Discover the World of Cece Royse</h1>

            <div className="hero-intro">
    </div>
            <div className='d-flex align-items-center justify-content-center gap-2 my-4'>
                <Link to="/artworks" style={{width:'20%',padding:'10px',color:'white',borderRadius:'0',background:'#4A148C',border:'none'}} >Shop Now</Link>
                <Link to="/about" style={{width:'20%',borderRadius:'0',padding:'8px',background:'none',color:'#4A148C',border:'2px #4A148C solid'}} >Learn More</Link>
            </div>
            <div className='d-flex ' style={{flexDirection:'column'}}>
            <p style={{fontSize:'20px'}}>Unique, handcrafted pieces that tell a story.</p>
            <div className='works d-flex gap-4 justify-content-center align-items-center'>
                <img src={image2} width="30%" style={{height:"200px",boxShadow: '5px 5px 10px 5px rgba(0, 0, 0, 0.5)'}}/>
                <img src={image3} width="30%" style={{height:"200px",boxShadow: '5px 5px 10px 5px rgba(0, 0, 0, 0.5)'}}/>
                <img src={image1} width="30%" style={{height:"200px", boxShadow: '5px 5px 10px 5px rgba(0, 0, 0, 0.5)'}}/>
            </div>
            </div>
           
          
            
        </div>
        <div className='images me-5' style={{paddingLeft:'50px',borderLeft:"2px rgb(233, 192, 13) solid",borderTop:"2px rgb(233, 192, 13) solid",borderTopLeftRadius:'200px',
                 borderTopRightRadius:'200px'}}>
            <img src={image4}  
            style={{
                width:'350px',
                height:'500px',
                borderTopLeftRadius:'200px',
                 borderTopRightRadius:'200px',
                 boxShadow:'5px 5px 10px 5px rgba(0, 0, 0, 0.5)'

            }}
            />
            
        </div>
    </div>
  )
}

export default hero