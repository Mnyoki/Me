import React from 'react';
import Particles from 'react-particles-js';

import DesktopNav from './desktopNav';
import MobileNav from './mobileNav';

import useWindowDimensions from '../hooks/useWindowDimensions';

import './../styles/header.scss';

const Header = () => {

    const { screenWidth } = useWindowDimensions();

    return (
        <>    
            <div className="header-background">
                <Particles params={{
                    "particles": {
                        "number": {
                            "value": 47
                        },
                        "size": {
                            "value": 3.75,
                            "random": true,

                            "anim": {
                                "enable": true,
                                "speed": 2,
                                "size_min": 0.5
                            }
                        },
                        "move": {
                            "random": true,
                            "speed": 1.5
                        },
                        "line_linked": {
                            "enable": true,
                            "distance": 80
                        }
                    }
                }}/>
            </div>

            <header className="header-container">

                <div className="header__cta">
                    <a href="https://github.com/Mnyoki" target="_blank" rel="noreferrer">
                        <img src={'static/github.svg'} alt="github" />
                    </a>
                    <h1 className="header--logo">
                        <a href="https://github.com/Mnyoki" target="_blank" rel="noreferrer">
                            MOSES&nbsp;MUNYOKI
                        </a>
                    </h1>
                </div>

                {
                    screenWidth > 750 ? (
                        <DesktopNav />
                    ) : (
                        <MobileNav />
                    )
                }

            </header>
        </>
        
    )
};

export default Header;