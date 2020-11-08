import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';
import './scss/main.scss';
import HeaderSection from './components/HeaderSection';
import WelcomeSection from './components/WelcomeSection';
import AboutBlogSection from './components/AboutBlogSection';
import AboutMeSection from './components/AboutMeSection';
import ServicesSection from './components/ServicesSection';
import OpinionsSection from './components/OpinionsSection';
import FooterSection from './components/FooterSection';

const App = () => {
    return (
        <>
            <HeaderSection />
            <WelcomeSection />
            <AboutBlogSection />
            <AboutMeSection />
            <ServicesSection />
            <OpinionsSection />
            <FooterSection />
        </>
    );
};

ReactDOM.render(
    <App />, document.getElementById("app")
);