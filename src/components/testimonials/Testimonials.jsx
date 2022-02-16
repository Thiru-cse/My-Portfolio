import "./testimonials.scss";
import { IoMdOpen, IoLogoGithub } from "react-icons/io";

export default function Testimonials() {
  return (
    <>
      <div className="section-title" id="project">
        <h2 className="project">Projects</h2>
      </div>
      <div class="testimonials">
        <div class="container">
          <div class="banner-img1">
          </div>
          <h1 class="name" style={{ color: "crimson" }}>Netflix Clone</h1>
          <div className="btn-cont">
          <button class="btn" onClick={() => window.open( 'https://github.com/Thiru-cse/Netflix-Backend')}>Github  <IoLogoGithub /></button>
          <button class="btn" onClick={() => window.open( 'https://netflix-thiru.vercel.app/register')}>View Site  <IoMdOpen/></button>
          </div>
          <p class="description">This is Fullstack MERN website made it as a Netflix.<br></br>This application is used to watch Movies and Series.</p>
        </div>
        <div class="container">
          <div class="banner-img">
          </div>
          <h1 class="name" style={{ color: "rgb(65, 201, 255)" }}>E-Commerce</h1>
          <div className="btn-cont">
          <button class="btn" onClick={() => window.open( 'https://github.com/Thiru-cse')}>Github  <IoLogoGithub /></button>
          <button class="btn" onClick={() => window.open( 'https://shopy-thiru.vercel.app/register')}>View Site  <IoMdOpen/></button>
          </div>
          <p class="description">This is Fullstack MERN website made it as a Ecommerce.<br></br>This application is used to buy our products.</p>
        </div>
        <div class="container">
          <div class="banner-img">
          </div>
          <h1 class="name" style={{ color: "rgb(48, 60, 65)" }}>V-Chat</h1>
          <div className="btn-cont">
          <button class="btn" onClick={() => window.open( 'https://github.com/Thiru-cse')}>Github  <IoLogoGithub /></button>
          <button class="btn" onClick={() => window.open( 'https://shopy-thiru.vercel.app/register')}>View Site  <IoMdOpen/></button>
          </div>
          <p class="description">This is Fullstack MERN website made it as a V-Chat.<br></br>This application is used to connect and video call with your friends.</p>
        </div>
        <div class="container">
          <div class="banner-img5">
          </div>
          <h1 class="name" style={{ color: "rgb(44, 73, 167)" }}>Social Media</h1>
          <div className="btn-cont">
          <button class="btn" onClick={() => window.open( 'https://github.com/Thiru-cse/Social-Media-Frontend')}>Github  <IoLogoGithub /></button>
          <button class="btn" onClick={() => window.open( 'https://social-media-thiru.vercel.app/')}>View Site  <IoMdOpen/></button>
          </div>
          <p class="description">This is Fullstack MERN website made it as a Facebook.<br></br>This application is used to Post your thoughts.</p>
        </div>
        <div class="container">
          <div class="banner-img3">
          </div>
          <h1 class="name" style={{ color: "rgb(255, 65, 65)" }}>YouTube Clone</h1>
          <div className="btn-cont">
          <button class="btn" onClick={() => window.open( 'https://github.com/Thiru-cse')}>Github  <IoLogoGithub /></button>
          <button class="btn" onClick={() => window.open( 'https://thiru-youtube-clone.vercel.app/')}>View Site  <IoMdOpen/></button>
          </div>
          <p class="description">This website made it as a Youtube.<br></br>This application is used to watch videos.</p>
        </div>
        <div class="container">
          <div class="banner-img4">
          </div>
          <h1 class="name" style={{ color: "rgb(218, 181, 181)" }}>Weather Tracker</h1>
          <div className="btn-cont">
          <button class="btn" onClick={() => window.open( 'https://github.com/Thiru-cse/Weather-Site-using-API')}>Github  <IoLogoGithub /></button>
          <button class="btn" onClick={() => window.open( 'https://weather-site-using-api.vercel.app/')}>View Site  <IoMdOpen/></button>
          </div>
          <p class="description">This website made it as a Weather Tracker.<br></br>This application is used to know your Current Location Weather.</p>
        </div>

      </div>
    </>
  );
}
