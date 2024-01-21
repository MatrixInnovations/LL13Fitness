import React from 'react';
import Heart from '../assets/Heart.mp4';


function Home() {
  return (
    <div>
        <video id="background-video" loop autoPlay className="background-tint" muted>
          <source src={Heart} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
    </div>
  )
}

export default Home


