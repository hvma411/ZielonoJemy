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

const DocumentDisplay = () => {

    const db = firebase.firestore();

    let { documentID } = useParams();

    const [document, setDocument] = useState('');
    const [loading, setLoading] = useState(true);

    async function getSingleDocument() {
        const articleToDisplay = db.collection('articlesAndRecipes').doc('allPosts').collection('articles').doc(documentID);
        const recipeToDisplay = db.collection('articlesAndRecipes').doc('allPosts').collection('recipes').doc(documentID);

        let documentToSet = {
            title: '',
            content: '',
        }

        await articleToDisplay.get().then(function(doc) {
            if (doc.exists) {
                console.log("Document data:", doc.data());
                documentToSet = {
                    title: doc.data().title,
                    content: doc.data().content,
                    createDate: doc.data().createDate,
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

    useEffect(() => {
        getSingleDocument();
    }, [])
    
    if (!loading) {
        return (
            <section className="article-section">
                <div className="container section-wrapper">
                    <div className="article">
                        <img className="article__img"></img>
                        <div className="article__content">
                            <h1>{ document.title }</h1>
                            {parse(document.content)}
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