import ProfileImageAbout from "../assets/Jenson-Profile-About.jpg";
import ProfileImageAboutResp from "../assets/Jenson-Profile-About-Responsive.jpg";
import ResumePDF from "../assets/Jenson-2024-Resume.pdf";

export default function About() {
  return (
    <section className="pf-about-section" id="about">
      <div className="container">
        <div className="pf-about-grid">
          <div className="pf-about-img">
            <picture>
              <source
                media="(max-width:675px)"
                srcSet={ProfileImageAboutResp}
                className="about-profile-img-resp"
              />
              <img
                src={ProfileImageAbout}
                alt="About Image"
                width="343"
                height="386"
                className="about-profile-img"
              />
            </picture>
          </div>
          <div className="pf-about-content">
            <h3 className="pf-h3-title about-title ">About Me</h3>
            <p className="about-desc">
            <b>Creative & Detail-Oriented Web Designer | Front-end Developer</b>
            </p>
            <p className="about-desc">
            I’m <b>Jenson R</b>, a <b>Web Designer & Front-end Developer</b> with <b>5+ years of experience</b> translating client visions into visually appealing, high-performing websites. I specialize in <b>front-end development</b> using HTML, CSS, JavaScript, React.js, WordPress, Bootstrap, and Webflow, along with expertise in <b>design tools</b> like Adobe Photoshop, Illustrator, and Figma.
            </p>
            <p className="about-desc">With a <b>proven track record of 200+ landing pages</b> designed and developed, I excel at creating seamless, user-friendly experiences that align with business goals. I collaborate closely with cross-functional teams to deliver high-quality digital solutions, ensuring every project meets and exceeds expectations.</p>
            <p className="about-desc">I’m passionate about staying ahead of the curve, continuously exploring <b>emerging technologies and design trends</b> to craft cutting-edge, innovative digital experiences.</p>
            <div className="about-exp-flex">
              <div className="about-experience">
                <p className="exp-count">5+</p>
                <p className="exp-count-sub">Years of Experiece</p>
              </div>
              <div className="about-website">
                <p className="exp-count">200+</p>
                <p className="exp-count-sub">
                  Landing Pages Designed & Developed
                </p>
              </div>
            </div>
            <div className="hero-cta-grid">
              <a href={ResumePDF} target="_blank" className="view-resume">
                <span>Download My CV</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
