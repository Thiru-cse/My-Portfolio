import "./testimonials.scss";
import {  SiReact, SiBootstrap, SiNodedotjs } from 'react-icons/si'


export default function Testimonials() {
  
  return (
<>
    <div className="testimonials">
          <div className="section-title">
            <h2 className="head">Projects</h2>
              <div className="card">
                <div>
                  
                </div>
                <div className="info">
                  <div className="logo">
                  <h2>E-Commerce</h2>
                  <div className="logy">
                  <h2><SiReact color="#61DBFB" size={27}/></h2>
                  <h2><SiBootstrap/></h2>
                  </div>
                  </div>
                  <div className="side">
                  <h3 className="ins" style={{ backgroundColor: "rgb(14, 46, 54)" }}>React<SiReact color="#61DBFB" size={22}/></h3>
                  <h3 className="ins" style={{ backgroundColor: "rgb(41, 6, 6)" }}>Node<SiNodedotjs color="#8f8f8f" size={22}/></h3>
                  </div>
                  <p>Lorem ipsum dolor minus vero iure eveniet soluta. Voluptates a, quasi impedit fugiat veritatis vero quis ratione voluptas, mollitia assumenda quibusdam!</p>
                </div>
              </div>
            </div>
          </div>
      </>
  );
}