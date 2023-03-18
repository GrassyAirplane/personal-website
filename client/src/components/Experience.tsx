import { useEffect } from 'react';
import './Experience.css'
import ScrollReveal from 'scrollreveal';
import star from '../assets/star-2-svgrepo-com.svg'

const Experience = () => {

    useEffect(() => {
        const sr = ScrollReveal({ viewFactor: 0.0,});
        sr.reveal('.first-trapezoid', {
            duration: 600,
            distance: '3rem',
            easing: 'ease-out',
            origin: 'left',
            reset: false,
            delay: 20,
        });
        sr.reveal('.second-trapezoid', {
            duration: 600,
            distance: '3rem',
            easing: 'ease-out',
            origin: 'right',
            reset: false,
            delay: 20,
        });
    }, []);


    return (
        <section id="experience-section" className="experience-section">
            <article className='experience-content'>
                <div className='first-trapezoid'>
                    <div className='trapezoid'>
                        <h2 className='trapezoid-title'>Internship</h2>
                        <ul>
                            <li>Developed mortgage form filing software using Ruby and Ruby on Rails</li>
                            <li>Utilized BS4 for web scraping to collect relevant data</li>
                            <li>Worked on developing an image and PDF Scraping solution using OCR, CV and SR / NER models</li>
                            <li>Gained experience in web development, data scraping and machine learning</li>
                        </ul>
                    </div>
                </div>
                <div className='second-trapezoid'>
                    <div className='trapezoid'>
                        <h2 className='trapezoid-title'>Contract</h2>
                        <ul>
                            <li>Helo</li>
                        </ul>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default Experience