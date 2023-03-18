import './Interests.css'
import valorant from '../assets/valorant.jpg'
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const Interests = () => {
    useEffect(() => {
        const sr = ScrollReveal({ viewFactor: 0.5,});
        sr.reveal('.valorant-image', {
            duration: 700,
            distance: '10rem',
            easing: 'ease-out',
            origin: 'right',
            delay: 100,
            reset: false,
        });
    }, []);

    return (
        <>
            <section id='interest-section' className='interest-section'>
                <div className='valorant-section'>
                    <div className='interest-section-container'>
                        <p className='paragraph'>Im pretty competitive as you might have 
                           gathered from the number of hackathons, 
                           so competitive shooters are generally my go
                           to outside of code, competitions & learning.
                           <br></br><br></br>
                           To relax, building gundam, lego, wooden crafts 
                           and really anything I can get my hands on are pretty
                           therapeutic, and fills the urge to build. 
                           <br></br><br></br>
                           Cooking has also always been an interest, likely in 
                           trend with my desire to create, but also mainly for 
                           the enjoyment in flavour and taste. 
                        </p>
                    </div>
                    <img className='valorant-image' src={valorant}></img>
                </div>
            </section>
        </>
    )
}

export default Interests 