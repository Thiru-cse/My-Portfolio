import "./contact.scss";
import { MdLocationOn, MdEmail } from 'react-icons/md'
import { FaTwitter,FaLinkedin } from 'react-icons/fa'



export default function Contact() {
  return (
    <>
    <div id="about">
        <section id="about" class="about">
          <div className="contact">
            <div className="section-titles">
              <h2 className="cont">Reach Out To Me</h2>
              <p className="sec-title">Contact</p>
              </div>
            </div>
            </section>
            <div className="parent">
            <div className="email">
              <div className="round"><MdLocationOn className="mdl" size={40} color="rgb(65, 201, 255)" /></div>
              <p className="loca">Location</p>
              <p className="sub">Madurai, India.</p>
              </div>
            <div className="email">
              <div className="round"><MdEmail className="mdl" size={40} color="rgb(65, 201, 255)" /></div>
              <p className="loca">E-Mail</p>
              <p className="sub" style={{ fontSize: "1rem", marginLeft: "4.5rem", textDecoration: "none" }}> 
              <a style={{ textDecoration: "none", color: "#18d26e" }} href="mailto:thiru.c.cse@gmail.com"> thiru.c.cse@gmail.com </a></p>
              </div>
            <div className="email">
              <div className="round"><FaTwitter className="mdl" size={40} color="rgb(65, 201, 255)" /></div>
              <p className="loca">Twitter</p>
              <p className="sub" style={{ fontSize: "1rem", marginLeft: "2.8rem", textDecoration: "none" }}> 
              <a style={{ textDecoration: "none", color: "#18d26e" }} href="https://twitter.com/Thiru_cse_"> thiru@cse </a></p>
              </div>
            <div className="email">
              <div className="round"><FaLinkedin className="mdl" size={40} color="rgb(65, 201, 255)" /></div>
              <p className="loca">LinkedIn</p>
              <p className="sub" style={{ fontSize: "1rem", marginLeft: "2.2rem", textDecoration: "none" }}> 
              <a style={{ textDecoration: "none", color: "#18d26e" }} href="https://www.linkedin.com/in/thiru-c-3085391a5/"> thiru-cse </a></p>
              </div>

            </div>
            </div>

            </>
  );

  }