import Logo from "../../assets/Jenson-logo.svg";
import ResumePDF from "../../assets/Jenson-2024-Resume.pdf";
import { useState, useEffect } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div  className={`pf-navbar-main ${scrolled ? "scroll" : ""}`}>
      <div className="container">
      <nav className="pf-navbar">
        <ul className="nav-ul">
          <li>
            <a href={ResumePDF} target="_black">
              <img
                src={Logo}
                alt="Jenson"
                width="50"
                height="50"
                className="nac-logo"
              />
            </a>
          </li>
          <div className="rgt-nav">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#education">Education</a>
            </li>
            <li>
              <a href="#experience">Work</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#about" className="nav-cv">
                View CV
              </a>
            </li>
          </div>
        </ul>
      </nav>
      </div>
    </div>
  );
}
