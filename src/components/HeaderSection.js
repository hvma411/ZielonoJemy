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
                    <li>STRONA GŁÓWNA</li>
                    <li>ARTYKUŁY</li>
                    <li>PRZEPISY</li>
                    <li>OFERTA</li>
                    <li>O MNIE</li>
                    <li>KONTAKT</li>
                    <li>SZUKAJ</li>
                </ul>
            </nav>
            <div className="reducer-line"></div>
        </header>
    );
};

export default HeaderSection;