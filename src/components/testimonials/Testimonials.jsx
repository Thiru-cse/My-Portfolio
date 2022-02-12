import "./testimonials.scss";

export default function Testimonials() {
  
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
        </div>
      </section>
    </div>
      </>
  );
}