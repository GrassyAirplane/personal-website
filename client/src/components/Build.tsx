import './Build.css'
import plus from '../assets/plus-svgrepo-com.svg'
import { useEffect, useState } from 'react'
import ScrollReveal from 'scrollreveal'

const Build = () => {
    const [rotateState, setRotateState] = useState([false, false, false, false, false])
    const [displayState, setDisplayState] = useState([true, true, true, true, true])

    const handleRotate = (index: number) => {
        const newState = [...rotateState];
        newState[index] = !newState[index];
        setRotateState(newState);

        const newDisplayState = [...displayState];
        newDisplayState[index] = !newDisplayState[index];
        setDisplayState(newDisplayState);
    }
    
    useEffect(() => {
        const sr = ScrollReveal({ viewFactor: 0.5,});
        sr.reveal('.card-container', {
            duration: 400,
            distance: '2rem',
            easing: 'ease-out',
            origin: 'bottom',
            reset: false,
        }),
        sr.reveal('#build-1', {
            duration: 600,
            distance: '50rem',
            easing: 'ease-out',
            origin: 'left',
            reset: false,
        }),
        sr.reveal('#build-2', {
            duration: 600,
            distance: '50rem',
            easing: 'ease-out',
            origin: 'left',
            reset: false,
        }),
        sr.reveal('#build-3', {
            duration: 600,
            distance: '50rem',
            easing: 'ease-out',
            origin: 'left',
            reset: false,
        }),
        sr.reveal('#build-4', {
            duration: 600,
            distance: '50rem',
            easing: 'ease-out',
            origin: 'left',
            reset: false,
        }),
        sr.reveal('#build-5', {
            duration: 600,
            distance: '50rem',
            easing: 'ease-out',
            origin: 'left',
            reset: false,
        });
    }, []);

    return(
        <section id="build-section" className="build-section">
            <div className='card-container'>
                <article className='build-card'>
                    <h2 className='special-text about-content-title'>My Builds</h2>
                    <ul className='about-content-list'>
                        <li>Listed are my projects</li>
                        <li></li>
                        <li>Majority are React Based</li>
                        <li>Click the Plus Sign!</li>
                    </ul>
                </article>
            </div>
            <div className='build-cards'>
                <article id='build-1'>
                    <div className='build-heading' id='build-first-heading'>
                        <div className='build-heading-left'>
                            <h2 className='build-heading-left-date'>Current</h2>
                            <h3 className='build-heading-left-type'>Hackathon</h3>
                            <p className='build-heading-left-title'>cabbage-trash</p>
                        </div>
                        <img
                            className={`build-plus ${rotateState[0] ? 'rotate' : ''}`}
                            src={plus}
                            onClick={() => handleRotate(0)}
                        />
                    </div>
                    <div className={`build-content ${displayState[0] ? 'hidden' : ''}`}>
                        <div className='inner-build-content'>
                            <p>Missing Web Tracker is a...</p>
                        </div>
                    </div>
                </article>
                <article id='build-2'>
                    <div className='build-heading'>
                        <div className='build-heading-left'>
                            <h2 className='build-heading-left-date'>2023</h2>
                            <h3 className='build-heading-left-type'>Hackathon</h3>
                            <p className='build-heading-left-title'>missing-web-tracker</p>
                        </div>
                        <img
                            className={`build-plus ${rotateState[1] ? 'rotate' : ''}`}
                            src={plus}
                            onClick={() => handleRotate(1)}
                        />
                    </div>
                    <div className={`build-content ${displayState[1] ? 'hidden' : ''}`}>
                        <div className='inner-build-content'>
                            <p>Missing Web Tracker is a...</p>
                        </div>
                    </div>
                </article>
                <article id='build-3'>
                    <div className='build-heading'>
                        <div className='build-heading-left'>
                            <h2 className='build-heading-left-date'>2022</h2>
                            <h3 className='build-heading-left-type'>Hackathon</h3>
                            <p className='build-heading-left-title'>ocr-table-scan</p>
                        </div>
                        <img
                            className={`build-plus ${rotateState[2] ? 'rotate' : ''}`}
                            src={plus}
                            onClick={() => handleRotate(2)}
                        />
                    </div>
                    <div className={`build-content ${displayState[2] ? 'hidden' : ''}`}>
                        <div className='inner-build-content'>
                            <p>Missing Web Tracker is a...</p>
                        </div>
                    </div>
                </article>
                <article id='build-4'>
                <div className='build-heading'>
                        <div className='build-heading-left'>
                            <h2 className='build-heading-left-date'>2022</h2>
                            <h3 className='build-heading-left-type'>Hackathon</h3>
                            <p className='build-heading-left-title'>zkp-election-system</p>
                        </div>
                        <img
                            className={`build-plus ${rotateState[3] ? 'rotate' : ''}`}
                            src={plus}
                            onClick={() => handleRotate(3)}
                        />
                    </div>
                    <div className={`build-content ${displayState[3] ? 'hidden' : ''}`}>
                        <div className='inner-build-content'>
                            <p>Missing Web Tracker is a...</p>
                        </div>
                    </div>
                </article>
                <article id='build-5'>
                <div className='build-heading'>
                        <div className='build-heading-left'>
                            <h2 className='build-heading-left-date'>2021</h2>
                            <h3 className='build-heading-left-type'>Personal</h3>
                            <p className='build-heading-left-title'>course-web-app</p>
                        </div>
                        <img
                            className={`build-plus ${rotateState[4] ? 'rotate' : ''}`}
                            src={plus}
                            onClick={() => handleRotate(4)}
                        />
                    </div>
                    <div className={`build-content ${displayState[4] ? 'hidden' : ''}`}>
                        <div className='inner-build-content'>
                            <p>Missing Web Tracker is a...</p>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Build