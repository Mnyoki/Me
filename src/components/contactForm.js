import React, { useState } from 'react';

import './../styles/contactForm.scss';

const ContactForm = () => {

    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ subject, setSubject ] = useState('');
    const [ message, setMessage ] = useState('');

    const successMessageToUser = `Thank you ${name}, your message has been sent. Expect to hear from us soon!`;

    const formHandlers = {
        changeName: (e) => {
            setName(e.target.value);
        },
        changeEmail: (e) => {
            setEmail(e.target.value);
        },
        changeSubject: (e) => {
            setSubject(e.target.value);
        },
        changeMessage: (e) => {
            setMessage(e.target.value);
        }
    };

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    };

    function handleSubmit(e) {
        e.preventDefault();

        const formBody = {
            name: name,
            email: email,
            subject: subject,
            message: message
        };

        fetch('/', {
            method: 'POST',
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...formBody })
        })
        .then(() => {
            alert(successMessageToUser);
        })
        .catch((err) => {
            alert(err);
        })
    }

    return (
        <div className="contact" id="contact">
            <div className="contact__form">
                <form 
                    className="form" 
                    name="contact"
                    id="contact-form"
                    method="POST"
                    onSubmit={(e) => handleSubmit(e)}
                    data-netlify={true}
                    data-netlify-honeypot="bot-field"
                >

                    {/* <input type="hidden" name="bot-field" /> */}
                    <input type="hidden" name="form-name" value="contact" />

                    <h2>Get in touch</h2>

                    <div className="form__group">
                        <input 
                            type="text" 
                            name="name"
                            className="form__input"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => formHandlers.changeName(e)}
                            required={true}
                        ></input>
                        <label htmlFor="name" className="form__label">Name</label>
                    </div>

                    <div className="form__group">
                        <input 
                            type="text" 
                            name="email"
                            className="form__input"
                            placeholder="Your Email"
                            value={email}
                            onChange={(e) => formHandlers.changeEmail(e)}
                            required={true}
                        ></input>
                        <label htmlFor="email" className="form__label">Email</label>
                    </div>

                    <div className="form__group">
                        <input 
                            type="text" 
                            name="subject"
                            className="form__input"
                            placeholder="Subject"
                            value={subject}
                            onChange={(e) => formHandlers.changeSubject(e)}
                            required={true}
                        ></input>
                        <label htmlFor="subject" className="form__label">Subject</label>
                    </div>

                    <div className="form__group">
                        <textarea 
                            name="message"
                            className="form__input form__textarea"
                            placeholder="Your Message" 
                            value={message}
                            onChange={(e) => formHandlers.changeMessage(e)}
                            required={true}
                        ></textarea>
                        <label htmlFor="message" className="form__label">Your Message</label>
                    </div>

                    <div className="form__group">
                        <input 
                            className="form__button"
                            type="submit"
                            value="Send Email"
                            form="contact-form"
                        ></input>
                    </div>

                </form>
            </div>
        </div>
    )
};

export default ContactForm;
