import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faHome, faNewspaper, faBook, faTools, faRuler, faHeart, faFireAlt, faTasks } from '@fortawesome/free-solid-svg-icons'




const AdminPanel = () => {
    return (
        <section className="admin__panel">
            {/* <SignIn /> */}
            <AdminSignedInPanel />
        </section>
    );
};

const SignIn = () => {
    return (
        <div className="sign__in">
            <div className="logo"></div>
            <h2>Halko! Zaloguj się :)</h2>
            <form className="sign__in--form">
                <input type="text" placeholder="Login" />
                <input type="password" placeholder="Password"/>
                <div className="button__box">
                    <button>Zaloguj się</button>
                </div>
            </form>
        </div>
    )
}


const AdminSignedInPanel = () => {
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
                            <div className="ico">
                                <FontAwesomeIcon icon={ faHome } />
                            </div>
                            Pulpit
                        </li>
                        <li>
                            <div className="ico"><FontAwesomeIcon icon={ faNewspaper } /></div> Artykuły
                        </li>
                        <li>
                            <div className="ico"><FontAwesomeIcon icon={ faBook } /></div> Przepisy
                        </li>
                        <li>
                            <div className="ico"><FontAwesomeIcon icon={ faRuler } /></div> Zadania
                        </li>
                        <li>
                            <div className="ico"><FontAwesomeIcon icon={ faTools } /></div> Ustawienia
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="display__bar">
                <div className="title__box">
                    <h2>Pulpit</h2>
                </div>
                <div className="blog__statistics__box">
                    <div className="item__statistics">
                        <div className="item__box">
                            <div className="item--counter">23</div>
                            <div className="item--title">Napisane artykuły</div>
                        </div>
                        <div className="item__img"><FontAwesomeIcon icon={ faNewspaper } /></div>
                    </div>
                    <div className="item__statistics">
                        <div className="item__box">
                            <div className="item--counter">35</div>
                            <div className="item--title">Dodane przepisy</div>
                        </div>
                        <div className="item__img"><FontAwesomeIcon icon={ faBook } /></div>
                    </div>
                    <div className="item__statistics">
                        <div className="item__box">
                            <div className="item--counter">8/8</div>
                            <div className="item--title">Promowane wpisy</div>
                        </div>
                        <div className="item__img"><FontAwesomeIcon icon={ faFireAlt } /></div>
                    </div>
                    <div className="item__statistics">
                        <div className="item__box">
                            <div className="item--counter">93</div>
                            <div className="item--title">Polubienia gości</div>
                        </div>
                        <div className="item__img"><FontAwesomeIcon icon={ faHeart } /></div>
                    </div>
                    <div className="item__statistics">
                        <div className="item__box">
                            <div className="item--counter">8</div>
                            <div className="item--title">Zaplanowane wpisy</div>
                        </div>
                        <div className="item__img"><FontAwesomeIcon icon={ faRuler } /></div>
                    </div>
                    <div className="item__statistics">
                        <div className="item__box">
                            <div className="item--counter">3</div>
                            <div className="item--title">Do zrobienia</div>
                        </div>
                        <div className="item__img"><FontAwesomeIcon icon={ faTasks } /></div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default AdminPanel;