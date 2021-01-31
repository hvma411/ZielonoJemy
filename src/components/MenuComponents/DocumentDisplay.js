import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
  useParams,
  BrowserRouter as Router,
} from 'react-router-dom';
import parse from 'html-react-parser';
import firebase from '../../config/firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeart as faHeartSolid, faShareSquare } from '@fortawesome/free-solid-svg-icons'
// import { faShareSquare } from '@fortawesome/free-solid-svg-icons'
import Promoted from "./Promoted";
import SearchEngine from "../SearchEngine";

library.add(
    faHeart,
    faHeartSolid
)

const DocumentDisplay = () => {

    const db = firebase.firestore();

    let { typeOf, documentID } = useParams();

    const [document, setDocument] = useState('');
    const [loading, setLoading] = useState(true);

    async function getSingleDocument() {
        const articleToDisplay = db.collection('articlesAndRecipes').doc('allPosts').collection('articles').doc(documentID);
        const recipeToDisplay = db.collection('articlesAndRecipes').doc('allPosts').collection('recipes').doc(documentID);

        let documentToSet = {
            id: '',
            title: '',
            content: '',
            createDate: '',
            hashTags: [],
            featureImage: '',
        }

        if (typeOf == 'art') {
            await articleToDisplay.get().then(function(doc) {
                if (doc.exists) {
                    documentToSet = {
                        id: doc.id,
                        title: doc.data().title,
                        content: doc.data().content,
                        createDate: doc.data().createDate,
                        hashTags: doc.data().hashTags,
                        featureImage: doc.data().featureImage,
                    }
                } else {
                    console.log("No such document!");
                }
            }).catch(function(error) {
                setLoading(true);
                console.log("Error getting document:", error);
            });
            setDocument(documentToSet);
            setLoading(false);

        } else if (typeOf === 'rec') {
            await recipeToDisplay.get().then(function(doc) {
                if (doc.exists) {
                    documentToSet = {
                        id: doc.id,
                        title: doc.data().title,
                        content: doc.data().content,
                        createDate: doc.data().createDate,
                        hashTags: doc.data().hashTags,
                        featureImage: doc.data().featureImage,
                    }
    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch(function(error) {
                setLoading(true);
                console.log("Error getting document:", error);
            });
            setDocument(documentToSet);
            setLoading(false);
        }
    }

    useEffect(() => {
        getSingleDocument();
    }, [])
    
    if (!loading) {
        return (
            <section className="article-section">
                <div className="container section-wrapper">
                    <div className="article">
                        <img src={ document.featureImage } className="article__img"></img>
                        <div className="article__content">
                            <h1>{ document.title }</h1>
                            {parse(document.content)}
                            <span className="underline"></span>
                            <div className="tags-actions-row">
                                <div className="tags-box">
                                    <h4>TAGI:</h4>
                                    <ul className="tags-list">
                                        {document.hashTags.map((tag, idx) => (
                                            <li key={ idx } className="tag">{ tag }</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="actions-box">
                                    <LikeIt documentID={ documentID } db={ db } />
                                    <span className="share-it icon-box">
                                        <FontAwesomeIcon icon={ faShareSquare } />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sidebar">
                        <h4 className="sidebar-wrapper-title">PROMOWANY WPIS</h4>
                        <Promoted />
                        <h4 className="sidebar-wrapper-title">PRZESZUKAJ BLOGA</h4>
                        <SearchEngine />
                    </div>
                </div>
            </section>
        )
    } else {
        return (
            <section className="article__display">
                <div className="container">
                 <p>Ładowanie...</p> 
                </div>
            </section>
        )
    }

}

const LikeIt = ({ documentID, db }) => {

    const postLikesCounter = db.collection('articlesAndRecipes').doc('liked');

    const [likesCounter, setLikesCounter] = useState()
    const [likedStyle, setLikedStyle] = useState('far')

    
    const updateLikesInWeb = () => postLikesCounter.get().then((doc) => {
        setLikesCounter(doc.data()[documentID])

        if (getCookie(documentID)) {
            setLikedStyle('fas')
        } else {
            setLikedStyle('far')
        }
    })


    const setCookie = (name,value,days) => {
        let expires = "";
        if (days) {
            let date = new Date();
            date.setTime(date.getTime() + (days*24*60*60*1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "")  + expires + "; path=/";
    }

    const getCookie = (name) => {
        let nameEQ = name + "=";
        let ca = document.cookie.split(';');
        for(let i=0;i < ca.length;i++) {
            let c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    }

    const eraseCookie = (name) => {   
        document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }

    useEffect(() => {
        updateLikesInWeb()
    }, [])

    
    const handleLikeItClick = (e) => {

        if (getCookie(documentID)) {

            eraseCookie(documentID)
            setLikedStyle('far')
            
            const updateLikesInDb = postLikesCounter.update({
                [documentID]: firebase.firestore.FieldValue.increment(-1)
            })

            setLikesCounter(prevState => prevState - 1)
        } else {

            setCookie(documentID, 'liked', 9999)
            setLikedStyle('fas')

            const updateLikesInDb = postLikesCounter.update({
                [documentID]: firebase.firestore.FieldValue.increment(1)
            })

            setLikesCounter(prevState => prevState + 1)
        }
    }


    return (
        <span className="like-it icon-box" onClick={ handleLikeItClick }>
            <span className="like-it__counter">Polubienia: { likesCounter }</span>
            <div className="icon">
                <FontAwesomeIcon icon={[ likedStyle , 'heart']} />
            </div>
        </span>
    )
}

export default DocumentDisplay;