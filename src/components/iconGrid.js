import React, { useEffect, useRef } from 'react';

import './../styles/iconGrid.scss';

const IconGrid = () => {

    const iconRef = useRef();

    //adds initial animation on icon grid via intersection observer
    useEffect(() => {
        const sectionIcons = iconRef.current;

        const iconOptions = {
            root: null,
            rootMargin: '-50px'
        };

        const iconObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) { return };
        
                entry.target.classList.add('loaded');
                
                observer.unobserve(entry.target);
            });
        }, iconOptions);

        iconObserver.observe(sectionIcons);
    }, []);

    return (
        <div className="icon-grid" ref={iconRef}>
            <div className="icon-grid--card">
                <img src={'static/html5.svg'} alt="html5" loading="lazy"></img>
                <span>HTML</span>
            </div>
            <div className="icon-grid--card">
                <img src={'static/css3.svg'} alt="CSS" loading="lazy"></img>
                <span>CSS</span>
            </div>
            <div className="icon-grid--card">
                <img src={'static/javascript.svg'} alt="javascript" loading="lazy"></img>
                <span>Javascript</span>
            </div>
            <div className="icon-grid--card">
                <img src={'static/typescript.svg'} alt="typescript" loading="lazy"></img>
                <span>TypeScript</span>
            </div>
            <div className="icon-grid--card">
                <img src={'static/sass.svg'} alt="sass" loading="lazy"></img>
                <span>Sass/SCSS</span>
            </div>
            <div className="icon-grid--card">
                <img src={'static/react.svg'} alt="reactJS" loading="lazy"></img>
                <span>ReactJS</span> 
            </div>
            <div className="icon-grid--card">
                <img src={'static/react-native.svg'} alt="React Native" loading="lazy"></img>
                <span>React Native</span>
            </div>
            <div className="icon-grid--card">
                <img src={'static/redux.svg'} alt="Redux" loading="lazy"></img>
                <span>Redux</span>
            </div>
            <div className="icon-grid--card">
                <img src={'static/node-js.svg'} alt="nodeJS" loading="lazy"></img>
                <span>NodeJS</span>
            </div>
            <div className="icon-grid--card">
                <img src={'static/mongodb.svg'} alt="mongo" loading="lazy"></img>
                <span>MongoDB</span>
            </div>
            <div className="icon-grid--card">
                <img src={'static/gatsby.svg'} alt="gatsbyJS" loading="lazy"></img>
                <span>GatsbyJS</span>
            </div>
            <div className="icon-grid--card">
                <img src={'static/figma.svg'} alt="figma" loading="lazy"></img>
                <span>Figma</span>
            </div>
            <div className="icon-grid--card">
                <img src={'static/git.svg'} alt="git" loading="lazy"></img>
                <span>Git</span>
            </div>
        </div>
    )
};

export default IconGrid;