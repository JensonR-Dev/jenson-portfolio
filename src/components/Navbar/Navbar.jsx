import { useState, useEffect } from "react";
import Logo from "../../assets/Jenson-logo.svg";
import ResumePDF from "../../assets/Jenson-Resume-Online-2025.pdf";
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

  // Function to close menu when a link is clicked
  const closeMenu = () => setMenuOpen(false);

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

            {/* Desktop Navigation */}
            <div className="rgt-nav desktop">
              <li><a href="#about">About</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#experience">Work</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href={ResumePDF} className="nav-cv" target="_blank">View CV</a></li>
            </div>

            {/* Hamburger Menu */}
            <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
            </button>
          </ul>

          {/* Mobile Navigation */}
          <div className={`rgt-nav mobile ${menuOpen ? "active" : ""}`}>
            <li><a href="#about" onClick={closeMenu}>About</a></li>
            <li><a href="#education" onClick={closeMenu}>Education</a></li>
            <li><a href="#experience" onClick={closeMenu}>Work</a></li>
            <li><a href="#services" onClick={closeMenu}>Services</a></li>
            <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
            <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
            <li><a href={ResumePDF} className="nav-cv" target="_blank" onClick={closeMenu}>View CV</a></li>
          </div>
        </nav>
      </div>
    </div>
  );
}
