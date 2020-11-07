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

const App = () => {
    return (
        <>
            <HeaderSection />
            <WelcomeSection />
            <AboutBlogSection />
        </>
    );
};

ReactDOM.render(
    <App />, document.getElementById("app")
);