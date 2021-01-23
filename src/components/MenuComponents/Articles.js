import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';
import { InstagramFeed } from './Recipes';
import Pagination from '../AdminPanel/Pagination';
import firebase from '../../config/firebase';

const Articles = () => {

    const db = firebase.firestore();

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);

    async function getAllArticles() {

        const articlesRef = await db.collection('articlesAndRecipes').doc('allPosts').collection('articles');
        
        let articlesArr = [];

        await articlesRef.orderBy('createDate', 'desc').get().then((querySnapshot) => {
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
    };

    useEffect(() => {
        getAllArticles()
    }, [])



    const setPublishedArticles = (articles) => {
        let publishedArticles = [];

        articles.forEach((article) => {
            if (article.isPublished) {
                publishedArticles.push(article)
            }
        })

        return publishedArticles;
    }

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = setPublishedArticles(articles).slice(indexOfFirstPost, indexOfLastPost);

    // Change posts page (pagination)
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    
    return (
        <>
            <section className="articles">
                <div className="container articles__page">
                    <div className="articles-list">
                        <div className="title-pagination-box">
                        <h3 className="section__title">ARTYKUŁY</h3>
                            <Pagination postsPerPage={ postsPerPage } totalPosts={ setPublishedArticles(articles).length } paginate={ paginate } />
                        </div>
                        <span className="underline"></span>
                        <div className="articles__pagination">
                            {currentPosts.map((article, idx) => (
                                <Link key={ idx } to={'/articles/' + 'art/' + article.id}>
                                    <SingleArticle article={ article } />
                                </Link>
                            ))}
                            <Pagination postsPerPage={ postsPerPage } totalPosts={ setPublishedArticles(articles).length } paginate={ paginate } />
                        </div>
                    </div>
                    <div className="right__column">
                        <LatestArticle />
                        <InstagramFeed />
                    </div>
                </div>
            </section>
        </>
    );
};


const SingleArticle = ({ article }) => {

    //Time stamp
    function timeStampToString(ts) {
        const date = new Date(ts*1000);

        return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear(); 
    }

    return (
        <div className="article-box">
            {/* <div className="article__photo"></div> */}
            <img className="article__photo" src={article.featureImage} />
            <div className="article__data">
                <div className="article__title__date">
                    <h4 className="title">{ article.title }</h4>
                    <span className="date">{ timeStampToString(article.createDate.seconds) }</span>
                </div>
                <p className="article__cut__text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                </p>
                <div className="hash__tags">
                    {article.hashTags.map((hashTag, idx) => (
                        <span key={ idx } className="tag">{ hashTag }</span>
                    ))}
                </div>
            </div>

        </div>
    )
}

const LatestArticle = () => {
    return (
        <div className="latest">
            <h3 className="section__title">NAJNOWSZY</h3>
            <span className="underline"></span>
            <div className="latest-article-box">
                <div className="article__photo"></div>
                <div className="article__data">
                    <div className="article__title__date">
                        <h4 className="title">TYTUŁ ARTYKUŁU</h4>
                        <span className="date">21.02.2021</span>
                    </div>
                    <p className="article__cut__text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    </p>
                    <div className="hash__tags">
                        <span className="tag">#wegejestspoko</span>
                        <span className="tag">#happy</span>
                        <span className="tag">#pełenchillout</span>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Articles;