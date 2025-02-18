import { useState, useEffect } from "react";
import Logo from "../../assets/Jenson-logo.svg";
import ResumePDF from "../../assets/Jenson-2024-Resume.pdf";
import { FiMenu, FiX } from "react-icons/fi"; // Importing icons
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`pf-navbar-main ${scrolled ? "scroll" : ""}`}>
      <div className="container">
        <nav className="pf-navbar">
          <ul className="nav-ul">
            {/* Logo */}
            <li>
              <a href={ResumePDF} target="_blank">
                <img src={Logo} alt="Jenson" width="50" height="50" className="nav-logo" />
              </a>
            </li>

            {/* Desktop Navigation - Visible on screens above 767px */}
            <div className="rgt-nav desktop">
              <li><a href="#about">About</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#experience">Work</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href={ResumePDF} className="nav-cv" target="_blank">View CV</a></li>
            </div>

            {/* Hamburger Menu - Visible on screens below 767px */}
            <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
            </button>
          </ul>

          {/* Mobile Navigation - Visible only on screens below 767px */}
          <div className={`rgt-nav mobile ${menuOpen ? "active" : ""}`}>
            <li><a href="#about">About</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#experience">Work</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href={ResumePDF} className="nav-cv"  target="_blank">View CV</a></li>
          </div>
        </nav>
      </div>
    </div>
  );
}
