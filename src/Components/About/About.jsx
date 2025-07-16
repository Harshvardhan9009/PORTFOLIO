import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
         <img src={theme_pattern} alt="" /> 
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img}  alt="" />
        </div>
        
        <div className="about-right">
          <div className="about-para">
            <p>I am a motivated Full Stack Developer with 2 years of hands-on project experience. I love building user-friendly web apps from scratch — both front-end and back-end.</p>
            <p>I thrive in remote, global teams, adapt quickly to new tech, and enjoy solving real-world problems with clean, efficient code. I’m excited to bring fresh ideas, a growth mindset, and strong collaboration skills to any opportunity worldwide!</p>
          </div>
        <div className="about-skills">
            <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/> </div>
            <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}}/> </div>
            <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}}/> </div>
            <div className="about-skill"><p>Next JS</p><hr style={{width:"50%"}}/> </div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>2+</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr/>
        <div className="about-achievement">
            <h1>10+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr/>
        <div className="about-achievement">
            <h1>9+</h1>
            <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  )
}

export default About 
