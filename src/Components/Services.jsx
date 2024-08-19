import React from 'react'
import service1 from '../assets/images/icon/download (2).jfif'
import service2 from '../assets/images/icon/download (4).jfif'
import service3 from '../assets/images/icon/download(1).jfif'
import './style.css'

const Services = () => {

  const imageStyle = {
    height: '250px', // adjust as needed
    width: '100%',
    
}
const services = [
  {
    image: service1,
    title: 'Custom Art Commissions',
    description: 'Have a unique idea in mind? Work directly with Cece Royse to bring your vision to life. Request a custom art piece tailored to your preferences',
    Highlight:'Perfect for special gifts, personal collections, and bespoke home decor'
  },
  
  {
    image: service2,
    title: 'Gallery Exhibitions',
    description: 'Explore stunning artworks and hand crafted piecesdisplayed in our gallery.',
    Highlight:'Participate in hands-on workshops designed for all skill levels, fostering creativity and skill development.'
  },
  {
    image: service3,
    title: 'Art Workshops and Classes',
    description: 'Join our workshops and learn from Cece Royse herself. Whether you’re a beginner or an experienced artist, our classes offer something for everyone.',
    Highlight:'Discover curated exhibitions showcasing a diverse range of contemporary and classic artworks'
  }
  // Add more services as needed
];



  return (
    <div className='p-2'>
      <h2><span style={{color:'rgb(233, 192, 13)'}}>Our</span> Services</h2>
      <div className="container my-5">
      <div className="row">
        {services.map((service, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card service-card">
              <div className="card-body">
                <img src={service.image} style={imageStyle}/>
                <h3 className="card-title text-center">{service.title}</h3>
                <div className="service-description d-flex justify-content-center align-items-center" style={{flexDirection:'column'}} >
                  <p style={{color:'white'}}>{service.description}</p>
                  <p style={{color:'white'}}>{service.Highlight}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Services