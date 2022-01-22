import React from 'react';

import './../styles/indexPage.scss';

import Layout from './../components/layout';
import IconGrid from './../components/iconGrid';
import ProjectCards from './../components/projectCards';
import ContactForm from './../components/contactForm';

import useWindowDimensions from '../hooks/useWindowDimensions';

const IndexPage = () => {

    const { screenWidth } = useWindowDimensions();

    return (
        <Layout>
            <div className="title-container">
                <h1>Moses&nbsp;Munyoki</h1>
            </div>

            <section className="hero">

                <div className="hero-image-container">
                    <img className="hero--image" src={'static/background-coast.jpg'} alt="hero river"></img>
                </div>

                <div className="hero-text-container">

                    <div className="hero-text-container__cta">
                        
                        <div className="cta-display">

                            <img 
                                className="cta-display__image" 
                                src={screenWidth > 750 ? 'static/portrait-large.jpg' : 'static/portrait-small.jpg'} 
                                alt="Moses Munyoki"
                            ></img>

                            <div className="cta-display__text">
                                <h2 className="step-1">Full&nbsp;Stack Dev</h2>
                                <h2 className="step-2">Programmer</h2>
                                <h2 className="step-3">Web Designer</h2>
                            </div>
                            
                        </div>

                    </div>

                    

                    <div className="hero-text-container__bottom">
                        <h3>
                            <span className="highlight">Abstracting</span> Problems
                        </h3>
                        <h3>
                            <span className="highlight">Programming</span> Solutions
                        </h3>
                        <h3>
                            Building Beautiful <span className="highlight">Websites</span>
                        </h3>
                    </div>
                </div>

            </section>

            <section className="index-body">

                <section className="index-about">

                    <span className="title title--white" id="about">About Me</span>
                    <p className="text-block">
                        I'm Moses, a highly driven self taught web developer experienced in designing and creating responsive websites, web applications/PWAs and native mobile apps. I enjoy designing UI and creating/architecting high performance and accessible software with complex logic and functionality.
                    </p>
                    <p className="text-block">
                        I have experience in creating websites, PWAs, web apps and APIs for full stack applications or freelance JAMstack using technologies like <span className="highlight">React, NodeJS, TypeScript, MongoDB and Gatsby</span>.
                    </p>
                    <p className="text-block margin-medium">
                        Recently I've expanded to <span className='highlight'>mobile development</span> with technologies like <span className='highlight'>React Native</span> as well as more complex and scalable projects by utilizing libraries such as <span className='highlight'>Redux</span>.
                    </p>

                    <span className="title title--white">Shiny Things</span>
                    <p className="text-block margin-medium">
                        Here are the tools I use daily in order to design, program and deploy websites, whether it be for personal projects or freelancing for my clients
                    </p>

                    <IconGrid />

                </section>

                <section className="index-projects">

                    <h3 className="title-section" id="projects">My Portfolio</h3>
                    
                    <ProjectCards />

                </section>

                <section className="index-contact">
                    
                    <h3 className="title-section" id="contact-me">Contact Me</h3>

                    <div className="index-contact__wrapper">
                        <span className="title">Need a Website?</span>
                        <p className="text-block margin-medium">
                            If you're looking for a personal or business website, I have experience working with clients step by step in order to create <span className="highlight">performant</span> and <span className="highlight">stylish</span> websites that fit their needs.
                        </p>
                        <span className="title">Want to Hire Me?</span>
                        <p className="text-block margin-medium">
                            Good news, I'm available for <span className="highlight">full-time employment!</span> Feel free to check out my resume through the navigation menu or contact me by email via the form below or by WhatsApp.
                        </p>
                    </div>

                    <ContactForm />

                </section>

            </section>
            
        </Layout>
    )
};

export default IndexPage;