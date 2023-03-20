import './Build.css'
import plus from '../assets/plus-svgrepo-com.svg'
import { useEffect, useState } from 'react'
import ScrollReveal from 'scrollreveal'
import star from '../assets/star-2-svgrepo-com.svg'
import gitIcon from '../assets/github-svgrepo-com.svg'
import webIcon from '../assets/website.svg'


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
            <div className='build-container'>
                <div className='card-container'>
                    <article className='build-card'>
                        <h2 className='special-text about-content-title'>My Builds</h2>
                        <ul className='about-content-list about-content-extra'>
                            <li className='content'> The year it was built.</li>
                            <li className='content'> The purpose of the project.</li>
                            <li className='content'> The name of the project.</li>
                            <li className='content'> Click on the plus to view!</li>
                            {/* <li>The year it was built</li>
                            <li>Purpose of the project</li>
                            <li>Name of the project</li> */}
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
                                <p>In Progress... Check out the other tabs. </p>
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
                                <div className='build-description'>
                                    Web app for determining the precise last seen location and displaying geolocation data of missing persons and pets, from both scraped data and randomly generated test cases.
                                </div>
                                <ul>
                                    <li><img className='star' src={star}/>React & Vite</li>
                                    <li><img className='star' src={star}/>Redux</li>
                                    <li><img className='star' src={star}/>Node Js</li>
                                    <li><img className='star' src={star}/>Springboot</li>
                                    <li><img className='star' src={star}/><a href='https://github.com/GrassyAirplane/missing-web-tracker' target="_blank"><img className='star' src={gitIcon}/></a></li>                            
                                </ul>
                                {/* <ul>
                                    <li>Missing-Web-Tracker is a web application that tracks missing people and pets.</li>
                                    <li>It provides a one-stop website for tracking missing individuals and pets.</li>
                                    <li>Users are offered comprehensive and geographical clues to help investigators understand the situation better.</li>
                                    <li>The application scrapes the web for the latest information.</li>
                                    <li>Users and officials can create accounts on Missing-Web-Tracker.</li>
                                    <li>They can post new information to keep the search up-to-date.</li>
                                </ul> */}
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
                                <div className='build-description'>
                                    Web application that simplifies the process of data collection for data scientists. The app extracts tabular data from PNG, JPG, or PDF files uploaded by the user and converts it into a downloadable CSV file. A majority of data scientists' time and effort is spent on collecting, cleaning, and preparing of data for analysis. Our project hopes to minimise such overhead. Heavily inspired by my time and project @Urbanmetry
                                </div>
                                <ul>
                                    <li><img className='star' src={star}/>React & Vite</li>
                                    <li><img className='star' src={star}/>NodeJs</li>
                                    <li><img className='star' src={star}/>Typescript</li>
                                    <li><img className='star' src={star}/>Python</li>
                                    <li><img className='star' src={star}/>Tesseract</li>
                                    <li><img className='star' src={star}/>OpenCV</li>
                                    <li><img className='star' src={star}/>Docker</li>
                                    <li><img className='star' src={star}/><a href='https://kohharuki.github.io/SummerHack2023/' target="_blank"><img className='star' src={webIcon}/></a></li>
                                    <li><img className='star' src={star}/><a href='https://github.com/KohHaruki/SummerHack2023' target="_blank"><img className='star' src={gitIcon}/></a></li>
                                </ul>
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
                                <div className='build-description'>
                                    Cast a secure, anonymous vote and earn a cabbage coin as reward with our zero-knowledge voting app! Revolutionize the way we vote and get rewarded! Web app that offers admin dashboard for adding election runners, profile sections for users, login system for users, voting functionality for users. 
                                </div>
                                <ul>
                                    <li><img className='star' src={star}/>React & Vite</li>
                                    <li><img className='star' src={star}/>Redux</li>
                                    <li><img className='star' src={star}/>NodeJs</li>
                                    <li><img className='star' src={star}/>Typescript</li>
                                    <li><img className='star' src={star}/>Solidity</li>
                                    <li><img className='star' src={star}/><a href='https://bonzonic.github.io/KL-Mini-Hack/' target="_blank"><img className='star' src={webIcon}/></a></li>
                                    <li><img className='star' src={star}/><a href='https://github.com/bonzonic/KL-Mini-Hack' target="_blank"><img className='star' src={gitIcon}/></a></li>
                                </ul>
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
                                <div className='build-description'>
                                        My very first project outside of school work, built purely in native html, javascript and css. Displaying the total average grades[Numerical] per course in CIMP, with collected data. 
                                </div>
                                <ul>
                                    <li><img className='star' src={star}/>Html</li>
                                    <li><img className='star' src={star}/>CSS</li>
                                    <li><img className='star' src={star}/>Javascript</li>
                                    <li><img className='star' src={star}/><a href='https://grassyairplane.github.io/grades-web-app/' target="_blank"><img className='star' src={webIcon}/></a></li>
                                    <li><img className='star' src={star}/><a href='https://github.com/GrassyAirplane/grades-web-app' target="_blank"><img className='star' src={gitIcon}/></a></li>
                                </ul>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default Build