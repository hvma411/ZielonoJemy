import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';

const ServicesSection = () => {
    return (
        <section className="services-section">
            <div className="container section-wrapper">
                <h2>POZNAJ MOJE OPCJE WSPÓŁPRACY</h2>
                <div className="underline"></div>
                <div className="services-box">
                    <div className="service">
                        <h4>MIESIĘCZNA</h4>
                        <div className="service__img1"></div>
                        <h5>Potrzebujesz uporządkować sobie wiedzę z zakresu odżywiania, wystarczą Ci podstawowe wskazówki</h5>
                        <ul>
                            <li>Lorem ipsum dolor sit</li>
                            <li>Lorem ipsum dolor sit</li>
                            <li>Lorem ipsum dolor sit</li>
                        </ul>
                    </div>
                    <div className="service promoted">
                        <h4>DWUMIESIĘCZNA</h4>
                        <div className="service__img1"></div>
                        <h5>Czujesz, że miesiąc to za krótko, aby wypracować nowe nawyki żywieniowe</h5>
                        <ul>
                            <li>Lorem ipsum dolor sit</li>
                            <li>Lorem ipsum dolor sit</li>
                            <li>Lorem ipsum dolor sit</li>
                            <li>Lorem ipsum dolor sit</li>
                        </ul>
                    </div>
                    <div className="service">
                        <h4>TRZYMIESIĘCZNA</h4>
                        <div className="service__img1"></div>
                        <h5>Odpowiedni wariant dla Ciebie, jeśli potrzebujesz więcej czasu i pracy aby zmienić nawyki żywieniowe</h5>
                        <ul>
                            <li>Lorem ipsum dolor sit</li>
                            <li>Lorem ipsum dolor sit</li>
                            <li>Lorem ipsum dolor sit</li>
                        
                        </ul>
                    </div>
                </div>
                <button>Czytaj więcej</button>
            </div>
        </section>
    );
};

export default ServicesSection;