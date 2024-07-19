import React from 'react';
import '../../App.css';
import'./Contact.css';
import ContactCard from '../ContactCard';

function Contact() {
  return (
    <div className='contact-page-maindiv'>
      <p className="title">CONTACT US</p> 
      <div className="contact-cardsdiv">
      <ContactCard
      title='I Want To Submit A Fun Fact'
      text='The best way to have your fact featured on this website is through submitting a form'
      buttontext='Submit A Fun Fact'/>
      <ContactCard
      title='See An Incorrect Fact?'
      text='We want to make sure all our facts are correct, if you think we made a mistake. Let us know'
      buttontext='Correct A Fun Fact'/>
      </div>
    
    </div>
  );
}

export default Contact;