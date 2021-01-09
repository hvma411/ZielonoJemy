import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';

import firebase from '../../config/firebase';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faHome, faNewspaper, faBook, faTools, faRuler, faHeart, faFireAlt, faTasks, faAd } from '@fortawesome/free-solid-svg-icons'


const AdminDekstop = () => {

    const db = firebase.firestore();

    const [statisticsData, setStatisticsData] = useState({
        articlesCounter: '',
        recipesCounter: '',
        promotedCounter: '',
        guestLikes: '',
        unpublishedPosts: '',
        toDoThings: ''
    })


    async function getStatisticsData() {
        const statisticsDataRef = db.collection('articlesAndRecipes').doc('allPosts');

        await statisticsDataRef.get()
        .then((doc) => {
            setStatisticsData( prevState => ({
                ...prevState,
                articlesCounter: doc.data().articlesCounter,
                recipesCounter: doc.data().recipesCounter,
                unpublishedPosts: doc.data().unpublishedArticles + doc.data().unpublishedRecipes,
            }))
        })
        .catch((error) => {
            console.error("Error while getting documents: ", error);
        });
    };

    useEffect(() => {
        getStatisticsData();
    }, [])



    return (
        <div className="blog__statistics__box">
            <Link to="/panel/articles">
                <div className="item__statistics">
                    <div className="item__box">
                        <div className="item--counter">{ statisticsData.articlesCounter }</div>
                        <div className="item--title">Napisane artykuły</div>
                    </div>
                    <div className="item__img"><FontAwesomeIcon icon={ faNewspaper } /></div>
                </div>
            </Link>
            <div className="item__statistics">
                <div className="item__box">
                    <div className="item--counter">{ statisticsData.recipesCounter }</div>
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
                    <div className="item--counter">{ statisticsData.unpublishedPosts }</div>
                    <div className="item--title">Wpisy bez publikacji</div>
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