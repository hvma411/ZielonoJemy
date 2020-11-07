import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';

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
                        <h1>Jestem tu po to żeby Ci pomóc</h1>
                        <div className="short-line"></div>
                        <h2>Sprawdź moje propozycje żywieniowe, przeczytaj bloga i skontaktuj się ze mną, a na pewno Ci pomogę!</h2>
                    </div>
                </div>
            </div>
            <div className="white-cut">
                <div className="container reducer">
                    <div className="button-box">
                        <div className="short-line"></div>
                        <button>Czytaj więcej</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WelcomeSection;