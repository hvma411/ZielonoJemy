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
import { faHeart, faShareSquare } from '@fortawesome/free-solid-svg-icons'

const DocumentDisplay = () => {

    const db = firebase.firestore();

    let { typeOf, documentID } = useParams();

    const [document, setDocument] = useState('');
    const [loading, setLoading] = useState(true);

    async function getSingleDocument() {
        const articleToDisplay = db.collection('articlesAndRecipes').doc('allPosts').collection('articles').doc(documentID);
        const recipeToDisplay = db.collection('articlesAndRecipes').doc('allPosts').collection('recipes').doc(documentID);

        let documentToSet = {
            title: '',
            content: '',
            createDate: '',
            hashTags: [],
            featureImage: '',
        }

        if (typeOf == 'art') {
            await articleToDisplay.get().then(function(doc) {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    documentToSet = {
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

        } else if (typeOf === 'rec') {
            await recipeToDisplay.get().then(function(doc) {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    documentToSet = {
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
                                    <span className="like-it icon-box">
                                        <FontAwesomeIcon icon={ faHeart }/>
                                    </span>
                                    <span className="share-it icon-box">
                                        <FontAwesomeIcon icon={ faShareSquare } />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sidebar"></div>
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

export default DocumentDisplay;