import React from 'react';

import './../styles/mobileNav.scss';

const MobileNav = () => {

    function scrollSmoothTo(elementId) {
        const element = document.getElementById(elementId);
        element.scrollIntoView({
            block: 'start',
            behavior: 'smooth'
        });
        
        setTimeout(() => {
            document.getElementById('nav-toggle').checked = false;
        }, 300);
    };

    return (
        <div className="nav-mobile">

            <input type="checkbox" className="nav-mobile__checkbox" id="nav-toggle"></input>
            
            <label htmlFor="nav-toggle" className="nav-mobile__button">
                <span className="nav-mobile__icon">&nbsp;</span>
            </label>

            <div className="nav-mobile__background">&nbsp;</div>

            <nav className="nav-mobile__nav">

                <ul className="nav-mobile__list">
                    <li className="nav-mobile__item"><button aria-label="go to about section" onClick={() => scrollSmoothTo('about')} className="nav-mobile__link">About</button></li>
                    <li className="nav-mobile__item"><button aria-label="go to projects section" onClick={() => scrollSmoothTo('projects')} className="nav-mobile__link">Projects</button></li>
                    <li className="nav-mobile__item"><button aria-label="go to contact section" onClick={() => scrollSmoothTo('contact-me')} className="nav-mobile__link">Contact</button></li>
                    <li className="nav-mobile__item"><button aira-lable="link to my resume" className="nav-mobile__link"><a href="https://hopeful-kepler-1e5071.netlify.app/" target="_blank" rel="noreferrer">Resume</a></button></li>
                </ul>
            </nav>

        </div>
    )
}

export default MobileNav;