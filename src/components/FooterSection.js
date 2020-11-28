import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagramSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

const FooterSection = () => {
    return (
        <footer>
            <div className="container footer-wrapper">
                <div className="contact-info-box footer-part">
                    <ul>
                        <li>Karolina Furmańska</li>
                        <li>Tel.: <a href="tel:+48789455613">+48 789 455 613</a> </li>
                        <li>Mail.: <a href="mailto:furmanska.diet@gmail.com">furmanska.diet@gmail.com</a> </li>
                    </ul>
                </div>
                <div className="vertical-line"></div>
                <div className="logo-box footer-part">
                    <div className="logo"></div>
                    <div className="socialmedia">
                        <a href="https://www.facebook.com/Zielonojemy-Karolina-Furma%C5%84ska-101969841692612" target="blank_">
                            <FontAwesomeIcon icon={ faFacebookSquare } />
                        </a>
                        <a href="https://www.instagram.com/zielonojemy/?hl=pl" target="blank_">
                            <FontAwesomeIcon icon={ faInstagramSquare }/>
                        </a>
                        <FontAwesomeIcon icon={ faTwitterSquare }/>
                    </div>
                </div>
                <div className="vertical-line"></div>
                <div className="footer-nav footer-part">
                    <ul>
                    <li><Link to="/">Strona główna</Link></li>
                    <li><Link to="/articles">Artykuły</Link></li>
                    <li><Link to="/recipes">Przepisy</Link></li>
                    <li><Link to="/services">Oferta</Link></li>
                    <li><Link to="/about">O mnie</Link></li>
                    <li><Link to="/contact">Kontakt</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default FooterSection;