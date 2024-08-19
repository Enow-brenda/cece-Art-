import React, { useState } from 'react'
import backgroundImage from '../assets/images/bg-img/06.jpg'
import image1 from  '../assets/images/icon/download (3).jfif'
import { Link } from 'react-router-dom';
import Pagination from 'react-bootstrap/Pagination';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Notification = () => {
    const [activeId3,setActiveId3]=useState(0)
    let active = 1;
    let items = [];
    for (let number = 1; number <= 5; number++) {
      items.push(
        <Pagination.Item key={number} active={number === active}>
          {number}
        </Pagination.Item>,
      );
    }
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
    const events=
        [
            {
                image: '../assets/images/events/exhibition1.jpg',
                title: 'Spring Collection Launch',
                date: 'March 15, 2024 - March 20, 2024',
                location: 'Main Gallery, Downtown Art Center',
                ShortDescription: 'Explore the latest designs in our Spring Collection. Exclusive preview and special discounts available.',
                Category: 'Exhibition'
            },
            {
                image: '../assets/images/events/discount1.jpg',
                title: 'Seasonal Sale - 30% Off',
                date: 'April 1, 2024 - April 10, 2024',
                location: 'Online Store',
                ShortDescription: 'Enjoy a 30% discount on selected items. Shop our seasonal collection and save big.',
                Category: 'Discount'
            },
            {
                image: '../assets/images/events/giveaway1.jpg',
                title: 'Giveaway - Win a Custom Outfit',
                date: 'April 15, 2024 - April 22, 2024',
                location: 'Social Media Platforms',
                ShortDescription: 'Participate in our giveaway for a chance to win a custom-designed outfit by Cece Royse.',
                Category: 'Giveaway'
            },
            {
                image: '../assets/images/events/workshop1.jpg',
                title: 'Art Workshop - Design Basics',
                date: 'May 1, 2024 - May 3, 2024',
                location: 'Creative Studio, City Center',
                ShortDescription: 'Join our workshop to learn the basics of art design. Perfect for beginners and enthusiasts.',
                Category: 'Workshop'
            },
           
            {
                image: '../assets/images/events/exhibition2.jpg',
                title: 'Summer Art Exhibition',
                date: 'June 15, 2024 - June 30, 2024',
                location: 'Art Gallery, Riverfront',
                ShortDescription: 'Experience our summer art exhibition featuring new works and interactive displays.',
                Category: 'Exhibition'
            },
            {
                image: '../assets/images/events/discount2.jpg',
                title: 'End of Season Clearance',
                date: 'July 1, 2024 - July 15, 2024',
                location: 'Online Store',
                ShortDescription: 'Massive clearance sale with up to 50% off on selected items.',
                Category: 'Discount'
            },
            {
                image: '../assets/images/events/giveaway2.jpg',
                title: 'Custom Design Giveaway',
                date: 'August 1, 2024 - August 10, 2024',
                location: 'Social Media Platforms',
                ShortDescription: 'Win a custom design consultation and outfit by participating in our giveaway.',
                Category: 'Giveaway'
            },
            {
                image: '../assets/images/events/workshop2.jpg',
                title: 'Advanced Design Techniques',
                date: 'September 5, 2024 - September 7, 2024',
                location: 'Creative Studio, City Center',
                ShortDescription: 'A workshop focused on advanced techniques for experienced designers.',
                Category: 'Workshop'
            },
            {
                image: '../assets/images/events/promo2.jpg',
                title: 'Fall Collection Preview',
                date: 'October 1, 2024 - October 10, 2024',
                location: 'Main Gallery, Downtown Art Center',
                ShortDescription: 'Exclusive preview of the Fall Collection with special offers for early buyers.',
                Category: 'Promotion'
            }
        
         

    ]
    const categories=['Discounts','Exhibitions','Seasonal Sales','Fashion','Workshops','Give Away','Promotion']
  return (
    <div>
    <div className='header' style={sectionStyle}>
        <h1 class="text-center mb-4"><span style={{color:'rgb(233, 192, 13)'}}> Events</span> Lineup</h1>
        <h2 class="text-center mb-4"> Check Out What’s Happening and When</h2>
    </div>
    <div class="row container mt-5 " style={{margin:'auto',width:'100%'}}>
    
    <div class="col-md-11">
      <div className='container mb-2 pt-2 d-flex' style={{justifyContent:'space-between',alignItems:'center'}}>
          <p>Showing 1-8 of 139 Results</p>
          <div className='d-flex' style={{width:'50%'}}>
        <input type="text"  placeholder="Search" style={{background:"#e0e0e0"}}/>
        <button><i className='fas fa-search'></i></button>
      </div>

    </div>
    <hr/>
    <div className='categories mb-2'>
        <h4>All Categories</h4>
          <div>
          {categories.map((category, index) => (
            <button key={index} onClick={()=>setActiveId3(index)} className={activeId3==index?'activecat':''} style={{borderRadius:'5px',margin:'5px'}}>{category}</button>
          ))}
          </div>
    </div>
    <hr/>
    <div class="row row-cols-1 row-cols-md-3 ">
    {events.map((event, index) => (
      <div class="col mb-3">
         <Card style={{ maxWidth:'20rem',width: '20rem' ,height:'80vh'}}>
      <Card.Img variant="top" src={image1} style={{ height: '17rem' }} />
      <Card.Body>
      
        <p style={{background:'rgb(233, 192, 13)',width:'fit-content',padding:'5px',color:'white',borderRadius:'10px'}}>{event.Category}</p>
        <Card.Title><Link to="">{event.title}</Link></Card.Title>
        <Card.Text>
         {event.ShortDescription}
        </Card.Text>
        <b>{event.date}</b>
      </Card.Body>
    </Card>
      </div>
    ))}
   
            
    </div>
    <Pagination size="lg">{items}</Pagination>
   <br />  
    </div>
  
  </div>
    </div>
  )
}

export default Notification