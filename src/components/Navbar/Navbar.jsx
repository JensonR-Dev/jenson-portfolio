import Logo from '../../assets/Jenson-logo.svg'
import ResumePDF from "../../assets/Jenson-2024-Resume.pdf";
import "./Navbar.css"

export default function Navbar(){
    return <nav className="pf-navbar">
       <ul className='nav-ul'>
       <li><a href={ResumePDF} target='_black'><img src={Logo} alt="Jenson" width='50' height='50' className='nac-logo' /></a></li>
       <div className="rgt-nav">
         <li><a href="#about">About</a></li>
         <li><a href="#about">Education</a></li>
         <li><a href="#about">Work</a></li>
         <li><a href="#about">Services</a></li>
         <li><a href="#about">Projects</a></li>
         <li><a href="#about">Skills</a></li>
         <li><a href="#about" className='nav-cv'>View CV</a></li>
       </div>
       </ul>
    </nav>
}