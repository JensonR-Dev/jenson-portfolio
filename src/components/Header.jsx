import ProfileImage from '../assets/Jenson-Profile.jpg';
import ResumePDF from '../assets/Jenson-2024-Resume.pdf';
import Navbar from './Navbar/Navbar';

export default function Header() {
  return (
    <header className="portfolio-hero">
      <div className="container">
        <Navbar />
        <div className="pf-head-grid">
          <div className="pf-head-cnt">
            <p className='greeting-msg'>Greetings </p>
            <h1>I&rsquo;m <span className='hero-name'>Jenson R</span></h1>
            <h2>Web Designer & Front-end Developer</h2>
            <p className='hero-description'>I&rsquo;m an experienced Web Designer with <strong>5 years</strong> of expertise in designing, developing, and launching 100+ websites and landing pages, following the latest design trends to create impactful digital experiences.</p>
            <div className='hero-cta-grid'>
                <a href={ResumePDF} target='_blank' className='view-resume'><span>Download CV</span></a>
                <a href="#contact" className='ghost-cta'>Contact Now</a>
            </div>
          </div>
          <div className="pf-header-profile">
            <img src={ProfileImage} alt="Profile Image" width='650' height='496' />
          </div>
        </div>
      </div>
    </header>
  );
}
