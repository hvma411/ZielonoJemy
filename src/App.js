import React, { useEffect, useState } from "react";
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
import SearchResultModal from "./components/SearchResultModal";

export const SearchEngineContext = React.createContext();

const App = () => {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [hashTag, setHashTag] = useState(null);

    return (
        <Router>
            <ScrollToTop>
                <SearchEngineContext.Provider value={{ isModalVisible, setIsModalVisible, hashTag, setHashTag }}>
                    <HeaderSection />
                        <Switch>
                            <Route exact path="/">
                                <Main setIsModalVisible={ setIsModalVisible } />
                            </Route>
                            <Route exact path="/articles">
                                <Articles setIsModalVisible={ setIsModalVisible } />
                            </Route>
                            <Route exact path="/recipes">
                                <Recipes setIsModalVisible={ setIsModalVisible } />
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
                    { isModalVisible ? <SearchResultModal setIsModalVisible={ setIsModalVisible } /> : null }
                </SearchEngineContext.Provider>
            </ScrollToTop>
        </Router>
    );
};

ReactDOM.render(
    <App />, document.getElementById("app")
);