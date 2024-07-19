import React from 'react';
import '../../App.css';
import './Home.css'
import Card from '../Card';

function Home() {
  return (
    <div className='card-collection'>
      <Card
      src="images/cloud.jpeg"
      title='CLOUDS'
      text='A cloud weighs around a million tonnes'/>
            <Card
      src="images/giraffe.jpg"
      title='GIRAFFE'
      text='Giraffes are 30 times more likely to get hit by lightning than people.'/>
            <Card
      src="images/earth.jpg"
      title='EARTH'
      text='Earth’s rotation is changing speed.'/>
            <Card
      src="images/brain.jpeg"
      title='BRAIN'
      text='Your brain is constantly eating itself.'/>


    </div>
  );
}

export default Home;
