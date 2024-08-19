import React from 'react'
import artist from '../assets/images/icon/artist.jfif'
import backgroundImage from '../assets/images/author/cece.jpg'
import mission from '../assets/images/bg-img/08.jpg'
import vision from '../assets/images/bg-img/05.jpg'
import stage1 from '../assets/images/bg-img/07.jpg'
import  stage2 from '../assets/images/bg-img/09.jpg'
import  stage3 from '../assets/images/bg-img/06.jpg'
import  stage4 from '../assets/images/bg-img/04.jpg'
import Footer from '../Components/footer'
import './about.css' 

const AboutUs = () => {

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
    <div >
      <div className='header' style={sectionStyle}>
        <h1 class="text-center mb-4">About<span style={{color:'rgb(233, 192, 13)'}}> Cece Royse </span></h1>
        <h2 class="text-center mb-4">The Artist Behind the Masterpieces</h2>
      </div>
      <div className='introduction'>
        
      <section id="about" class="about-section py-5">
    <div class="container text-center">
        <div class="row d-flex align-items-center" style={{justifyContent:'space-around'}}>
            <div class="col-md-4"  style={{padding:'30px',border:'2px solid rgb(233, 192, 13)',borderRadius:'20px'}} >

              <img
          src={artist} // Replace with the path to your logo
          alt="Cece Royse Creation"
          width="300"
          className="d-inline-block align-top"
          style={{borderRadius:'20px'}}
        />
              
          
            </div>
            <div class="col-md-6">
            <h2><span style={{color:'rgb(233, 192, 13)'}}>Meet </span> Cece Royse</h2>
            <p>Cece Royse is a celebrated designer known for her captivating artwork and innovative techniques. Her journey into the world of art began in her early years, driven by a profound love for creativity and an unyielding determination to bring her visions to life</p>
            <p>From her humble beginnings, Cece has transformed her passion into a successful career. She specializes in designs for decoration and clothes, creating pieces that resonate with viewers and evoke deep emotional responses. Her work is characterized by  vibrant colors, intricate details, reflecting her unique perspective and artistic flair.</p>
            <p><b style={{fontSize:'20px'}}>"Design is not just what it looks like and feels like. Design is how it works."<br/></b> Steve Jobs</p>
            </div>
        </div>
    </div>
</section>
      </div>

      <div className="artisticjourney p-2 mb-4">

      <h2 class="text-center text-white mb-4"><span style={{color:'rgb(233, 192, 13)'}}> Her </span> Artistic Journey</h2>
      <hr  style={{color:'white',border:'white 2px solid',transform:'translateY(90px)'}}/>
      <div class="container d-flex gap-5 text-center ">
        <div className='stage1'>
          <img src={stage1} style={{width:'150px',height:'150px',borderRadius:'50%',border:'2px solid rgb(233, 192, 13)',padding:'5px'}}/>
          <p  style={{color:'rgb(233, 192, 13)'}}> <b>Early Inspirations</b></p>
          <p className='text-white' style={{fontSize:'15px'}}>From a young age, Cece was captivated by the beauty of art and design. Her early inspirations came from her surroundings and a deep-seated passion for creativity that laid the foundation for her future career</p>
        </div>
    
        <div className='stage1'>
          <img src={stage2} style={{width:'150px',height:'150px',borderRadius:'50%',border:'2px solid rgb(233, 192, 13)',padding:'5px'}}/>
          <p style={{color:'rgb(233, 192, 13)'}}><b>Education and Skill Development</b></p>
          <p className='text-white'  style={{fontSize:'15px'}}>Cece pursued formal training in art and design, acquiring the skills and knowledge necessary to turn her passion into a profession. This stage was crucial in shaping her artistic style and technique</p>
        </div>
        <div className='stage1'>
          <img src={stage3} style={{width:'150px',height:'150px',borderRadius:'50%',border:'2px solid rgb(233, 192, 13)',padding:'5px'}}/>
          <p style={{color:'rgb(233, 192, 13)'}}> <b>Breakthrough and Expansion</b> </p>
          <p className='text-white'  style={{fontSize:'15px'}}>"With her skills honed, Cece launched her first collection, marking a significant breakthrough in her career. Her designs began gaining attention, leading to opportunities for exhibitions and collaborations</p>
        </div>
        <div className='stage1'>
          <img src={stage4} style={{width:'150px',height:'150px',borderRadius:'50%',border:'2px solid rgb(233, 192, 13)',padding:'5px'}}/>
          <p style={{color:'rgb(233, 192, 13)'}}><b>Current Work and Future Vision</b></p>
          <p className='text-white'  style={{fontSize:'15px'}}>Today, Cece continues to innovate in the world of art and fashion. Her current work reflects her evolving style and commitment to quality. Looking ahead, she aims to push boundaries and inspire future generations with her designs</p>
        </div>
      </div>
      </div>
      <div className="container mission">
        <h2 class="text-center mb-4"><span style={{color:'rgb(233, 192, 13)'}}> Misson </span>and Vision </h2>
        <div class="row mt-4 mx-5">
      <div class="col-md-6">
       
        <div class="mycard card p-4 shadow-sm ">
          <div className='card-front'>
              <img src={mission}/>
        </div>
          <div className='card-back text-center'>
            <h3 class="card-title" style={{color:'rgb(233, 192, 13)'}}>Mission</h3>
            <p class="card-text text-white">
            To inspire and empower individuals through unique and artistic fashion designs, combining traditional craftsmanship with modern aesthetics to create distinctive decorations and clothing that tell a story. Our mission is to make every piece a work of art that reflects the personality and style of the wearer, ensuring that our clients feel confident and unique in our creations. We strive to promote ethical practices, sustainability, and cultural appreciation in every step of our design process.
            </p>
          </div>
         
        </div>
      </div>
      <div class="col-md-6">
        <div class="mycard card p-4 shadow-sm">
          <div className='card-front'>
          <img src={vision}/>
          </div>
            <div className='card-back text-center'>
            <h3 class="card-title" style={{color:'rgb(233, 192, 13)'}}>Vision</h3>
          <p class="card-text text-white">
          To be a leading name in the fashion industry, known for innovative designs and exceptional quality, while promoting sustainability and celebrating cultural diversity in every creation. Our vision is to create a global community of fashion enthusiasts who appreciate the blend of art and fashion, and to inspire future generations of designers with our commitment to creativity, craftsmanship, and social responsibility. We aim to expand our reach, influence fashion trends, and set new standards for excellence in the industry
          </p>
            </div>
         
        </div>
      </div>
    </div>
      </div>
      
      <Footer/>
      
      
    </div>
   
  
  )
}

export default AboutUs