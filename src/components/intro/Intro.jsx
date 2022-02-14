import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { IoMdOpen } from 'react-icons/io'

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: [ "Web Developer", "Web Designer", "Fullstack Developer", " Quick Learner", "Frontend Developer", "Dreamer", "Creator"],
    });
  }, []);

  return (
    <>
    <div className="intro" id="intro">
      <div className="left">
          <h2>Hi There, I'm ~</h2>
          <h1>Thirupathi</h1>
          <h3>
            I am a <span ref={textRef}></span><br></br>
          </h3>
          <p>A self-taught developer with an interest in Computer Science.</p>
            <button style={{ backgroundColor: "#0e0e0e", border: "none", color: "rgb(255, 145, 213)", margin: "3rem", padding: "8px", justifyContent: "center", alignItems: "center", alignContent: "center", display: "flex", gap: "5px", borderRadius: "7px", cursor: "pointer", fontWeight: 700 }}>View My CV. <IoMdOpen size={22} color="rgb(65, 201, 255)"/></button>
          
            <div className="container">
            <button className="icon" onClick={() => window.open( 'https://github.com/Thiru-cse')}>
                <FaGithub size={25} color="rgb(65, 201, 255)" />
                <span style={{fontSize: "15px", color: "white", fontWeight: "bold"}}>Github</span>
            </button>
            <button className="icon" onClick={() => window.open( 'https://www.linkedin.com/in/thiru-c-3085391a5/')}>
                <FaLinkedin size={25} color="rgb(65, 201, 255)" />
                <span style={{ fontSize: "15px", color: "white", fontWeight: "bold"}}>LinkedIn</span>
            </button>
            </div>

                </div>
      <div className="right">
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
    </>
  );
}
