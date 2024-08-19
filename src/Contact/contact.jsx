import React from 'react'
import backgroundImage from '../assets/images/bg-img/06.jpg'
import Contact2 from '../Components/contact'
import Footer from '../Components/footer'

const Contact = () => {
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
  return (
    <div>
        <div className='header mb-5' style={sectionStyle}>
        <h1 class="text-center mb-4"><span style={{color:'rgb(233, 192, 13)'}}> Get </span> in Touch with Us</h1>
        <h2 class="text-center mb-4">We’re Here to Help and Customize Your Artistic Experience</h2>
      </div>
      <Contact2/>
    
      <section id="customization" style={{backgroundColor:'#f8f8ff'}} className="mt-4 customization-section py-5">
  <div class="container text-center" >
  <h2 class="text-center mb-4"><span style={{color:'rgb(233, 192, 13)'}}> Custom  </span>Design Requests </h2>
    
    <h4>Tell us your vision, and we'll bring it to life</h4>
    <div className='row d-flex align-items-center justify-content-center'>
      
      <p style={{width:'80%'}}>We offer a range of customization options to suit your unique needs. Whether you want a bespoke piece of decoration, a custom clothing item, or personalized accessories, we're here to help. Fill out the form below with your request, and our team will get back to you with the details.</p>
      
      <form class="customization-form mt-2" style={{width:'70%'}}>
      <div class="row" >
        <div class="col-md-6">
          <label for="name">Name</label>
          <input type="text" id="name" name="name" class="form-control" required />
        </div>
        <div class="col-md-6">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" class="form-control" required />
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <label for="phone">Phone Number (optional)</label>
          <input type="text" id="phone" name="phone" class="form-control" />
        </div>
        <div class="col-md-6">
          <label for="customization-type">Type of Customization</label>
          <select id="customization-type" name="customization-type" class="form-control">
            <option value="decoration">Decoration</option>
            <option value="clothing">Clothing</option>
            <option value="accessories">Accessories</option>
           
          </select>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-md-12">
          <label for="description">Description</label>
          <textarea id="description" name="description" class="form-control" rows="4" required></textarea>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-md-6">
          <label for="attachment">Attachment (optional)</label>
          <input type="file" id="attachment" name="attachment" class="form-control" />
        </div>
        <div class="col-md-6">
          <label for="deadline">Preferred Deadline</label>
          <input type="date" id="deadline" name="deadline" class="form-control" />
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-md-12">
          <label for="budget">Budget (optional)</label>
          <input type="number" id="budget" name="budget" class="form-control" />
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-md-12 text-center">
          <button type="submit" style={{ backgroundColor: '#4A148C',color:'white'}}>Submit Request</button>
        </div>
      </div>
    </form>
      </div>
    
    

    
    

    <div class="contact-info mt-4">
      <p>For further questions or assistance, feel free to <a href="contact.html">contact us</a> or reach out to us on social media:</p>
     
    </div>
  </div>
</section>
<Footer/>

    </div>
  )
}

export default Contact