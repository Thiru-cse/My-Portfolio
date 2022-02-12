import "./works.scss";
import { TiHtml5 } from 'react-icons/ti'
import { SiCss3, SiJavascript, SiReact, SiBootstrap, SiNodedotjs, SiExpress, SiMongodb } from 'react-icons/si'
import { IoLogoNpm, IoLogoGithub } from 'react-icons/io'


export default function Works() {
  return (
    <>
    <div id="about">
      <section id="about" class="about">
        <div className="about-me container">
          <div className="section-title">
            <h2>Me?</h2>
            <p className="section-title">Let's get to know me</p>
          </div>

          <div class="row">
            <div className="content" data-aos="fade-left">
              <h3>FullStack Web Developer / MERN Stack</h3>
              <p className="para">
              I am a fresher in the corporate culture, but ready to accept the challenges, utilizing my skills, would like to work with a highly esteemed company which gives me a platform to use my expertise and skills for mutual growth and benefit of company and myself.
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi-chevron-right"></i>{" "}
                      <strong> <span>➤</span> Birthday:</strong> <span>07 Jun 1999</span>
                    </li>
                    <li>
                      <i class="bi-chevron-right"></i>{" "}
                      <strong> <span>➤</span> Phone:</strong>{" "}
                      <span>
                        <a href="tel:8056352201" style={{color: "rgb(65, 201, 255)", textDecoration: "none"}}>+91 8056352201</a>
                      </span>
                    </li>
                    <li>
                      <i class="bi bi-chevron-right"></i> <strong> <span>➤</span>   City:</strong>{" "}
                      <span>Madurai, India</span>
                    </li>
                  </ul>
                </div>
                <div class="col-lg-6">
                  <ul>
                    <li>
                      <i class="bi bi-chevron-right"></i>{" "}
                      <strong> <span>➤</span> Degree:</strong>{" "}
                      <span>Computer Engineering</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="para">
              I Started off my self-learning journey with online tutorials Google, YouTube, Learnmall, SoloLearn, etc and take a step further and Enrolled in the GUVI IIT MADRAS Fullstack developer Nanodegree Program which involved extensive programming and real world projects. Later, I learned MERN Stack From Guvi and built an Website using React JS, Node, Express Js, MongoDB.
              </p>
            </div>
          </div>
          <div className="section-title">
            <h2>My Skills</h2>
            <div className="skill">
              <div className="skill-cintainer" style={{ backgroundColor: "rgb(148, 89, 21)" }}>HTMl
                <TiHtml5 color="orange" size={35} />
                </div>
              <div className="skill-cintainer" style={{ backgroundColor: "rgb(12, 58, 128)", gap: "3px" }}>CSS 
                <SiCss3 color="white" size={30} />
                </div>
              <div className="skill-cintainer" style={{ backgroundColor: "rgb(133, 134, 38)", gap: "3px", fontSize: "1rem" }}>JavaScript 
                <SiJavascript color="rgb(245, 221, 7)" size={25} />
                </div>
              <div className="skill-cintainer" style={{ backgroundColor: "rgb(87, 70, 105)", gap: "3px", fontSize: "1rem" }}>Bootstrap 
                <SiBootstrap color="#080135" size={30} />
                </div>
              <div className="skill-cintainer" style={{ backgroundColor: "rgb(28, 92, 97)", gap: "3px", fontSize: "1rem" }}>React 
                <SiReact color="#61DBFB" size={27} />
                </div>
              <div className="skill-cintainer" style={{ backgroundColor: "rgb(61, 21, 21)", gap: "3px", fontSize: "1rem" }}>Node 
                <SiNodedotjs color="#8f8f8f" size={30} />
                </div>
              <div className="skill-cintainer" style={{ backgroundColor: "rgb(28, 61, 21)", gap: "3px", fontSize: "1rem" }}>Express 
                <SiExpress color="#9da39f" size={30} />
                </div>
              <div className="skill-cintainer" style={{ backgroundColor: "rgb(90, 219, 64)", gap: "3px", fontSize: "1rem" }}>Mongodb 
                <SiMongodb color="#103d0e" size={30} />
                </div>
              <div className="skill-cintainer" style={{ backgroundColor: "rgb(185, 0, 0)", gap: "3px", fontSize: "1rem" }}> 
                <IoLogoNpm color="#fffffff" size={50} />
                </div>
              <div className="skill-cintainer" style={{ backgroundColor: "rgb(133, 105, 105)", gap: "3px", fontSize: "1rem" }}>Github 
                <IoLogoGithub color="#171515" size={30} />
                </div>
              
              
                </div>
          </div>
        </div>
      </section>
    </div>
      </>
  );
}
