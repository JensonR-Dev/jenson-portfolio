import { useState } from "react";
import Webdesign from "../assets/webdesign-icon.svg";
import { FaStar } from "react-icons/fa";
import UIdesign from "../assets/ui-design-icon.svg";
import Performance from "../assets/performance-icon.svg";
import Collaboraion from "../assets/collaboration-icon.svg";
import QA from "../assets/qa-icon.svg";
import BugFix from "../assets/bug-icon.svg";
import CMS from "../assets/cms-icon.svg";
import GraphicalDesign from "../assets/graphical-icon.svg";
import Responsive from "../assets/responsive-icon.svg";

const ServiceBox = ({ icon, title, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleReadMore = () => setIsExpanded(!isExpanded);

  const shortDesc = description.slice(0, 100) + "...";

  return (
    <div className="service-box">
      <img
        src={icon}
        alt={title}
        width="70"
        height="70"
        className="service-icon"
      />
      <h5 className="service-title">{title}</h5>
      <ul className="service-desc">
  {description.map((point, index) => (
    index < 1 || isExpanded ? <li key={index}><FaStar className="li-icon" />{point}</li> : null
  ))}
</ul>
      <button className="learn-more-cta" onClick={toggleReadMore}>
      {isExpanded ? "Read Less"  : "Read More " }
      </button>
    </div>
  );
};

export default function Services() {
  const serviceData = [
    {
      icon: Webdesign,
      title: "Webdesign",
      description:
        [
          "Designed, developed, and managed AstroVed and its partner websites, ensuring visually appealing, user-friendly interfaces.",
          "Focused on maintaining brand consistency and delivering seamless user experiences.",
        ],
    },
    {
      icon: UIdesign,
      title: "UI Design & Development",
      description:
        [
          "Created intuitive navigation, clear layouts, and responsive designs to enhance user experience.",
          "Developed modern UI components that improve website usability and engagement.",
        ],
    },
    {
        icon: Performance,
        title: "Performance Optimization",
        description:
        [
          "Improved website speed and efficiency by optimizing assets and reducing load times.",
          "Ensured smooth performance, boosting SEO rankings and reducing bounce rates.",
        ],
      },
      {
        icon: Collaboraion,
        title: "Collaboration",
        description:
        [
          "Worked with cross-functional teams including Frontend & Backend Developers, PHP, .NET, Mobile App, and Social Media teams.",
          "Collaborated with content creators and marketing professionals to implement design improvements.",
        ],
      },
      {
        icon: QA,
        title: "Quality Assurance (QA)",
        description:
        [
          "Conducted unit and regression testing to ensure cross-browser and cross-device compatibility.",
          "Identified and resolved functional and UI issues before deployment.",
        ],
      },
      {
        icon: BugFix,
        title: "Bug Fixing & Debugging ",
        description:
        [
          "Analyzed and resolved layout issues, scripting errors, and CSS styling problems.",
          "Utilized browser developer tools to debug and enhance website performance.",
        ],
      },
      {
        icon: CMS,
        title: "Content Management (CMS)",
        description:
        [
          "Managed and updated website content using WordPress Divi Theme to ensure relevance and accuracy.",
          "Created and maintained landing pages to support various campaigns.",
        ],
      },
      {
        icon: GraphicalDesign,
        title: "Graphic Design",
        description:
        [
          "Designed banners, icons, blog images, and social media graphics for better visual appeal.",
          "Created and sent newsletters using Zoho Campaigns to engage with customers.",
        ],
      },
      {
        icon: Responsive,
        title: "Responsive",
        description:
        [
          "Developed and maintained fully responsive designs to provide a seamless experience across all devices.",
          "Ensured mobile-first approach for better accessibility and engagement.",
        ],
      },
  ];

  return (
    <section className="pf-services" id="services">
      <div className="container">
        <h3 className="pf-h3-title">Services</h3>
        <h4 className="pf-h4-title">
        Key Roles & Responsibilities at <span>AstroVed.com</span>
        </h4>
        <div className="service-box-grid">
            {serviceData.map((service, index) => (
              <ServiceBox key={index} {...service} />
            ))}
        </div>
      </div>
    </section>
  );
}
