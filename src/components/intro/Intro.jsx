import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Developer", "Designer", "Fullstack Developer"],
    });
  }, []);

  return (
    <>
    <div className="intro" id="intro">
      <div className="left">
          <h2>Hi There, I'm ~</h2>
          <h1>Thirupathi</h1>
          <h3>
            I am a <span ref={textRef}></span>
          </h3>
          <p>A self-taught developer with an interest in Computer Science.</p>
            <div className="container">
            {/* <a href="https://github.com/abdulrcs"> */}
            <button className="icon">
                <FaGithub size={25} color="#18d26e" />
                <span style={{fontSize: "18px", color: "white", fontWeight: "bold"}}>Github</span>
            </button>
            <button className="icon">
                <FaLinkedin size={25} color="#18d26e" />
                <span style={{fontSize: "18px", color: "white", fontWeight: "bold"}}>LinkedIn</span>
            </button>
            <button className="icon">
                <FaEnvelope size={20} color="#18d26e" />
                <span style={{fontSize: "18px", color: "white", fontWeight: "bold"}}>E-Mail</span>
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
