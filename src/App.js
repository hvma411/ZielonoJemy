import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
  BrowserRouter as Router,
} from 'react-router-dom';
import './scss/main.scss';
import Main from './Main'
import HeaderSection from "./components/HeaderSection";
import Articles from "./components/MenuComponents/Articles";
import FooterSection from "./components/FooterSection";
import Recipes from "./components/MenuComponents/Recipes";
import Services from "./components/MenuComponents/Services";
import About from "./components/MenuComponents/About";
import Contact from "./components/MenuComponents/Contact";

const App = () => {
    return (
        <Router>
            <HeaderSection/>
            <Switch>
                <Route exact path="/" component={Main} />;
                <Route path="/articles">
                    <Articles/>
                </Route>
                <Route path="/recipes">
                    <Recipes/>
                </Route>
                <Route path="/services">
                    <Services/>
                </Route>
                <Route path="/about">
                    <About/>
                </Route>
                <Route path="/contact">
                    <Contact/>
                </Route>
            </Switch>
            <FooterSection/>
        </Router>
    );
};

ReactDOM.render(
    <App />, document.getElementById("app")
);