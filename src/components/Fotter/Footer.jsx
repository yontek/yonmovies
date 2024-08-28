import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instagarm_icon from '../../assets/youtube_icon.png'
import facebook_icon from '../../assets/youtube_icon.png'



function Footer() {
  return (
    <div className="footer">
      <div className="footer-icons">
        <img src={facebook_icon} alt="" />
        <img src={instagarm_icon} alt="" />
        <img src={twitter_icon} alt="" />
        <img src={youtube_icon} alt="" />
      </div>
      
      <ul>
        <li> Audio Description</li>
        <li> Help Center</li>
        <li> Gift Cards</li>
        <li> Media Center</li>
        <li> Investor Relations</li>
        <li> Jobs</li>
        <li> Terms of Use</li>
        <li> Privacy</li>
        <li> Legal Notices</li>
        <li> Cookie Preferences</li>
        <li> Corporate INformation</li>
        <li> Contact Us</li>
      </ul>
    <p className="copyright-text">©️ 2024,Yonny Movies.</p>  
    </div>
  )
}

export default Footer