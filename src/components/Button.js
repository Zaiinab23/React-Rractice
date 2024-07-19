import React from 'react'
import './Button.css'

function Button(promts) {
  return (
    <div>
        <button className='small-button'>{promts.text}</button>
    </div>
  )
}

export default Button