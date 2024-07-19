import React from 'react'
import './InfoCard.css'
import Button from './Button'

function InfoCard(prompts) {
  return (
    <div className='all-info'>
        <div className='About-heading'>
          <p className='About-heading-p'>{prompts.heading}</p>
          <Button className='about-button' text={prompts.buttontext}/>
          </div>
        <div className='image-section-info'>
            <img className='big-image-info' src={prompts.src1}/>
            <div className='smaller-images-container'>
            <img className='small-image-info' src={prompts.src2}/>
            <img className='small-image-info' src={prompts.src3}/>
            </div>
            <div className='text-info-div'>
              <p className='text-info-p'>{prompts.text1}</p>
              <p className='text-info-p'>{prompts.text2}</p>
              <p className='text-info-p'>{prompts.text3}</p>
              <p className='text-info-p'>{prompts.text4}</p>
              <p className='text-info-p'>{prompts.text5}</p>
              <p className='text-info-p'>{prompts.text6}</p>
            </div>
        </div>

    </div>
  )
}

export default InfoCard