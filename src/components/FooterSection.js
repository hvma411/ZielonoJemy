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
                        <li>Tel.: +48 123 123 123</li>
                        <li>Mail.: karolina@zielonojemy.pl</li>
                    </ul>
                </div>
                <div className="logo-box footer-part">
                    <div className="logo"></div>
                    <div className="socialmedia">
                        <FontAwesomeIcon icon={ faFacebookSquare }/>
                        <FontAwesomeIcon icon={ faInstagramSquare }/>
                        <FontAwesomeIcon icon={ faTwitterSquare }/>
                    </div>
                </div>
                <div className="footer-nav footer-part">
                    <ul>
                        <li>Strona główna</li>
                        <li>O mnie</li>
                        <li>Oferta</li>
                        <li>Artykuły</li>
                        <li>Przepsy</li>
                        <li>Kontakt</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default FooterSection;