import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Fotter/Footer'
import { Link } from 'react-router-dom'
import houseof_dragons from '../../assets/houseof_dragons.jpg'
import hof_dragon_title from '../../assets/hof_dragon_title.png'


function Home() {
  const videoUrl = "https://www.youtube.com/embed/OGgN7d9XZ7U";
  const showVideo = ()=>{
 window.open(videoUrl,'_blank')

  }
  return (
    <div className="home">
       <Navbar/>
       <div className="hero">
        <img src={houseof_dragons} alt="" className='banner-img'/>
        <div className="hero-caption">
          <img src={hof_dragon_title} alt="" className='caption-img' />
          <p>An internal succession war within House Targaryen at the height of its power,
             172 years before the birth of Daenerys Targaryen.
          </p>
          <div className="hero-btns">
            <Link/>
            <button className='btn'><img src={play_icon} alt="" onClick={showVideo}/>Play</button>
            <button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>
          </div>
          <TitleCards/>
        </div>
       </div>
       <div className="more-cards">
        <TitleCards title={"Best Movies"} category={"top_rated"}/>
        <TitleCards  title={"Star Movies"} category={"popular"}/>
        <TitleCards title={"Upcoming"} category={"upcoming"}/>
        <TitleCards title={"Top Picks For You"} category={"now_playing"}/>
       </div>

       <Footer/>
    </div>
  )
}


export default Home
