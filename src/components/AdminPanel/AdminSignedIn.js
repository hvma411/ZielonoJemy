import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';

import AdminDekstop from './AdminDesktop';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faHome, faNewspaper, faBook, faTools, faRuler, faHeart, faFireAlt, faTasks, faAd } from '@fortawesome/free-solid-svg-icons'
import AdminArticlesDesktop from "./AdminArticlesDesktop";


const AdminSignedIn = () => {
    return (
        <div className="admin__signed__in">
            <div className="nav__bar">
                <div className="logo__wrapper">
                    <div className="logo"></div>
                    <h3>Zielonojemy</h3>
                </div>
                <div className="admin__profile--wrapper">
                    <div className="admin__profile">
                        <div className="visible__part">
                            <div className="photo"></div>
                            <h3>Karolina</h3>
                            <span className="arr__icon">
                                <FontAwesomeIcon icon={faCaretDown}  />
                            </span>
                        </div>
                        <div className="invisible__part">
                            <div className="profile__nav__btn">Edytuj profil</div>
                            <div className="profile__nav__btn">Wyloguj</div>
                        </div>
                    </div>
                </div>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/panel/desktop">
                                <div className="ico"><FontAwesomeIcon icon={ faHome } /></div>Pulpit
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/panel/articles">
                                <div className="ico"><FontAwesomeIcon icon={ faNewspaper } /></div> Artykuły
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/panel/recipes">
                                <div className="ico"><FontAwesomeIcon icon={ faBook } /></div> Przepisy
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/panel/promoted">
                                <div className="ico"><FontAwesomeIcon icon={ faFireAlt } /></div> Promowane
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/panel/schedule">
                                <div className="ico"><FontAwesomeIcon icon={ faRuler } /></div> Harmonogram
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/panel/to-do-list'>
                                <div className="ico"><FontAwesomeIcon icon={ faTasks } /></div> To-do-list
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/panel/settings'>
                                <div className="ico"><FontAwesomeIcon icon={ faTools } /></div> Ustawienia
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="display__bar">
                <div className="title__box">
                    <h2>Pulpit</h2>
                </div>
                <Route path="/panel/desktop" component={ AdminDekstop } />
                <Route path="/panel/articles" component={ AdminArticlesDesktop } />
            </div>
        </div>
    )
}

export default AdminSignedIn;