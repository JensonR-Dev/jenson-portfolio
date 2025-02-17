import ProfileImage from "../assets/Jenson-Profile.jpg";
import ProfileImageResp from "../assets/Jenson-Profile-Resp.jpg";
import ResumePDF from "../assets/Jenson-2024-Resume.pdf";
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
              I&rsquo;m an experienced Web Designer with{" "}
              <strong>5 years</strong> of expertise in designing, developing,
              and launching 100+ websites and landing pages, following the
              latest design trends to create impactful digital experiences.
            </p>
            <div className="hero-cta-grid">
              <a href={ResumePDF} target="_blank" className="view-resume">
                <span>Download CV</span>
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
                srcset={ProfileImageResp}
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
