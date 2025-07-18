import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll';


const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" />
      <h1><span>I'm Harshvardhan Salunkhe,</span> Full Stack Developer Based in INDIA.</h1>
     <p>I am a full stack developer from India, With the 2 years of experience in developing multiple projects.</p>
     <div className="hero-action">
      <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
      <div className="hero-resume">My resume</div>
     </div>
    </div>
  )
}

export default Hero
