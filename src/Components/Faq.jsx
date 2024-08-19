import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';

const Faq = () => {

    const accordion=
        [
            {
                "question": "What types of artworks do you offer?",
                "answer": "At Cece Royse Creation, we offer a diverse range of handcrafted artworks, including decorations, designs, and mixed media pieces. Each artwork is uniquely crafted by the artist Cece Royse."
            },
            {
                "question": "How can I purchase an artwork?",
                "answer": "You can purchase artworks directly from our website by browsing through the product listings, selecting your desired item, and adding it to your cart. Proceed to checkout to complete your purchase securely."
            },
           
            {
                "question": "Can I return or exchange an artwork?",
                "answer": "We accept returns and exchanges within 14 days of delivery. The artwork must be in its original condition and packaging. Please refer to our return policy for detailed instructions on how to initiate a return or exchange."
            },
            {
                "question": "How can I contact customer support?",
                "answer": "You can contact our customer support team through the 'Contact Us' page on our website. Alternatively, you can email us at support@ceceroysecreation.com or call us at (123) 456-7890."
            },
            {
                "question": "Are there any upcoming art workshops or events?",
                "answer": "Yes, we regularly host art workshops and exhibitions. Please visit our 'Events' page to see the latest schedule and details about upcoming events and workshops."
            },
            {
                "question": "How can I stay updated with new artworks and promotions?",
                "answer": "To stay updated with new artworks and promotions, you can move to the notification page where all this will be found. You can also follow us on social media platforms like Instagram, Facebook, and Twitter."
            },
            {
                "question": "Can I commission a custom artwork?",
                "answer": "Yes, Cece Royse offers custom artwork commissions. Please contact us through the 'Custom Art' section of our website in the contact us page to discuss your requirements and get a personalized quote."
            }
        ]
        
    
    function rgbColor(){
        var red=Math.floor(Math.random()*255)
        var green=Math.floor(Math.random()*255)
        var blue=Math.floor(Math.random()*255)
        return "RGB("+red+","+blue+","+green+")";
         
     }
  return (
    <div className='container mt-5'>
            <h2 class="text-center mb-4"><span style={{color:'rgb(233, 192, 13)'}}>Frequently </span> Asked Questions</h2>
            <div className='d-flex  justify-content-center'>
    
            <Accordion style={{width:'100%'}}>
                {accordion.map((question, index) => (
                    <Accordion.Item eventKey={index}>

                        <Accordion.Header><span style={{backgroundColor:rgbColor(),textAlign:'center',color:'white',padding:'10px 10px',borderRadius:'10px',marginRight:'5px'}}>G{index+1}</span> {question.question}</Accordion.Header>
                        <Accordion.Body>
                        {question.answer}
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
    
            </Accordion>
            </div>
           
           
    </div>
  )
}

export default Faq