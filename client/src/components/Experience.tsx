import { useEffect } from 'react';
import './Experience.css'
import ScrollReveal from 'scrollreveal';
import star from '../assets/star-2-svgrepo-com.svg'

const Experience = () => {

    useEffect(() => {
        const sr = ScrollReveal({ viewFactor: 0.0,});
        sr.reveal('.first-trapezoid', {
            duration: 700,
            distance: '3rem',
            easing: 'ease-out',
            origin: 'left',
            reset: false,
            delay: 20,
        });
        sr.reveal('.second-trapezoid', {
            duration: 700,
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
                        <h2 className='trapezoid-title'>Internship <a href='https://www.urbanmetry.com/' target='_blank' className='special-text-span'>@UrbanMetry</a></h2>
                        <h2 className='trapezoid-title'>Software Engineering</h2>
                        <ul>
                            <li><img className='star' src={star}/>Developed mortgage form filing software using Ruby and Ruby on Rails</li>
                            <li><img className='star' src={star}/>Utilized BS4 for web scraping to collect relevant data</li>
                            <li><img className='star' src={star}/>Worked on developing an image and PDF Scraping solution using OCR, CV and SR / NER models</li>
                            <li><img className='star' src={star}/>Gained experience in web development, data scraping and machine learning</li>
                        </ul>
                    </div>
                </div>
                <div className='second-trapezoid'>
                    <div className='trapezoid'>
                        <h2 className='trapezoid-title'>Contract <a href='https://www.linkedin.com/company/monash-ureview/' target='_blank' className='special-text-span'>@UReview</a></h2>
                        <h2 className='trapezoid-title'>Frontend Developer</h2>
                        <ul>
                            <li><img className='star' src={star}/>Design and implement responsive CSS to improve user interface</li>
                            <li><img className='star' src={star}/>Working with Angular framework to make changes to FE codebase</li>
                            <li><img className='star' src={star}/>Work on session management and JWT authentication</li>
                        </ul>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default Experience