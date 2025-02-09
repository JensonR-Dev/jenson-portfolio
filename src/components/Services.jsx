import { useState } from "react";
import Webdesign from "../assets/webdesign-icon.svg";
import UIdesign from "../assets/ui-design-icon.svg";
import Performance from "../assets/performance-icon.svg";
import Collaboraion from "../assets/collaboration-icon.svg";
import QA from "../assets/qa-icon.svg";
import BugFix from "../assets/bug-icon.svg";
import CMS from "../assets/cms-icon.svg";
import GraphicalDesign from "../assets/graphical-icon.svg";
import Responsive from "../assets/responsive-icon.svg";

export default function Services() {
  return (
    <section className="pf-services" id="services">
      <div className="container">
        <h3 className="pf-h3-title">Services</h3>
        <h4 className="pf-h4-title">
          Roles and Responsibilities on <span>AstroVed.com</span>
        </h4>
        <div className="service-box-grid">
          <div className="service-box">
            <img
              src={Webdesign}
              alt="Webdesign"
              width="70"
              height="70"
              className="service-icon"
            />
            <h5 className="service-title">Webdesign</h5>
            <p className="service-desc">
              Responsible for designing, developing, and managing AstroVed and
              its partner websites. My focus was on creating visually appealing,
              user-friendly sites that aligned with the company’s brand identity
            </p>
          </div>
          <div className="service-box">
            <img
              src={UIdesign}
              alt="Webdesign"
              width="70"
              height="70"
              className="service-icon"
            />
            <h5 className="service-title">UI Design & Development</h5>
            <p className="service-desc">
              Responsible for enhancing the overall user experience by creating
              intuitive navigation, clear layouts, and responsive designs.
            </p>
          </div>
          <div className="service-box">
            <img
              src={Performance}
              alt="Webdesign"
              width="70"
              height="70"
              className="service-icon"
            />
            <h5 className="service-title">Performance Optimization</h5>
            <p className="service-desc">
              Responsible for improving a website’s speed, responsiveness, and
              overall user experience by reducing load times, optimizing assets,
              and enhancing efficiency. A fast website not only improves SEO
              rankings but also keeps users engaged and reduces bounce rates.
            </p>
          </div>
          <div className="service-box">
            <img
              src={Collaboraion}
              alt="Webdesign"
              width="70"
              height="70"
              className="service-icon"
            />
            <h5 className="service-title">Collaboration</h5>
            <p className="service-desc">
              Worked closely by collaborating with cross-functional teams,
              including both frontend and backend developers, content creators,
              and marketing professionals. Together, we implemented design
              changes and improvements. Some of the teams I worked with included
              PHP, .NET, Mobile App development, and Social Media Campaign
              teams.
            </p>
          </div>
          <div className="service-box">
            <img
              src={QA}
              alt="Webdesign"
              width="70"
              height="70"
              className="service-icon"
            />
            <h5 className="service-title">Quality Assurance (QA)</h5>
            <p className="service-desc">
              Conducted thorough testing to ensure that the websites functioned
              correctly across various browsers and devices by conducting Unit
              and regression testing.
            </p>
          </div>
          <div className="service-box">
            <img
              src={BugFix}
              alt="Webdesign"
              width="70"
              height="70"
              className="service-icon"
            />
            <h5 className="service-title">Bug Fix</h5>
            <p className="service-desc">
              Thoroughly understand the issue is it a layout problem, a
              scripting error, a CSS styling issue, or something else? Utilize
              browser developer tools to inspect elements on the page, aiding in
              the identification of incorrect CSS rules, JavaScript errors, or
              malformed HTML.
            </p>
          </div>
          <div className="service-box">
            <img
              src={CMS}
              alt="Webdesign"
              width="70"
              height="70"
              className="service-icon"
            />
            <h5 className="service-title">Content Management (CMS)</h5>
            <p className="service-desc">
              Manage to updated website content, ensuring accuracy and
              relevance. Utilized the WordPress Divi theme to update landing
              pages.
            </p>
          </div>
          <div className="service-box">
            <img
              src={GraphicalDesign}
              alt="Webdesign"
              width="70"
              height="70"
              className="service-icon"
            />
            <h5 className="service-title">Graphic Design</h5>
            <p className="service-desc">
              Created visual elements such as banners, icons, blog and article
              images, social media campaign images, design and send newsletters
              to customers using zoho campaigns, and graphics to enhance the
              overall aesthetics of the website.
            </p>
          </div>
          <div className="service-box">
            <img
              src={Responsive}
              alt="Webdesign"
              width="70"
              height="70"
              className="service-icon"
            />
            <h5 className="service-title">Responsive </h5>
            <p className="service-desc">
              Responsible for designing, developing, and managing AstroVed and
              its partner websites. My focus was on creating visually appealing,
              user-friendly sites that aligned with the company’s brand identity
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
