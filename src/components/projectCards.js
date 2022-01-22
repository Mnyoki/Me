import React, { useEffect, useRef } from 'react';

import useWindowDimensions from '../hooks/useWindowDimensions';

import './../styles/projectCards.scss';

const ProjectCards = () => {

    const { screenWidth } = useWindowDimensions();

    const projectsRef = useRef();

    //adds initial animation on project cards with intersection observer. Has case for desktop and mobile
    useEffect(() => {
        const projectOptions = {
            root: null,
            rootMargin: '-25px'
        };

        if (screenWidth > 750) {
            const sectionProjects = projectsRef.current;

            const projectObserverDesktop = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (!entry.isIntersecting) { return };
            
                    entry.target.classList.add('loaded-desktop');
                    observer.unobserve(entry.target);
                });
            }, projectOptions);

            projectObserverDesktop.observe(sectionProjects);
        } else {
            const sectionProjects = projectsRef.current.querySelectorAll('.project-card');

            const projectObserverMobile = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (!entry.isIntersecting) { return };
            
                    entry.target.classList.add('loaded-mobile');
                    observer.unobserve(entry.target);
                });
            }, projectOptions);

            sectionProjects.forEach(section => {
                projectObserverMobile.observe(section);
            });
        }
    }, [screenWidth]);

    return (
        <section className="project-container" ref={projectsRef}>

            <div className="project-card" id="project-1">

                <div className="project-card__mockups">
                    <img className="project-card__mockups--laptop" src={'static/mockup-laptop-anireka.png'} alt="anireka laptop mockup" loading="lazy"></img>
                    <img className="project-card__mockups--tablet" src={'static/mockup-tablet-anireka.png'} alt="anireka tablet mockup" loading="lazy"></img>
                    <img className="project-card__mockups--phone" src={'static/mockup-phone-anireka.png'} alt="anireka phone mockup" loading="lazy"></img>

                    <span className="project-card__mockups--title">Password Generator</span>
                </div>

                <div className="project-card__info">

                    <p className="text-block">
                        A webpage for generating random password.
                    </p>

                    <div className="project-card__info--tech tech-long">
                         <img src={'static/javascript.svg'} alt="javascript" title="JavaScript"></img>
                        <img src={'static/sass.svg'} alt="Sass/SCSS" title="Sass/SCSS"></img>
                       
                    </div>

                    <div className="project-card__info--buttons">
                        <a target="_blank" rel="noreferrer" href="https://friendly-einstein-fc98b5.netlify.app/">Live Site</a>
                        <a target="_blank" rel="noreferrer" href="https://github.com/Mnyoki/Password-generator">Repo</a>
                    </div>

                </div>

            </div>

            <div className="project-card" id="project-2">

                <div className="project-card__mockups">
                    <img className="project-card__mockups--laptop" src={'static/mockup-laptop-dd.png'} alt="Drinkdex laptop mockup" loading="lazy"></img>
                    <img className="project-card__mockups--tablet" src={'static/mockup-tablet-dd.png'} alt="Drinkdex tablet mockup" loading="lazy"></img>
                    <img className="project-card__mockups--phone" src={'static/mockup-phone-dd.png'} alt="Drinkdex phone mockup" loading="lazy"></img>

                    <span className="project-card__mockups--title">Tic Tac Toe Game</span>
                </div>

                <div className="project-card__info">

                    <p className="text-block">
                        A React based responsive tic tac toe game.
                    </p>

                    <div className="project-card__info--tech tech-long">
                        <img src={'static/react.svg'} alt="ReactJS" title="ReactJS"></img>
                        <img src={'static/sass.svg'} alt="Sass/SCSS" title="Sass/SCSS"></img>
                        <img src={'static/node-js.svg'} alt="NodeJS" title="NodeJS"></img>
                        
                    </div>

                    <div className="project-card__info--buttons">
                        <a target="_blank" rel="noreferrer" href="https://tiae-game.netlify.app/">Live Site</a>
                        <a target="_blank" rel="noreferrer" href="https://github.com/Mnyoki/tic-tac-toe-">Repo</a>
                    </div>

                </div>

            </div>

            <div className="project-card" id="project-3">

                <div className="project-card__mockups">
                    <img className="project-card__mockups--laptop" src={'static/mockup-laptop-platform.png'} alt="platform laptop mockup" loading="lazy"></img>
                    <img className="project-card__mockups--tablet" src={'static/mockup-tablet-platform.png'} alt="platform tablet mockup" loading="lazy"></img>
                    <img className="project-card__mockups--phone" src={'static/mockup-phone-platform.png'} alt="platform phone mockup" loading="lazy"></img>

                    <span className="project-card__mockups--title">Tasty Food</span>
                </div> 

                <div className="project-card__info">

                    <p className="text-block">
                        A Responsive Restaurant Website
                    </p>

                    <div className="project-card__info--tech">
                        <img src={'static/html5.svg'} alt="html5" title="html5"></img>
                        <img src={'static/css3.svg'} alt="CSS" title="CSS"></img>
                        <img src={'static/sass.svg'} alt="Sass/SCSS" title="Sass/SCSS"></img>
                        <img src={'static/figma.svg'} alt="Figma" title="Figma"></img>
                    </div>

                    <div className="project-card__info--buttons">
                        <a target="_blank" rel="noreferrer" href="https://vigorous-bardeen-465c22.netlify.app/">Live Site</a>
                        <a target="_blank" rel="noreferrer" href="https://github.com/Mnyoki/restaurant">Repo</a>
                    </div>

                </div>

            </div>

        </section>
    )
};

export default ProjectCards;
