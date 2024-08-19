import React from 'react'

const contact = () => {
  return (
    
  <div className="container  pt-4 pb-4 d-flex " style={{boxShadow: '5px 5px 10px 5px rgba(0, 0, 0, 0.5)',justifyContent:'space-around',gap:'8em',padding:'0px'}}>
    <div className="row">
      <div className="col-6">
        <h2><span style={{color:'rgb(233, 192, 13)'}}>Contact</span> Me</h2>
        <p>Get in touch with me through the following channels:</p>
        <ul className="list-unstyled">
          <li><strong>Email:</strong> <a href="mailto:your.email@example.com">ceceroyse@gmail.com</a></li>
          <li><strong>Phone:</strong> +237 656 789 990</li>
          <li><strong>Address:</strong> 123 Art Street, Creativity City, AR 12345</li>
        </ul>
        <h3><span style={{color:'rgb(233, 192, 13)'}}>Follow</span> Me</h3>
        <p>Stay updated with my latest work and news:</p>
        <ul className="list-unstyled d-flex  gap-4">
        <div className="social-icon">
              <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>Facebook</li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a> Instagram</li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>Twitter</li>
            </div>
        </ul>
      </div>
      
      <div className="col-6">
        <h2><span style={{color:'rgb(233, 192, 13)'}}>Contact</span> Form</h2>
        <form action="/submit-contact" method="post" >
        
          <div className="mb-3">
            <label for="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" name="name" required/>
          </div>
          <div className="mb-3">
            <label for="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" name="email" required/>
          </div>
          <div className="mb-3">
            <label for="message" className="form-label">Message</label>
            <textarea className="form-control" id="message" name="message" rows="4" required></textarea>
          </div>
          <button type="submit"  style={{width:'20%',borderRadius:'0',padding:'8px',background:'none',color:'#4A148C',border:'2px #4A148C solid'}}>Send</button>
        </form>
      </div>
    </div>
  </div>


  )
}

export default contact