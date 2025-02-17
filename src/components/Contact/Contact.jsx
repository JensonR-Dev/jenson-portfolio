import Close from "../../assets/close-icon.svg";
import "./Contact.css";
import Behance from "../../assets/contact-behance-icon.svg";
import { useRef, useState, useEffect } from "react";

export default function Contact() {
  const [contact, setContact] = useState(false);
  const dialogRef = useRef(null);

  function handleClick() {
    setContact(true);
    setTimeout(() => setContact(false), 0);
    dialogRef.current?.showModal();
  }
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
    <>
      <dialog className="contact-dialog" ref={dialogRef}>
        <div className="pf-contact-popup">
          <h3 className="pf-h3-title">Contact Details</h3>
          <div className="pf-contact-grid">
            <p className="pf-contact-title">Phone</p>
            <a
              href="tel:+91 8124771225"
              className="pf-contact-details"
              target="_blank"
            >
              +91 8124771225
            </a>
            <p className="pf-contact-title">Email</p>
            <a
              href="mailto:jenson.r1598@gmail.com"
              className="pf-contact-details"
              target="_blank"
            >
              jenson.r1598@gmail.com
            </a>
            <div className="pf-conact-cta-flex">
              <a
                href="https://www.behance.net/jenson_r"
                target="_blank"
                className="contact-behnace"
              >
                <img src={Behance} alt="Behance" width="40" height="40" />
              </a>
              <a
                href="http://localhost:5173/jenson-portfolio/src/assets/Jenson-2024-Resume.pdf"
                target="_blank"
                className="contact-cv"
              >
                View CV
              </a>
            </div>
          </div>
        </div>
        <form method="dialog" className="pf-close-cta">
          <button className="popup-close">
            <img src={Close} alt="X" />
          </button>
        </form>
      </dialog>
      <button onClick={handleClick} className={`ghost-cta ${scrolled ? "bottom" : ""}`}>
        Contact Now
      </button>
    </>
  );
}
