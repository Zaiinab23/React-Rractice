import React from 'react';
import '../../App.css';
import './About.css'
import InfoCard from '../InfoCard';

function About() {
  return (
    <div className='infocard-aboutus'>
      <InfoCard
      heading='ABOUT RANDOM FACTS'
      buttontext='Join Our NewsLetter'
      src1='images/info1.jpg'
      src2='images/info2.jpeg'
      src3='images/info3.jpeg'
      text1='Welcome to Random Facts! Discover the funniest and most intriguing facts from around the world.'
      text2='Enjoy learning some more fun facts given below'
      text3='Octopuses Have Three Hearts: Two pump blood to the gills, while the third pumps it to the rest of the body.' 
      text4='Bananas Are Berries: Despite their name, strawberries are not berries, but bananas are.' 
      text5='Honey Never Spoils: Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still edible.'
      text6='Cows Have Best Friends: Studies have shown that cows become stressed when they are separated from their best friends.'/> 
   </div>
      
  );
}

export default About;