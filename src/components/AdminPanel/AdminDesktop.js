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
import { faCaretDown, faHome, faNewspaper, faBook, faTools, faRuler, faHeart, faFireAlt, faTasks, faAd } from '@fortawesome/free-solid-svg-icons'


const AdminDekstop = () => {
    return (
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
    )
}

export default AdminDekstop;