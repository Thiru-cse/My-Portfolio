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
          <button class="btn" onClick={() => window.open( 'https://github.com/Thiru-cse')}>Github  <IoLogoGithub /></button>
          <button class="btn">View Site  <IoMdOpen/></button>
          </div>
          <p class="description">This is Fullstack MERN website made it as a Ecommerce.<br></br>This application is used to sell our products.</p>
        </div>
        <div class="container">
          <div class="banner-img2">
          </div>
          <h1 class="name" style={{ color: "rgb(136, 255, 181)" }}>Blog Website</h1>
          <div className="btn-cont">
          <button class="btn" onClick={() => window.open( 'https://github.com/Thiru-cse')}>Github  <IoLogoGithub /></button>
          <button class="btn">View Site  <IoMdOpen/></button>
          </div>
          <p class="description">This is Fullstack MERN website made it as a Ecommerce.<br></br>This application is used to sell our products.</p>
        </div>
        <div class="container">
          <div class="banner-img">
          </div>
          <h1 class="name" style={{ color: "rgb(65, 201, 255)" }}>E-Commerce</h1>
          <div className="btn-cont">
          <button class="btn" onClick={() => window.open( 'https://github.com/Thiru-cse')}>Github  <IoLogoGithub /></button>
          <button class="btn">View Site  <IoMdOpen/></button>
          </div>
          <p class="description">This is Fullstack MERN website made it as a Ecommerce.<br></br>This application is used to sell our products.</p>
        </div>
        <div class="container">
          <div class="banner-img3">
          </div>
          <h1 class="name" style={{ color: "rgb(255, 65, 65)" }}>YouTube Clone</h1>
          <div className="btn-cont">
          <button class="btn" onClick={() => window.open( 'https://github.com/Thiru-cse')}>Github  <IoLogoGithub /></button>
          <button class="btn">View Site  <IoMdOpen/></button>
          </div>
          <p class="description">This is Fullstack MERN website made it as a Ecommerce.<br></br>This application is used to sell our products.</p>
        </div>

      </div>
    </>
  );
}
