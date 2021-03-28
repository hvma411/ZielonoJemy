import React, { useState, useEffect } from "react";
import emailjs from 'emailjs-com';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagramSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Contact = () => {

    emailjs.init("user_qOIj9Qy1Tn8QXzZd70ei6")

    const [contactForm, setContactForm] = useState({
        fullName: "",
        emailAddress: "",
        guestMessage: "",
    });

    const validateEmail = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const sendMessage = () => {
        const errors = [];

        if (contactForm.fullName === "" || contactForm.fullName.length < 2) {
            errors.push("wrongName");
            document.querySelector(".wrongName").style.display = "block";
        };

        if (validateEmail(contactForm.emailAddress) === false) {
            errors.push("wrongEmail");
            document.querySelector(".wrongEmail").style.display = "block";
        };

        if (contactForm.guestMessage.length < 30) {
            errors.push('wrongMessage');
            document.querySelector(".wrongMessage").style.display = "block";
        };

        if (contactForm.fullName === "" && contactForm.emailAddress === "" && contactForm.guestMessage === "") {
            errors.push("emptyForm");
            document.querySelector(".emptyForm").style.display = "block";
            document.querySelector(".wrongName").style.display = "none";
            document.querySelector(".wrongEmail").style.display = "none";
            document.querySelector(".wrongMessage").style.display = "none";
        };

        if (errors.length < 1) {

            emailjs.send("service_4fwm234", "template_bx41vgk", {
                from_name: contactForm.fullName,
                message: contactForm.guestMessage,
                guest_email: contactForm.emailAddress,
                guest_name: contactForm.fullName,
                reply_to: contactForm.emailAddress,
            })
            .then(response => {
                document.querySelector(".messageInfo").style.display = "block";

                const classClear = setTimeout(() => {
                    document.querySelector(".messageInfo").style.display = "none";
                }, 1500);

                setContactForm({
                    fullName: "",
                    emailAddress: "",
                    guestMessage: "",
                })
                
                console.log("Success", response.status, response.text)

            }, error => {
                console.log(error.text)
            })


        };
        
    };
    
    const handleFormChange = (e) => {
        e.persist();
        setContactForm(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const handleButtonClick = (e) => {
        e.preventDefault();
        sendMessage();
    }

    useEffect(() => {
        if (contactForm.fullName.length > 2) {
            document.querySelector(".wrongName").style.display = "none";
        };

        if (validateEmail(contactForm.emailAddress) === true) {
            document.querySelector(".wrongEmail").style.display = "none";
        };

        if (contactForm.guestMessage.length > 29) {
            document.querySelector(".wrongMessage").style.display = "none";
        }
        
        if (contactForm.fullName.length > 0 || contactForm.emailAddress.length > 0 || contactForm.guestMessage.length > 0) {
            document.querySelector(".emptyForm").style.display = "none";
        }
    }, [contactForm])

    
    return (
        <section className="contact">
            <div className="container contact__page">
                <h3 className="section__title">SKONTAKTUJ SIĘ ZE MNĄ</h3>
                <span className="underline"></span>
                <div className="page-box">
                    <div className="form-box">
                        <h4>Moje dane kontaktowe:</h4>
                        <div className="contact__details">
                            <div className="detail-box">
                                <h5>TELEFON:</h5>
                                <p><a href="tel:+48789455613">+48 789 455 613</a></p>
                            </div>
                            <div className="detail-box">
                                <h5>EMAIL:</h5>
                                <p><a href="mailto:furmanska.diet@gmail.com">furmanska.diet@gmail.com</a></p>
                            </div>
                        </div>
                        <h4>Moje socialmedia:</h4>
                        <div className="socialmedia">
                            <a href="https://www.facebook.com/Zielonojemy-Karolina-Furma%C5%84ska-101969841692612" target="blank_">
                                <FontAwesomeIcon icon={ faFacebookSquare } />
                            </a>
                            <a href="https://www.instagram.com/zielonojemy/?hl=pl" target="blank_">
                                <FontAwesomeIcon icon={ faInstagramSquare }/>
                            </a>
                            <a href="https://www.linkedin.com/in/karolina-furma%C5%84ska-75224a205/" target="blank_">
                                <FontAwesomeIcon icon={ faLinkedin }/>
                            </a>
                        </div>
                        <form>
                            <h4>Napisz do mnie wiadomość:</h4>
                            <input type="text" name="fullName" value={ contactForm.fullName } onChange={ handleFormChange } placeholder="Twoje imie..." />
                            <input type="text" name="emailAddress" value={ contactForm.emailAddress } onChange={ handleFormChange } placeholder="Twój adres email..." />
                            <textarea name='guestMessage' value={ contactForm.guestMessage } onChange={ handleFormChange } placeholder="Twoja wiadomość..." />
                            <div className="button-box">
                                <div className="errors-box">
                                    <span className="wrongName">Podaj proszę swoje imię</span>
                                    <span className="wrongEmail">Popraw adres email</span>
                                    <span className="wrongMessage">Twoja wiadomość jest za krótka (min. 30 znaków)</span>
                                    <span className="emptyForm">Uzupełnij poprawnie wszystkie pola (wiadomość to min. 30 znaków)</span>
                                    <span className="messageInfo">Wiadomość została wysłana</span>
                                </div>
                                <button onClick={ handleButtonClick }>Wyślij</button>
                            </div>

                        </form>

                    </div>
                    <div className="img-box"></div>
                </div>
            </div>
        </section>
    );
};

export default Contact;