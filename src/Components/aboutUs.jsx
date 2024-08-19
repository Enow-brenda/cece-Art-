import React from 'react'
import artist from '../assets/images/icon/artist.jfif'
import { Link } from 'react-router-dom';

const aboutUs = () => {
  return (
   
      <section id="about" class="about-section py-5">
    <div class="container text-center">
        <div class="row align-items-center">
            <div class="col-md-6">
            <img
          src={artist} // Replace with the path to your logo
          alt="Cece Royse Creation"
          width="300"
          className="d-inline-block align-top"
        />
            </div>
            <div class="col-md-6">
            <h2><span style={{color:'rgb(233, 192, 13)'}}>About </span> Cece Royse</h2>
            <p>Inspired by craft from an early age, Cece Royse has dedicated her life to creating unique, handcrafted pieces that tell a story. Despite numerous challenges, her passion for art has only grown stronger, leading to the exquisite collection you see today. Each piece reflects her journey, blending tradition with innovation, and capturing the essence of human experience through art. With a keen eye for detail and a deep understanding of her craft, Cece continues to push the boundaries of creativity, inspiring others to follow their artistic passions.</p>
                <Link to="/about" style={{width:'20%',borderRadius:'0',padding:'8px',background:'none',color:'#4A148C',border:'2px #4A148C solid'}} >Learn More</Link>
            </div>
        </div>
    </div>
</section>
    
  )
}

export default aboutUs