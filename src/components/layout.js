import React from 'react';
import Helmet from 'react-helmet';

import Header from './header';
import Footer from './footer';

import '@fontsource/source-sans-pro';
import '@fontsource/roboto';



import './../styles/base.scss';
import './../styles/layout.scss';

const Layout = (props) => {
    return (
        <main className="layout-container">

            <Helmet htmlAttributes={{ lang: 'en' }}>
                <title>Moses Munyoki | Web Developer</title>
                
                <meta name="title" content="Moses Munyoki | Web Developer" />
                <meta name="description" content="  Moses Munyoki, professional web and software developer for hire" />
            </Helmet>

            <section className="layout-content">
                <Header />
                <section className="layout-content--body">
                    {props.children}
                </section>
            </section>
            <Footer />    
        </main>
    )
};

export default Layout;