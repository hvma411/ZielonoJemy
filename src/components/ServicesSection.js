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
                <h2>Poznaj moje opcje współpracy</h2>
                <div className="underline"></div>
                <div className="services-box">
                    <div className="service">
                        <h4>Miesięczna / 180zł</h4>
                        <div className="service__img1"></div>
                        <h5>Pakiet na start - chcesz rozpocząć swoją przygodę ze zdrowym odżywianiem</h5>
                        <ul>
                            <li><strong>Wstępna</strong> konsultacja wideo lub telefoniczna</li>
                            <li>Indywidualny jadłospis 7 dniowy</li>
                            <li><strong>Pierwszeństwo</strong> przedłużenia współpracy na kolejny miesiąc</li>
                        </ul>
                    </div>
                    <div className="service promoted">
                        <h4>Dwumiesięczna / 310zł</h4>
                        <div className="service__img1"></div>
                        <h5>Czujesz, że miesiąc to za krótko, aby wypracować nowe nawyki żywieniowe</h5>
                        <ul>
                            <li>Wstępna i <strong>kontrolna</strong> konsultacja wideo lub telefoniczna</li>
                            <li><strong>Dwa</strong> indywidualne jadłospisy 7 dniowe</li>
                            <li>Stały kontakt mailowy</li>
                            <li><strong>Zaoszczędzasz 50 zł</strong> na dodatkową porcję warzyw</li>
                        </ul>
                    </div>
                    <div className="service">
                        <h4>Trzymiesięczna / 410zł</h4>
                        <div className="service__img1"></div>
                        <h5>Potrzebujesz długoterminowej opieki i wsparcia</h5>
                        <ul>
                            <li>Wstępna i <strong>dwie</strong> kontrolne konsultacje wideo lub telefoniczne</li>
                            <li><strong>Nowy</strong> jadłospis 7-dniowy na każdy kolejny miesiąc współpracy</li>
                            <li>Długofalowe wsparcie dietetyka zwiększa Twoją szansę na sukces</li>
                        
                        </ul>
                    </div>
                </div>
                <button>Czytaj więcej</button>
            </div>
        </section>
    );
};

export default ServicesSection;