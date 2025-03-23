import Frontend from "../assets/frontend-tools.svg";
import Framwork from "../assets/Framework-tools.svg";
import Design from "../assets/Design-Tools.svg";
import CMS from "../assets/cms-tools.svg";
import DebugTools from "../assets/bug-icon.svg";
import Performance from "../assets/Performance-Tools.svg";

export default function Skills() {
  return (
    <section className="pf-skills" id="skills">
      <div className="container">
        <h3 className="pf-h3-title">Skills & Tools</h3>
        <div className="service-box-grid">
          <div className="service-box">
            <img
              src={Frontend}
              alt="Frontend"
              width="70"
              height="70"
              className="service-icon"
            />
            <h5 className="service-title">Core Frontend Languages</h5>
            <div className="platform-flex">
                    <p className="platform-title">HTML5</p>
                    <p className="platform-title">CSS3</p>
                    <p className="platform-title">JavaScript (ES6+)</p>
                </div>
          </div>
          <div className="service-box">
            <img
              src={Framwork}
              alt="Framework"
              width="70"
              height="70"
              className="service-icon"
            />
            <h5 className="service-title">Frontend Frameworks & CMS</h5>
            <div className="platform-flex">
                    <p className="platform-title">React.js + Vite</p>
                    <p className="platform-title">Bootstrap</p>
                    <p className="platform-title">Tailwind CSS</p>
                    <p className="platform-title">jQuery</p>
                </div>
          </div>
          <div className="service-box">
            <img
              src={Design}
              alt="Design"
              width="70"
              height="70"
              className="service-icon"
            />
            <h5 className="service-title">UI & Graphical Design Tools</h5>
            <div className="platform-flex">
                    <p className="platform-title">Figma</p>
                    <p className="platform-title">Abobe Photoshop</p>
                    <p className="platform-title">Abobe Illustrator</p>
                    <p className="platform-title">Abobe XD</p>
                    <p className="platform-title">Sketch </p>
                </div>
          </div>
          <div className="service-box">
            <img
              src={Performance}
              alt="Design"
              width="70"
              height="70"
              className="service-icon"
            />
            <h5 className="service-title">Web Performance & Optimization</h5>
            <div className="platform-flex">
            <p className="platform-title">PageSpeed Insights</p>
            <p className="platform-title">Lighthouse </p>
            <p className="platform-title">Zoho Projects</p>
            <p className="platform-title">Cross-Browser Compatibility</p>
            <p className="platform-title">Browserstack</p>
                </div>
          </div>
          <div className="service-box">
            <img
              src={CMS}
              alt="Design"
              width="70"
              height="70"
              className="service-icon"
            />
            <h5 className="service-title">CMS & Website Builders</h5>
            <div className="platform-flex">
            <p className="platform-title">Wordpress + Divi Builder</p>
            <p className="platform-title">Webflow</p>
                </div>
          </div>
          <div className="service-box">
            <img
              src={DebugTools}
              alt="Design"
              width="70"
              height="70"
              className="service-icon"
            />
            <h5 className="service-title">Debug & Version Control</h5>
            <div className="platform-flex">
            <p className="platform-title">Browser DevTools</p>
            <p className="platform-title">React Developer Tools</p>
            <p className="platform-title">GitHub</p>
                </div>
          </div>
        </div>
      </div>
    </section>
  );
}
