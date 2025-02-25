import ProfileImage from "../assets/Jenson-Profile.jpg";
import ProfileImageResp from "../assets/Jenson-Profile-Resp.jpg";
import ResumePDF from "../assets/Jenson-Resume-Online-2025.pdf";
import Contact from "./Contact/Contact";

export default function Header() {
  return (
    <header className="portfolio-hero">
      <div className="container">
        <div className="pf-head-grid">
          <div className="pf-head-cnt">
            <p className="greeting-msg">Greetings </p>
            <h1>
              I&rsquo;m <span className="hero-name">Jenson R</span>
            </h1>
            <h2>Web Designer & Front-end Developer</h2>
            <p className="hero-description">
              I&rsquo;m a passionate Web Designer with <b>5 years of experience</b> in designing, developing, and launching <b>200+ websites and landing pages</b>. I specialize in crafting modern, user-friendly interfaces while following the latest design trends to create <b>impactful digital experiences</b>.
            </p>
            <div className="hero-cta-grid">
              <a href={ResumePDF} target="_blank" className="view-resume">
                <span>Download My CV </span>
              </a>
              <Contact />
            </div>
          </div>
          <div className="pf-header-profile">
            <div className="profile-profile-flot">
              <span className="image-skills react-sk">React.Js</span>
              <span className="image-skills web-sk">Web Design</span>
              <span className="image-skills front-sk">Frontend Developer</span>
              <span className="image-skills ui-sk">UI Developer</span>
            </div>
            <picture>
              <source
                media="(max-width:675px)"
                srcSet={ProfileImageResp}
                className="pf-profile-img-resp"
              />
              <img
                src={ProfileImage}
                alt="Profile Image"
                width="572"
                height="496"
                className="pf-profile-img"
              />
            </picture>
          </div>
        </div>
      </div>
    </header>
  );
}
