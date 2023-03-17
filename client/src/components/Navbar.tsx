import { useState, useEffect } from 'react';
import ScrollReveal from 'scrollreveal'
import './Navbar.css'
import homeIcon from '../assets/home-alt-svgrepo-com.svg'
import gitIcon from '../assets/github-svgrepo-com.svg'
import linkedIcon from '../assets/linkedin-svgrepo-com.svg'
import resumeIcon from '../assets/resume-4-svgrepo-com.svg'
import hamburgerIcon from '../assets/hamburger-svgrepo-com.svg'
import Swal from 'sweetalert2'

const Navbar = () => {
    useEffect(() => {
        const sr = ScrollReveal();

        sr.reveal('.navigation-list', {
            duration: 200,
            distance: '20px',
            easing: 'ease-out',
            origin: 'top',
            reset: true,
            viewFactor: 0.2,
            delay: 200,
        });

        sr.reveal('.first-icon', {
            duration: 200,
            distance: '20px',
            easing: 'ease-out',
            origin: 'top',
            reset: true,
            viewFactor: 0.2,
            delay: 700,
        });

        sr.reveal('.second-icon', {
            duration: 200,
            distance: '20px',
            easing: 'ease-out',
            origin: 'top',
            reset: true,
            viewFactor: 0.2,
            delay: 900,
        });

        sr.reveal('.third-icon', {
            duration: 200,
            distance: '20px',
            easing: 'ease-out',
            origin: 'top',
            reset: true,
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
      
    const resumeClick = () => {
   
        const link = document.createElement("a");
        link.href = "/src/resume/Resume - Euan Lim.pdf"; // replace with the path to your resume file
        link.target = "_blank";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        // const MySwal = Swal.mixin({
        //     customClass: {
        //       title: 'alert-title',
        //       htmlContainer: 'alert-html-container',
        //       confirmButton: 'alert-confirm-button',
        //       cancelButton: 'alert-cancel-button',
        //       popup: 'alert-popup'
        //     },
        //     buttonsStyling: false,
        //   })

        // MySwal.fire({
        //     title: "Preview my Resume?",
        //     // text: "Download my Resume?",
        //     icon: 'warning',
        //     iconColor: 'black',
        //     showCancelButton: true,
        //     confirmButtonColor: '#3085d6',
        //     cancelButtonColor: '#d33',
        //     confirmButtonText: 'Preview',
        //   }).then((result) => {
        //     if (result.isConfirmed) {
        //       const link = document.createElement("a");
        //       link.href = "/src/resume/Resume - Euan Lim.pdf"; // replace with the path to your resume file
        //       link.target = "_blank";
        //       document.body.appendChild(link);
        //       link.click();
        //       document.body.removeChild(link);
        //     }})
    }

    return (
        <>
            <nav className="navigation-bar">
                    <li className='special-li' onClick={handleClick}><img className='home-bar-icon' src={homeIcon}></img></li>
                <ul className='navigation-list'>
                    <li className='about'><a href="#about-section">About</a></li>
                    <li className='experience'><a href="#experience-section">Experience</a></li>
                    <li className='project'><a href='#build-section'>Projects </a></li>
                    <li className='interest'>Interests </li>
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
                <li className='special-li hamburger-icon' onClick={handleClick}><img className='home-bar-icon' src={hamburgerIcon}></img></li>
            
                </div>
                </nav>
        </>
    )
}

export default Navbar