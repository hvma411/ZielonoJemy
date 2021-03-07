import React, { Component, useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom";
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';
import FooterSection from './FooterSection';
import { SearchEngineContext } from '../App';

const HeaderSection = () => {

        let prevScrollpos = window.pageYOffset;

    window.onscroll = () => {
        let currentScrollPos = window.pageYOffset;
        if (prevScrollpos == 0 ) {
            document.querySelector('header').style.top = "0"
        } else if (prevScrollpos > currentScrollPos) {
            document.querySelector('header').style.top = "0";
        } else if (window.innerWidth < 1024) {
            document.querySelector('header').style.top = "0";
        } else {
            document.querySelector('header').style.top = "-65px"
        }
        prevScrollpos = currentScrollPos
    }

    const handleMobileNavClick = () => {
        const hamburger = document.querySelector('.hamburger');
        const hamburgerNav = document.querySelector('.hamburger-nav');
        const body = document.querySelector('body');

        hamburger.classList.toggle('hamburger--active');
        hamburgerNav.classList.toggle('hamburger-nav--active');
        body.style.overflow = body.style.overflow === 'hidden' ? '' : 'hidden';
    }

    const searchContext = useContext(SearchEngineContext)

    const openSearchBox = () => {
        console.log(searchContext)
        searchContext.setIsModalVisible(true)
    }
    

    return (
        <header>
            <div className="hamburger-nav">
                <ul>
                    <li><NavLink onClick={handleMobileNavClick} exact to="/" activeStyle={{ color: '#eff5ee' }}>STRONA GŁÓWNA</NavLink></li>
                    <li><NavLink onClick={handleMobileNavClick} to="/articles" activeStyle={{ color: '#eff5ee'  }}>ARTYKUŁY</NavLink></li>
                    <li><NavLink onClick={handleMobileNavClick} to="/recipes" activeStyle={{ color: '#eff5ee'  }}>PRZEPISY</NavLink></li>
                    <li><NavLink onClick={handleMobileNavClick} to="/services" activeStyle={{ color: '#eff5ee' }}>OFERTA</NavLink></li>
                    <li><NavLink onClick={handleMobileNavClick} to="/about" activeStyle={{ color: '#eff5ee' }}>O MNIE</NavLink></li>
                    <li><NavLink onClick={handleMobileNavClick} to="/contact" activeStyle={{ color: '#eff5ee' }}>KONTAKT</NavLink></li>
                    <li className="search" onClick={ openSearchBox } >SZUKAJ</li>
                </ul>
                <FooterSection />
            </div>
            <div className="reducer-line"></div>
            <nav className="main-nav container">
                <Link to="/" className="mobile-logo"/>
                <HamburgerMenu />
                <ul>
                    <li><Link to="/">STRONA GŁÓWNA</Link></li>
                    <li><Link to="/articles">ARTYKUŁY</Link></li>
                    <li><Link to="/recipes">PRZEPISY</Link></li>
                    <li><Link to="/services">OFERTA</Link></li>
                    <li><Link to="/about">O MNIE</Link></li>
                    <li><Link to="/contact">KONTAKT</Link></li>
                    <li onClick={ openSearchBox } >SZUKAJ</li>
                </ul>
            </nav>
            <div className="reducer-line"></div>
        </header>
    );
};

const HamburgerMenu = () => {
    const handleHamburgerClick = () => {
        const hamburger = document.querySelector('.hamburger');
        const hamburgerNav = document.querySelector('.hamburger-nav');
        const body = document.querySelector('body');
        
        hamburger.classList.toggle('hamburger--active');
        hamburgerNav.classList.toggle('hamburger-nav--active');
        body.style.overflow = body.style.overflow === 'hidden' ? '' : 'hidden';
    }

    return (
        <button className="hamburger" onClick={ handleHamburgerClick }>
            <span className="hamburger__box">
                <span className="hamburger__inner"></span>
            </span>
        </button>
        );
};

export default HeaderSection;