import gitIcon from '../assets/github-svgrepo-com.svg'
import linkedIcon from '../assets/linkedin-svgrepo-com.svg'
import resumeIcon from '../assets/resume-4-svgrepo-com.svg'
import './Footer.css'

const Footer = () => {

    const resumeClick = () => {
   
        const link = document.createElement("a");
        link.href = "/src/resume/Resume - Euan Lim.pdf"; // replace with the path to your resume file
        link.target = "_blank";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    
    }

    return (
        <footer className='footer'>
            <p className='footer-p'><span className='special-text-span'>Built with</span> Vite & ScrollRevealJs</p>
            <section className='footer-icon-section '>
                <a className='hover-animation' href='https://github.com/GrassyAirplane' target='_blank'>
                    <img className="navigation-bar-icons" src={gitIcon} alt='GitHub icon' />
                </a>
                <a className='hover-animation' href='https://www.linkedin.com/in/euan-lim-013181235/' target='_blank'>
                    <img className="navigation-bar-icons" src={linkedIcon}></img>
                </a>
                <div className='hover-animation' onClick={resumeClick}>
                    <img className="navigation-bar-icons" src={resumeIcon}></img>
                </div>
            </section>           
        </footer>
    )
}

export default Footer