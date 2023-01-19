import React from 'react';
import google from '../../assets/google.png';
import dropbox from '../../assets/dropbox.png';
import atlassian from '../../assets/atlassian.png';
import shopify from '../../assets/shopify.png';
import slack from '../../assets/slack.png';
import './brand.css';
const Brand = () => {
  return (
    <div className='gpt3__body-brand'>
    <>
        <img src={google} alt="google" />
        <img src={slack} alt="slack" />
        <img src={shopify} alt="shopify" />
        <img src={dropbox} alt="dropbox" />
        <img src={atlassian} alt="atlassian" />
        </>
  </div>
  )
}
export default Brand
