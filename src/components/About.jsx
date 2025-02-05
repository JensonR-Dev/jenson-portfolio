import ProfileImageAbout from "../assets/Jenson-Profile-About.jpg";
import ResumePDF from '../assets/Jenson-2024-Resume.pdf';

export default function About() {
  return (
    <section className="pf-about-section" id="about">
      <div className="container">
        <div className="pf-about-grid">
          <div className="pf-about-img">
            <img
              src={ProfileImageAbout}
              alt="Profile Image"
              width="600"
              height="600"
            />
          </div>
          <div className="pf-about-content">
            <h3 className="pf-h3-title about-title ">About Me</h3>
            <p className="about-desc">Creative and detail-oriented Web Designer with <strong>5 Years</strong> of experience translating client visions into innovative and visually appealing websites. Proficient in front-end development languages and tools such as <strong>HTML, CSS, JavaScript, React.js, Wordpress, Bootstrap, and Webflow</strong>, with a experience in design softwares like <strong>Abobe Photoshop, Illustrator and Figma</strong>. Adept at collaborating with cross-functional teams to deliver high-quality digital solutions that meet client objectives. Proven track record of managing multiple projects simultaneously, meeting tight deadlines, and exceeding client expectations. Passionate about staying abreast of industry trends and emerging technologies to consistently deliver cutting-edge designs.</p>
            <div className="about-exp-flex">
                <div className="about-experience">
                    <p className="exp-count">5+</p>
                    <p className="exp-count-sub">Years of Experiece</p>
                </div>
                <div className="about-website">
                    <p className="exp-count">200+</p>
                    <p className="exp-count-sub">Landing Pages Designed & Developed</p>
                </div>
            </div>
                        <div className='hero-cta-grid'>
                            <a href={ResumePDF} target='_blank' className='view-resume'><span>Download CV</span></a>
                            <a href="#contact" className='ghost-cta'>Contact Now</a>
                        </div>
          </div>
        </div>
      </div>
    </section>
  );
}
