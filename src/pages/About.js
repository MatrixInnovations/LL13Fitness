import React from 'react';
import SmilesContact from '../assets/SmilesContact.jpeg'; // Replace with the actual path to your banner image

function About() {
  return (
    <div className='about'>
      <div className='aboutTop' style={{ backgroundImage: `url(${SmilesContact})` }}>
        {/* Content for the top section */}
      </div>
      <div className='aboutBottom'>
        <h1>ABOUT US</h1>
        <p>
          Many individuals express their eagerness to embark on a journey towards better fitness and well-being. However, only a few are truly prepared to overcome their own obstacles to initiate a genuine transformation. If you seek a profound change leading to a lifetime of healthier habits, that's precisely what I am committed to delivering. Whether you've grappled with weight and fitness challenges for a long time or find yourself not achieving the desired results, I am confident that with the right knowledge, training, and tailored plan, you can break free from old habits and unveil a happier, healthier, transformed version of yourself. My advice to those commencing a fitness or health journey is simple yet crucial: work diligently, but also extend grace to yourself. A momentary setback should not define your future. Refuse to let a single moment jeopardize your progress, your day, or your overall well-being. Allow that moment to pass, regain focus, and resume your plan. Consistency is the key to long-term success!
        </p>
      </div>
    </div>
  );
}

export default About;
