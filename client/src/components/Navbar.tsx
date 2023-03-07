import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal'
import './Navbar.css'
import homeIcon from '../assets/home-alt-svgrepo-com.svg'
import gitIcon from '../assets/github-svgrepo-com.svg'
import linkedIcon from '../assets/linkedin-svgrepo-com.svg'
import resumeIcon from '../assets/resume-4-svgrepo-com.svg'

const Navbar = () => {
    useEffect(() => {
        const sr = ScrollReveal();
        
        sr.reveal('.navigation-list', {
            duration: 200,
            distance: '20px',
            easing: 'ease-out',
            origin: 'top',
            reset: false,
            viewFactor: 0.2,
            delay: 400,
        });

        sr.reveal('.first-icon', {
            duration: 200,
            distance: '20px',
            easing: 'ease-out',
            origin: 'top',
            reset: false,
            viewFactor: 0.2,
            delay: 800,
        });

        sr.reveal('.second-icon', {
            duration: 200,
            distance: '20px',
            easing: 'ease-out',
            origin: 'top',
            reset: false,
            viewFactor: 0.2,
            delay: 1000,
        });

        sr.reveal('.third-icon', {
            duration: 200,
            distance: '20px',
            easing: 'ease-out',
            origin: 'top',
            reset: false,
            viewFactor: 0.2,
            delay: 1200,
        });
    
    }, []);

      
    return (
        <>
            <nav className="navigation-bar">
                    <li className='special-li'><img className='home-bar-icon' src={homeIcon}></img></li>
                <ul className='navigation-list'>
                    <li>About</li>
                    <li>Experience </li>
                    <li>Projects </li>
                    <li>Contact </li>
                </ul>
                <section className='icon-section'>
                    <a className='hover-animation' href='https://github.com/GrassyAirplane' target='_blank'>
                        <img className="navigation-bar-icons first-icon" src={gitIcon} alt='GitHub icon' />
                    </a>
                    <a className='hover-animation' href='https://www.linkedin.com/in/euan-lim-013181235/' target='_blank'>
                        <img className="navigation-bar-icons second-icon" src={linkedIcon}></img>
                    </a>
                    <div className='hover-animation'>
                        <img className="navigation-bar-icons third-icon" src={resumeIcon}></img>
                    </div>
                </section>
            </nav>
        </>
    )
}

export default Navbar