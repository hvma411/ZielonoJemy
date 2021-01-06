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
import { Recipes } from "./components/MenuComponents/Recipes";
import Services from "./components/MenuComponents/Services";
import About from "./components/MenuComponents/About";
import Contact from "./components/MenuComponents/Contact";
import AdminPanel from "./components/AdminPanel/AdminPanel";
import ScrollToTop from "./components/ScrollToTop";
import ArticleDisplay from './components/MenuComponents/ArticleDisplay';

const App = () => {
    return (
        <Router>
            <ScrollToTop>
                <HeaderSection />
                    <Switch>
                        <Route exact path="/">
                            <Main />
                        </Route>
                        <Route exact path="/articles">
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
                        <Route exact path="/articles/:articleID">
                            <ArticleDisplay />
                        </Route>
                    </Switch>
                <FooterSection />
                {/* <Route path="/panel">
                        <AdminPanel />
                </Route> */}
            </ScrollToTop>
        </Router>
    );
};

ReactDOM.render(
    <App />, document.getElementById("app")
);