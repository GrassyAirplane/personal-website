import './About.css'
import profileImage from '../assets/Profile.jpeg'
import ScrollReveal from 'scrollreveal'
import { useEffect } from 'react';

const About = () => {
    
    useEffect(() => {
        const sr = ScrollReveal({ viewFactor: 0.5,});
        sr.reveal('.about-first', {
            duration: 400,
            distance: '2rem',
            easing: 'ease-out',
            origin: 'bottom',
            delay: 100,
            reset: false,
        });
        sr.reveal('.about-second', {
            duration: 400,
            distance: '2rem',
            easing: 'ease-out',
            origin: 'bottom',
            reset: false,
            delay: 300,
        });
    }, []);

    return (
        <section id="about-section" className="about-section">
            <article className='about-content'>
                <div className='about-first'>
                    <div className='about-content-div'>
                        <h2 className='special-text about-content-title'>About Me</h2>
                        <ul className='about-content-list additional-padding'>
                            <li>I'm Euan Lim</li>
                            <li>Full Stack Developer</li>
                            <li>CompSci student @ Monash</li>
                            <li>Passion in Hackathons & Building</li>
                        </ul>
                    </div>
                </div>
                <div className='about-second'>
                    <div className='about-main'>
                        <img className = 'profile-image' src={profileImage}></img> 
                    </div>
                </div>  
            </article>
        </section>
    )
}

export default About