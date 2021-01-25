import React from "react";
import ReactDOM from "react-dom";
import {
  Route,
  Switch,
  withRouter,
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
import ScrollToTop from "./components/ScrollToTop";
import DocumentDisplay from './components/MenuComponents/DocumentDisplay';

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
                        <Route exact path="/recipes">
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
                        <Route exact path="/articles/:typeOf/:documentID" component={withRouter(DocumentDisplay)} />
                        <Route exact path="/recipes/:typeOf/:documentID" component={withRouter(DocumentDisplay)} />
                    </Switch>
                <FooterSection />
            </ScrollToTop>
        </Router>
    );
};

ReactDOM.render(
    <App />, document.getElementById("app")
);