import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';

import parse from 'html-react-parser';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Pagination from './Pagination';
import { faEdit, faSyncAlt, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const ArticleList = ({ db, isAdded, typeOfArticle }) => {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);


    //Get all articles from Firebase DB when isAdded props has changed
    async function getAllArticles() {

        const articlesRef = await db.collection('articlesAndRecipes').doc('allPosts').collection('articles');
        const recipesRef = await db.collection('articlesAndRecipes').doc('allPosts').collection('recipes');
        
        let articlesArr = [];

        if (typeOfArticle === 'articles') {
            await articlesRef.get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    articlesArr.push({ id: doc.id, ...doc.data() })
                });
            })
            .catch((error) => {
                setLoading(true);
                console.error("Error while getting documents: ", error);
            });
            setArticles(articlesArr);
            setLoading(false);

        } else {
            await recipesRef.get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    articlesArr.push({ id: doc.id, ...doc.data() })
                });
            })
            .catch((error) => {
                setLoading(true);
                console.error("Error while getting documents: ", error);
            });
    
            setArticles(articlesArr);
            setLoading(false);
        }
    };

    useEffect(() => {
        getAllArticles()
    }, [isAdded])


    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = articles.slice(indexOfFirstPost, indexOfLastPost);


    // Change posts page (pagination)
    const paginate = (pageNumber) => setCurrentPage(pageNumber);


    //Time stamp
    function timeStampToString(ts) {
        const date = new Date(ts*1000);

        return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear(); 
    }

    if (!loading) {
        return (
            <div className="data__box article__list">
                { typeOfArticle === 'article' ? <h4>Lista artykułów:</h4> : <h4>Lista przepisów:</h4>}
                <div className="refresh__btn" onClick={ getAllArticles }>
                    <FontAwesomeIcon icon={ faSyncAlt } />
                </div>
                <ul className="articles__pagination">
                    {currentPosts.map((article, idx) => (
                        <li className="single__article" key={ idx }>
                            <div className="title__date__box">
                                <h5>{ article.title }</h5>
                                <span>{ timeStampToString(article.createDate.seconds) }</span>
                            </div>
                            <div className="content__box">
                                {console.log(parse(article.content))}
                            </div>
                            <div className="action__btns__box">
                                <ul>
                                    <li>
                                        <FontAwesomeIcon icon={ faEdit } />
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={ faTrashAlt } />
                                    </li>
                                </ul>
                            </div>
                            <ul className="hash__tags__box">
                                {article.hashTags.map((hashTag, idx) => (
                                    <li className="hash__tag" key={idx}>
                                        { hashTag }
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
                <Pagination postsPerPage={ postsPerPage } totalPosts={ articles.length } paginate={ paginate } />
            </div>
        );
    } else {
        return (
            <div className="data__box article__list">
                { typeOfArticle === 'article' ? <h4>Lista artykułów:</h4> : <h4>Lista przepisów:</h4>}
                <div className="refresh__btn" onClick={ getAllArticles }>
                    <FontAwesomeIcon icon={ faSyncAlt } />
                </div>
                <div className="loading-box">
                    <span>Ładowanie...</span>
                </div>
            </div>
        );
    };
};

export default ArticleList;