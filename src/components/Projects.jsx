import TeamApp from "../assets/TeamApp-Project.jpg";
import ChatApp from "../assets/Chatapp-Project.jpg";
import LinkApp from "../assets/LInkup-Project.jpg";
import VetCare from "../assets/Vetcare-Project.jpg";

export default function Projects() {
  return (
    <section className="pf-latest-projects" id="projects">
      <div className="container">
        <h3 className="pf-h3-title">Projects</h3>
        <h4 className="pf-h4-title">
          My Latest <span>Personal Projects</span>
        </h4>
        <div className="pf-progect-grid">
            <div className="pf-project-box">
                <img src={TeamApp} alt="TeamApp" width='600' height='550' className="project-thumbnail" />
                <div className="platform-flex">
                    <p className="platform-title">UI Design</p>
                    <p className="platform-title">Web Design</p>
                    <p className="platform-title">Wireframe</p>
                    <p className="platform-title">Webflow</p>
                </div>
                <h5 className="project-title">
                    TeamApp - <span> A platform for managing your team efficiently.</span>
                </h5>
                <div className="project-cta">
                    <a href="https://www.behance.net/gallery/218791673/TeamApp-Website" target="_blank" className="behance-cta">Behance</a>
                    <a href="https://jenson-team-app.webflow.io/" target="_blank" className="live-cta">View Page</a>
                </div>
            </div>
            <div className="pf-project-box">
                <img src={ChatApp} alt="TeamApp" width='600' height='550' className="project-thumbnail" />
                <div className="platform-flex">
                    <p className="platform-title">UI Design</p>
                    <p className="platform-title">Web Design</p>
                    <p className="platform-title">Wireframe</p>
                    <p className="platform-title">Webflow</p>
                </div>
                <h5 className="project-title">
                    ChatApp - <span>A friendly platform to connect with people anytime, anywhere!</span>
                </h5>
                <div className="project-cta">
                    <a href="https://www.behance.net/gallery/206325195/ChatApp-Website-Design" target="_blank" className="behance-cta">Behance</a>
                    <a href="https://chatapp-9b1274.webflow.io/" target="_blank" className="live-cta">View Page</a>
                </div>
            </div>
            <div className="pf-project-box">
                <img src={LinkApp} alt="TeamApp" width='600' height='550' className="project-thumbnail" />
                <div className="platform-flex">
                    <p className="platform-title">UI Design</p>
                    <p className="platform-title">Web Design</p>
                    <p className="platform-title">Wireframe</p>
                </div>
                <h5 className="project-title">
                    Linkup - <span>A fun and friendly platform to connect with friends anytime!</span>
                </h5>
                <div className="project-cta">
                    <a href="https://www.behance.net/gallery/205274089/LiNKup-Messenger" target="_blank" className="behance-cta">Behance</a>
                </div>
            </div>
            <div className="pf-project-box">
                <img src={VetCare} alt="TeamApp" width='600' height='550' className="project-thumbnail" />
                <div className="platform-flex">
                    <p className="platform-title">UI Design</p>
                    <p className="platform-title">Web Design</p>
                    <p className="platform-title">Wireframe</p>
                </div>
                <h5 className="project-title">
                    VetCare - <span> A caring platform for your pet’s health and well-being!</span>
                </h5>
                <div className="project-cta">
                    <a href="https://www.behance.net/gallery/218804349/VetCare-Website" target="_blank" className="behance-cta">Behance</a>
                </div>
            </div>
        </div>
        <div className="view-more-cta">
        <a href="https://www.behance.net/jenson_r" target="_blank" className="learn-more-cta">View More of My Works</a>
        </div>
      </div>
    </section>
  );
}
