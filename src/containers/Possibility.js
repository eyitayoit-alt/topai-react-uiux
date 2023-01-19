import React from 'react';
import "./possibility.css";
import pi from '../../assets/possibility.png';

const Possibility = () => {
  return (
    <div className="pb-container" id="posibility">
      <div className='pb-main-content'>
      <div className="pb-image">
         <img src={pi} alt="possibility" />
    </div>
    <div className="pb-text">
    <p className='pb-text-one'>Request Early Access to Get Started</p>
    <p className='pb-text-two'>The possibilities are beyond your imagination</p>
    <p className='pb-text-three'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
    <p className='pb-text-four'>Request Early Access to Get Started</p>
    </div>
    </div>
    <div className="pb-rectangle">
      <div className='rectangle-text'>
        <p className='rec-text-one'>Request Early Access to Get Started</p>
        <p className='rec-text-two'>Register today & start exploring the endless possiblities.</p>
      </div>
      <button className='rectangle-button'>Get Started</button>
    
    </div>
    </div>
  )
}

export default Possibility
