import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  HashRouter,
  Route,
  Switch,
  NavLink,
} from 'react-router-dom';
import { Link } from 'react-scroll';

const WelcomeSection = () => {
    
    return (
        <section className="welcome-section">
            <div className="container">
                <div className="logo-box"></div>
                <div className="photo-txt-box">
                    <div className="photo__box">
                        <div className="photo"></div>
                    </div>
                    <div className="txt__box">
                        <h1>Potrzebujesz pomocy dietetyka?</h1>
                        <div className="short-line"></div>
                        <h2>Poznaj moją ofertę, wybierz dogodną opcję i skontaktuj się ze mną</h2>
                    </div>
                </div>
            </div>
            <div className="white-cut">
                <div className="container reducer">
                    <div className="button-box">
                        <div className="short-line"></div>
                        <Link to="about-blog" smooth="true" duration={500}>
                            <button>Czytaj więcej</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WelcomeSection;