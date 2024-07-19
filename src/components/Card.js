import React from 'react'
import './Card.css'
import Button from './Button'

function Card(props) {
  return (
    <div className='card-container'>
        <img className='card-image' src={props.src} alt="image"></img>
        <div className='card-content'>
        <p className='card-title'>{props.title}</p>
        <p className='card-text'>{props.text}</p>
        <Button
        text='Learn More'/>
        </div>
    </div>
  )
}

export default Card