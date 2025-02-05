import { useState } from "react";
import Webdesign from "../assets/webdesign-icon.svg"
import UIdesign from "../assets/ui-design-icon.svg"
import Performance from "../assets/performance-icon.svg"
import Collaboraion from "../assets/collaboration-icon.svg"
import QA from "../assets/qa-icon.svg"
import BugFix from "../assets/bug-icon.svg"
import CMS from "../assets/cms-icon.svg"
import GraphicalDesign from "../assets/graphical-icon.svg"
import Responsive from "../assets/responsive-icon.svg"

export default function Services(){
    const [hide, setHide] = useState(false);
    function handleClick(){
        setHide(prevHide => !prevHide);    
    }
    return <section className="pf-services" id="services">
        <div className="container">
        <h3 className="pf-h3-title">Services</h3>
        <div className="service-box-grid">
            <div className="service-box">
                <img src={Webdesign} alt="Webdesign" width='70' height='70' className="service-icon" />
                <h5 className="service-title">Webdesign</h5>
                <p className={hide ? "service-desc active" : "service-desc"} >Responsible for designing, developing, and managing AstroVed and its partner websites. My focus was on creating visually appealing, user-friendly sites that aligned with the company’s brand identity</p>
                <button className="learn-more-cta" onClick={handleClick}>Learn More</button>
            </div>
            <div className="service-box">
                <img src={UIdesign} alt="Webdesign" width='70' height='70' className="service-icon" />
                <h5 className="service-title">Webdesign</h5>
                <p className={hide ? "service-desc active" : "service-desc"} >Responsible for designing, developing, and managing AstroVed and its partner websites. My focus was on creating visually appealing, user-friendly sites that aligned with the company’s brand identity</p>
                <button className="learn-more-cta" onClick={handleClick}>Learn More</button>
            </div>
            <div className="service-box">
                <img src={Performance} alt="Webdesign" width='70' height='70' className="service-icon" />
                <h5 className="service-title">Webdesign</h5>
                <p className={hide ? "service-desc active" : "service-desc"} >Responsible for designing, developing, and managing AstroVed and its partner websites. My focus was on creating visually appealing, user-friendly sites that aligned with the company’s brand identity</p>
                <button className="learn-more-cta" onClick={handleClick}>Learn More</button>
            </div>
            <div className="service-box">
                <img src={Collaboraion} alt="Webdesign" width='70' height='70' className="service-icon" />
                <h5 className="service-title">Webdesign</h5>
                <p className={hide ? "service-desc active" : "service-desc"} >Responsible for designing, developing, and managing AstroVed and its partner websites. My focus was on creating visually appealing, user-friendly sites that aligned with the company’s brand identity</p>
                <button className="learn-more-cta" onClick={handleClick}>Learn More</button>
            </div>
            <div className="service-box">
                <img src={QA} alt="Webdesign" width='70' height='70' className="service-icon" />
                <h5 className="service-title">Webdesign</h5>
                <p className={hide ? "service-desc active" : "service-desc"} >Responsible for designing, developing, and managing AstroVed and its partner websites. My focus was on creating visually appealing, user-friendly sites that aligned with the company’s brand identity</p>
                <button className="learn-more-cta" onClick={handleClick}>Learn More</button>
            </div>
            <div className="service-box">
                <img src={BugFix} alt="Webdesign" width='70' height='70' className="service-icon" />
                <h5 className="service-title">Webdesign</h5>
                <p className={hide ? "service-desc active" : "service-desc"} >Responsible for designing, developing, and managing AstroVed and its partner websites. My focus was on creating visually appealing, user-friendly sites that aligned with the company’s brand identity</p>
                <button className="learn-more-cta" onClick={handleClick}>Learn More</button>
            </div>
            <div className="service-box">
                <img src={CMS} alt="Webdesign" width='70' height='70' className="service-icon" />
                <h5 className="service-title">Webdesign</h5>
                <p className={hide ? "service-desc active" : "service-desc"} >Responsible for designing, developing, and managing AstroVed and its partner websites. My focus was on creating visually appealing, user-friendly sites that aligned with the company’s brand identity</p>
                <button className="learn-more-cta" onClick={handleClick}>Learn More</button>
            </div>
            <div className="service-box">
                <img src={GraphicalDesign} alt="Webdesign" width='70' height='70' className="service-icon" />
                <h5 className="service-title">Webdesign</h5>
                <p className={hide ? "service-desc active" : "service-desc"} >Responsible for designing, developing, and managing AstroVed and its partner websites. My focus was on creating visually appealing, user-friendly sites that aligned with the company’s brand identity</p>
                <button className="learn-more-cta" onClick={handleClick}>Learn More</button>
            </div>
            <div className="service-box">
                <img src={Responsive} alt="Webdesign" width='70' height='70' className="service-icon" />
                <h5 className="service-title">Webdesign</h5>
                <p className={hide ? "service-desc active" : "service-desc"} >Responsible for designing, developing, and managing AstroVed and its partner websites. My focus was on creating visually appealing, user-friendly sites that aligned with the company’s brand identity</p>
                <button className="learn-more-cta" onClick={handleClick}>Learn More</button>
            </div>
        </div>
        </div>
    </section>
}