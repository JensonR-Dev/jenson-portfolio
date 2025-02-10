import ProfileImage from "../assets/Jenson-Profile.jpg";
import ResumePDF from "../assets/Jenson-2024-Resume.pdf";
import Close from "../assets/close-icon.svg";
import Behance from "../assets/contact-behance-icon.svg";
import Navbar from "./Navbar/Navbar";
import { useRef, useState } from "react";

export default function Header() {
  const [contact, setContact] = useState(false);
  const dialogRef = useRef(null);

  function handleClick() {
    setContact(true);
    setTimeout(() => setContact(false), 0);
    dialogRef.current?.showModal();
  }
  console.log(contact);

  return (
    <header className="portfolio-hero">
      <div className="container">
        <Navbar />
        <dialog className="contact-dialog" ref={dialogRef}>
          <div className="pf-contact-popup">
            <h3 className="pf-h3-title">Contact Details</h3>
            <div className="pf-contact-grid">
              <p className="pf-contact-title">Phone</p>
              <a
                href="tel:+91 8124771225"
                class="pf-contact-details"
                target="_blank"
              >
                +91 8124771225
              </a>
              <p className="pf-contact-title">Email</p>
              <a
                href="mailto:jenson.r1598@gmail.com"
                class="pf-contact-details"
                target="_blank"
              >
                jenson.r1598@gmail.com
              </a>
              <div class="pf-conact-cta-flex">
                <a href="https://www.behance.net/jenson_r" target="_blank" className="contact-behnace"><img src={Behance} alt="Behance" width='40' height='40' /></a>
                <a href="http://localhost:5173/jenson-portfolio/src/assets/Jenson-2024-Resume.pdf" target="_blank" className="contact-cv">View CV</a>
              </div>
            </div>
          </div>
          <form method="dialog" className="pf-close-cta">
            <button className="popup-close">
              <img src={Close} alt="X" />
            </button>
          </form>
        </dialog>
        <div className="pf-head-grid">
          <div className="pf-head-cnt">
            <p className="greeting-msg">Greetings </p>
            <h1>
              I&rsquo;m <span className="hero-name">Jenson R</span>
            </h1>
            <h2>Web Designer & Front-end Developer</h2>
            <p className="hero-description">
              I&rsquo;m an experienced Web Designer with{" "}
              <strong>5 years</strong> of expertise in designing, developing,
              and launching 100+ websites and landing pages, following the
              latest design trends to create impactful digital experiences.
            </p>
            <div className="hero-cta-grid">
              <a href={ResumePDF} target="_blank" className="view-resume">
                <span>Download CV</span>
              </a>
              <a href="#contact" className="ghost-cta" onClick={handleClick}>
                Contact Now
              </a>
            </div>
          </div>
          <div className="pf-header-profile">
            <img
              src={ProfileImage}
              alt="Profile Image"
              width="650"
              height="496"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
