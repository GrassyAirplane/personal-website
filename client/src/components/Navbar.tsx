import { useState, useEffect } from 'react'
import ScrollReveal from 'scrollreveal'
import './Navbar.css'
import homeIcon from '../assets/home-alt-svgrepo-com.svg'
import gitIcon from '../assets/github-svgrepo-com.svg'
import linkedIcon from '../assets/linkedin-svgrepo-com.svg'
import resumeIcon from '../assets/resume-4-svgrepo-com.svg'
import hamburgerIcon from '../assets/hamburger-svgrepo-com.svg'
import Swal from 'sweetalert2'
import resume from '../assets/resume.jpg'

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
            delay: 200,
        });

        sr.reveal('.first-icon', {
            duration: 200,
            distance: '20px',
            easing: 'ease-out',
            origin: 'top',
            reset: false,
            viewFactor: 0.2,
            delay: 700,
        });

        sr.reveal('.second-icon', {
            duration: 200,
            distance: '20px',
            easing: 'ease-out',
            origin: 'top',
            reset: false,
            viewFactor: 0.2,
            delay: 900,
        });

        sr.reveal('.third-icon', {
            duration: 200,
            distance: '20px',
            easing: 'ease-out',
            origin: 'top',
            reset: false,
            viewFactor: 0.2,
            delay: 1100,
        });
    
    }, []);

    const handleClick = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
    };

    const hamburgerClick = () => {
        const radioSection = document.querySelector('.mobile-navigation')
        radioSection?.classList.toggle('hidden')
    }
      
    const resumeClick = () => {
        Swal.fire({
            title: 'Resume',
            html: `<img class="img-resume" src="${resume}" alt="resume"></img>`,
            confirmButtonText: 'Okay',
            focusConfirm: false,
        })
    }

    return (
        <>
            <nav className="navigation-bar">
                    <li className='special-li dissapear' onClick={handleClick}><img className='home-bar-icon' src={homeIcon}></img></li>
                <ul className='navigation-list'>
                    <li className='about'><a href="#about-section">About</a></li>
                    <li className='experience'><a href="#experience-section">Experience</a></li>
                    <li className='project'><a href='#build-section'>Projects </a></li>
                    {/* <li className='interest'><a href='#interest-section'>Interests</a></li> */}
                    <li className='contact gold'><a href='#section-contact'>Contact</a></li>
                </ul>
                <div className='icons'>
                    <section className='icon-section'>
                        <a className='hover-animation' href='https://github.com/GrassyAirplane' target='_blank'>
                            <img className="navigation-bar-icons first-icon" src={gitIcon} alt='GitHub icon' />
                        </a>
                        <a className='hover-animation' href='https://www.linkedin.com/in/euan-lim-013181235/' target='_blank'>
                            <img className="navigation-bar-icons second-icon" src={linkedIcon}></img>
                        </a>
                        <div className='hover-animation' onClick={resumeClick}>
                            <img className="navigation-bar-icons third-icon" src={resumeIcon}></img>
                        </div>
                    </section>
                <li className='special-li hamburger-icon'onClick={hamburgerClick}>
                    <img className='home-bar-icon' src={hamburgerIcon}></img></li>
                </div>

                </nav>
                <div className='mobile-navigation hidden'>
                    <ul className='mobile-navigation-list' onClick={hamburgerClick}>
                        <li className=''><img className='fast-dissapear' src={homeIcon} onClick={handleClick}></img></li>
                        <li className='about'><a href="#about-section">About</a></li>
                        <li className='experience'><a href="#experience-section">Experience</a></li>
                        <li className='project'><a href='#build-section'>Projects </a></li>
                        {/* <li className='interest'><a href='#interest-section'>Interests</a></li> */}
                        <li className='contact gold'><a href='#section-contact'>Contact</a></li>
                        <li className='nav-icon-section'>
                            <a className='fast-dissapear' href='https://github.com/GrassyAirplane' target='_blank'>
                                <img className="mobile-navigation-bar-icons " src={gitIcon} alt='GitHub icon' />
                            </a>
                            <a className='fast-dissapear' href='https://www.linkedin.com/in/euan-lim-013181235/' target='_blank'>
                                <img className="mobile-navigation-bar-icons " src={linkedIcon}></img>
                            </a>
                            <img onClick={resumeClick}  className="mobile-navigation-bar-icons fast-dissapear" src={resumeIcon}></img>
                        </li>
                    </ul>   
                </div>
        </>
    )
}

export default Navbar