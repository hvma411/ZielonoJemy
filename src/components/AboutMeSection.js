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
                    <h2>Cześć, jestem Karolina Furmańska</h2>
                    <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temport incididunt ut labore et dolore magna</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <button>Czytaj więcej</button>
                </div>
            </div>
        </section>
    );
};

export default AboutMeSection;