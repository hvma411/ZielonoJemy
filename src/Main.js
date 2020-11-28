import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
  Router,
} from 'react-router-dom';
import './scss/main.scss';
import HeaderSection from './components/HeaderSection';
import WelcomeSection from './components/WelcomeSection';
import AboutBlogSection from './components/AboutBlogSection';
import AboutMeSection from './components/AboutMeSection';
import ServicesSection from './components/ServicesSection';
import OpinionsSection from './components/OpinionsSection';
import FooterSection from './components/FooterSection';

const Main = () => {
    return (
        <>
            <WelcomeSection />
            <AboutBlogSection />
            <AboutMeSection />
            <ServicesSection />
            <OpinionsSection />
        </>
    );
};

export default Main;