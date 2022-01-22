import React from 'react';

import './../styles/footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <h3>Created by Moses Munyoki &#169;&nbsp;{new Date().getFullYear()}</h3>

            <div className="contact-info">
                <a href="tel:+254742416662">(+254)742-416-662</a>
                <a href="mailto:mosesmunyoki6@gmail.com">mosesmunyoki6@gmail.com</a>
            </div>
        </footer>
    )
};

export default Footer;