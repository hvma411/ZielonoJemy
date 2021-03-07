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
import Articles from "./components/MenuComponents/Articles";
import Recipes from "./components/MenuComponents/Recipes";
import Services from "./components/MenuComponents/Services";
import About from "./components/MenuComponents/About";
import Contact from "./components/MenuComponents/Contact";
import ScrollToTop from "./components/ScrollToTop";

const Main = ({ setIsModalVisible }) => {
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