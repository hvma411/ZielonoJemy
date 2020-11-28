import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';

const HeaderSection = () => {
    return (
        <header>
            <div className="reducer-line"></div>
            <nav className="main-nav container">
                <div className="hamburger-menu"></div>
                <ul>
                    <li><Link to="/">STRONA GŁÓWNA</Link></li>
                    <li><Link to="/articles">ARTYKUŁY</Link></li>
                    <li><Link to="/recipes">PRZEPISY</Link></li>
                    <li><Link to="/services">OFERTA</Link></li>
                    <li><Link to="/about">O MNIE</Link></li>
                    <li><Link to="/contact">KONTAKT</Link></li>
                    <li>SZUKAJ</li>
                </ul>
            </nav>
            <div className="reducer-line"></div>
        </header>
    );
};

export default HeaderSection;