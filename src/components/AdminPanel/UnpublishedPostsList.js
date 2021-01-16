import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';

const UnpublishedPostsList = ({ db }) => {

    const [articles, setArticles] = useState([])
    const [recipes, setRecipes] = useState([]);
    const [postToPublish, setPostToPublish] = useState({});

    //Get all unpublished articles from Firebase DB 
    async function getAllUnpublishedArticles() {

        const articlesRef = await db.collection('articlesAndRecipes').doc('allPosts').collection('articles');
        const recipesRef = await db.collection('articlesAndRecipes').doc('allPosts').collection('recipes');
        
        let articlesArr = [];
        let recipesArr = [];

        await articlesRef.get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                if (!doc.data().isPublished) {
                    articlesArr.push({ id: doc.id, ...doc.data() })
                }
            });
        })
        .catch((error) => {
            console.error("Error while getting documents: ", error);
        });
        setArticles(articlesArr);

        await recipesRef.get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                if (!doc.data().isPublished) {
                    recipesArr.push({ id: doc.id, ...doc.data() })
                }
            });
        })
        .catch((error) => {

            console.error("Error while getting documents: ", error);
        });
        setRecipes(recipesArr);
    };

    useEffect(() => {
        getAllUnpublishedArticles();
    }, [])

    const handlePostClick = (e) => {
        for (let i = 0; i < articles.length; i++) {
            if (articles[i].id === e.target.dataset.dbid) {
                setPostToPublish(prevState => ({
                    ...prevState,
                    [articles[i].id]: articles[i],
                }))
            }
        }

        console.log(postToPublish);

    }

    return (
        <div className="data__box schedule-box">
            <h4>Publikacja wpisu</h4>
            <div className="unpublished-posts-box">
                <h5>Wpisy do opublikowania:</h5>
                <ul>
                    { articles.map((article, idx) => (
                        <li key={ idx } className="unpublished-list-element">
                            { article.title } asd
                        </li>
                    )) }
                </ul>
            </div>
            <div className="unpublished-posts-box">
                <h5>Informację do publikacji:</h5>
                <ul>

                </ul>
            </div>
            <div className="unpublished-posts-box">
                <div className="articles-box">
                    <h5>Nieopublikowane artykuły:</h5>
                    <ul>
                        { articles.map((article, idx) => (
                            <li key={ idx } className="unpublished-list-element" data-dbid={ article.id } onClick={ handlePostClick }>
                                { article.title } asd
                            </li>
                        )) }
                    </ul>
                </div>
            </div>
            <div className="unpublished-posts-box">
                <div className="articles-box">
                    <h5>Nieopublikowane przepisy:</h5>
                    <ul>
                        { recipes.map((article, idx) => (
                            <li key={ idx } className="unpublished-list-element">
                                { article.title } asd
                            </li>
                        )) }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default UnpublishedPostsList;