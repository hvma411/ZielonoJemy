import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';


const AboutMeSection = () => {
    return (
        <section className="about-me-section">
            <div className="container photo-text-box">
                <div className="photo__box">
                    <div className="photo"></div>
                </div>
                <div className="text__box">
                    <div className="medium-line"></div>
                    <h2>Cześć, mam na imię Karolina</h2>
                    <h4>Jestem dietetykiem klinicznym, miłośniczką dobrej kawy i fanką diety roślinnej.</h4>
                    <p>Dyplom uzyskałam na Wydziale Lekarskim Collegium Medicum Uniwersytetu Jagiellońskiego w Krakowie. Dietetyką zaczęłam interesować się już w liceum, czyli w tym roku minie 6 lat, odkąd przeczytałam pierwsze podręczniki z nią związane. Chciałabym Ci pokazać, że zbilansowana dieta i aktywność fizyczna to droga do zdrowia i dobrego samopoczucia. Co ważne - nie potrzebujesz do tego garści suplementów, diety cud czy detoksów.
                    Jaką dietetykę popularyzuję? Opartą na faktach naukowych w przystępnej formie, abyś bez wykształcenia okołomedycznego czuł/a ten klimat.
                    </p>
                    <Link to="/about">
                        <button>Czytaj więcej</button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default AboutMeSection;