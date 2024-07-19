import React from 'react'
import Button from './Button'
import './ContactCard.css'

function ContactCard(prompts) {
  return (
    <div className='contact-card-container'>
        <p className='contact-title-p'>{prompts.title}</p>
        <p className='contact-text-p'>{prompts.text}</p>
        <Button
        text={prompts.buttontext}/>
    </div>
  )
}

export default ContactCard