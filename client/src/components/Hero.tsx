import './Hero.css'
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal'
import rightIcon from '../assets/right-arrow-svgrepo-com.svg'

const Hero = () => {

    const third_getDelay = (input: number) => {
        const screenHeight = window.innerHeight;
        const screenWidth = window.innerWidth;
        // && screenWidth > 650

        if (screenHeight < 540 && screenWidth > 625) {
            return  input * 10;
        } 
        else if (screenHeight > 600) {
            return  input * 10;
        }
        else {
            return 0
        }
    }

    const fourth_getDelay =(input: number) => {
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;

        if (screenWidth > 625 && screenHeight > 600) {
            return  input * 10;
        } else {
            return 0;
        }

    }
    useEffect(() => {
        const sr = ScrollReveal({ viewFactor: 0.0,});
        sr.reveal('.first-section', {
            duration: 200,
            distance: '50rem',
            easing: 'ease-out',
            origin: 'left',
            reset: false,
            delay: 1400,
        });
        sr.reveal('.second-section', {
            duration: 200,
            distance: '50rem',
            easing: 'ease-out',
            origin: 'left',
            reset: false,
            delay: 1500,
        });
        sr.reveal('.third-section', {
            duration: 200,
            distance: '50rem',
            easing: 'ease-out',
            origin: 'left',
            reset: false,
            delay: third_getDelay(160),
        });
        sr.reveal('.fourth-section', {
            duration: 200,
            distance: '50rem',
            easing: 'ease-out',
            origin: 'left',
            reset: false,
            delay:  fourth_getDelay(170),
        });
        sr.reveal('.hero-heading', {
            duration: 200,
            distance: '10px',
            easing: 'ease-out',
            origin: 'bottom',
            reset: false,
            delay: 1600,
        });
        sr.reveal('.special-heading', {
            duration: 200,
            distance: '10px',
            easing: 'ease-out',
            origin: 'bottom',
            reset: false,
            delay: third_getDelay(160),
        })
        sr.reveal('.hero-subheading', {
            duration: 200,
            distance: '10px',
            easing: 'ease-out',
            origin: 'bottom',
            reset: false,
            delay: third_getDelay(180),
        });
    }, []);

    return (
        <>
            <main>
                <a href="#about-section">
                    <section className='first-section hero-section first-hero-section'>
                        <article className='hero-article '>
                            <h1 className='hero-heading' style={{whiteSpace: 'nowrap'}}>I'm Euan</h1>
                            <h2 className='hero-subheading' style={{whiteSpace: 'nowrap'}}> Full Stack Developer</h2>
                        </article>
                        <article className='hero-image'>
                            <img className='right-icon' src={rightIcon}></img>
                        </article>
                    </section>
                </a>
                <a href="#experience-section">
                    <section className='second-section hero-section'>
                        <article className='hero-article'>
                            <h1 className='hero-heading' style={{whiteSpace: 'nowrap'}}>I Work</h1>
                            <h2 className='hero-subheading' style={{whiteSpace: 'nowrap'}}> Part Time & Internship </h2>
                        </article>
                        <article className='hero-image'>
                            <img className='right-icon' src={rightIcon}></img>
                        </article>
                    </section>
                </a>
                <a href="#build-section">
                    <section className='third-section hero-section'>
                        <article className='hero-article'>
                            <h1 className='hero-heading special-heading' style={{whiteSpace: 'nowrap'}}>I Build</h1>
                            <h2 className='hero-subheading-special' style={{whiteSpace: 'nowrap'}}> Web Applications</h2>
                        </article>
                        <article className='hero-image'>
                            <img className='right-icon' src={rightIcon}></img>
                        </article>
                    </section>
                </a>
                <section className='fourth-section hero-section'>
                    <article className='hero-article'>
                        <h1 className='hero-heading-regular' style={{whiteSpace: 'nowrap'}}>I Play</h1>
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