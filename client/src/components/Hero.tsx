import './Hero.css'
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal'
import rightIcon from '../assets/right-arrow-svgrepo-com.svg'

const Hero = () => {

    useEffect(() => {
        const sr = ScrollReveal();
        sr.reveal('.first-section', {
            duration: 200,
            distance: '50rem',
            easing: 'ease-out',
            origin: 'left',
            reset: false,
            viewFactor: 0,
            delay: 1400,
        });
        sr.reveal('.second-section', {
            duration: 200,
            distance: '50rem',
            easing: 'ease-out',
            origin: 'left',
            reset: false,
            viewFactor: 0,
            delay: 1500,
        });
        sr.reveal('.third-section', {
            duration: 200,
            distance: '50rem',
            easing: 'ease-out',
            origin: 'left',
            reset: false,
            viewFactor: 0,
            delay: 1600,
        });
        sr.reveal('.fourth-section', {
            duration: 200,
            distance: '50rem',
            easing: 'ease-out',
            origin: 'left',
            reset: false,
            viewFactor: 0,
            delay: 1700,
        });
        sr.reveal('.hero-heading', {
            duration: 200,
            distance: '10px',
            easing: 'ease-out',
            origin: 'bottom',
            reset: false,
            viewFactor: 0,
            delay: 1600,
        });
        sr.reveal('.hero-subheading', {
            duration: 200,
            distance: '10px',
            easing: 'ease-out',
            origin: 'bottom',
            reset: false,
            viewFactor: 0,
            delay: 1800,
        });
    }, []);

    return (
        <>
            <main>
                <section className='first-section hero-section'>
                    <article className='hero-article'>
                        <h1 className='hero-heading' style={{whiteSpace: 'nowrap'}}>I'm Euan</h1>
                        <h2 className='hero-subheading' style={{whiteSpace: 'nowrap'}}> Full Stack Developer</h2>
                    </article>
                    <article className='hero-image'>
                        <img className='right-icon' src={rightIcon}></img>
                    </article>
                </section>
                <section className='second-section hero-section'>
                    <article className='hero-article'>
                        <h1 className='hero-heading' style={{whiteSpace: 'nowrap'}}>I Work</h1>
                        <h2 className='hero-subheading' style={{whiteSpace: 'nowrap'}}> Part Time & Internship </h2>
                    </article>
                    <article className='hero-image'>
                        <img className='right-icon' src={rightIcon}></img>
                    </article>
                </section>
                <section className='third-section hero-section'>
                    <article className='hero-article'>
                        <h1 className='hero-heading' style={{whiteSpace: 'nowrap'}}>I Build</h1>
                        <h2 className='hero-subheading' style={{whiteSpace: 'nowrap'}}> Web Applications</h2>
                    </article>
                    <article className='hero-image'>
                        <img className='right-icon' src={rightIcon}></img>
                    </article>
                </section>
                <section className='fourth-section hero-section'>
                    <article className='hero-article'>
                        <h1 className='hero-heading' style={{whiteSpace: 'nowrap'}}>I Play</h1>
                        <h2 className='hero-subheading-special' style={{whiteSpace: 'nowrap'}}> Hobbies & Interest's</h2>
                    </article>
                    <article className='hero-image'>
                        <img className='right-icon' src={rightIcon}></img>
                    </article>
                </section>
            </main>
        </>
    )
}

export default Hero