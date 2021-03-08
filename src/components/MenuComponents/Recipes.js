import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';
import FooterSection from "../FooterSection";
import HeaderSection from "../HeaderSection";

import Feed from 'react-instagram-authless-feed';
import Pagination from '../AdminPanel/Pagination';
import firebase from '../../config/firebase';
import parse from 'html-react-parser';
import Promoted from "./Promoted";
import SearchEngine from "../SearchEngine";

const Recipes = () => {

    const db = firebase.firestore();

    const [recipes, setRecipes] = useState([])
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);

    async function getAllRecipes() {

        const recipesRef = await db.collection('articlesAndRecipes').doc('allPosts').collection('recipes');
        
        let recipesArr = [];

        await recipesRef.orderBy('createDate', 'desc').get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                recipesArr.push({ id: doc.id, ...doc.data() })
            });
        })
        .catch((error) => {
            setLoading(true);
            console.error("Error while getting documents: ", error);
        });
        setRecipes(recipesArr);
        setLoading(false);
    };

    useEffect(() => {
        getAllRecipes()
    }, [])

    const setPublishedRecipes = (recipes) => {
        let publishedRecipes = [];

        recipes.forEach((recipe) => {
            if (recipe.isPublished) {
                publishedRecipes.push(recipe)
            }
        })

        return publishedRecipes;
    }

        // Get current posts
        const indexOfLastPost = currentPage * postsPerPage;
        const indexOfFirstPost = indexOfLastPost - postsPerPage;
        const currentPosts = setPublishedRecipes(recipes).slice(indexOfFirstPost, indexOfLastPost);
    
        // Change posts page (pagination)
        const paginate = (pageNumber) => setCurrentPage(pageNumber);
        

    return (
        <>
            <section className="articles">
                <div className="container articles__page">
                    <div className="articles-list">
                        <div className="title-pagination-box">
                            <h3 className="section__title">PRZEPISY</h3>
                            <Pagination postsPerPage={ postsPerPage } totalPosts={ setPublishedRecipes(recipes).length } paginate={ paginate } />
                        </div>
                        <span className="underline"></span>
                        <div className="articles__pagination">
                            {currentPosts.map((recipe, idx) => (
                                <Link key={ idx } to={'/recipes/' + 'rec/' + recipe.id}>
                                    <SingleRecipe recipe={ recipe } />
                                </Link>
                            ))}
                            <Pagination postsPerPage={ postsPerPage } totalPosts={ setPublishedRecipes(recipes).length } paginate={ paginate } />
                        </div>
                    </div>
                    <div className="sidebar">
                        <h3 className="section__title">PROMOWANY WPIS</h3>
                        <span className="underline"></span>
                        <Promoted />
                        <InstagramFeed />
                        <h4 className="sidebar-wrapper-title">PRZESZUKAJ BLOGA</h4>
                        <SearchEngine />
                    </div>
                </div>
            </section>
        </>
    );
};


const SingleRecipe = ({ recipe }) => {

    //Time stamp
    function timeStampToString(ts) {
        const date = new Date(ts*1000);

        return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear(); 
    }

    return (
        <div className="article-box">
            <div className="img-container">
                <div className="recipe__photo" style={{ background: `url(${recipe.featureImage})`, backgroundSize: "cover", backgroundPosition: "center" }} ></div>
            </div>
            <div className="article__data">
                <div className="article__title__date">
                    <h4 className="title">{ recipe.title }</h4>
                    <span className="date">{ timeStampToString(recipe.createDate.seconds) }</span>
                </div>
                <div className="article__cut__text">
                 { parse(recipe.content.slice(0, 97) + "...")}
                </div>
                <div className="hash__tags">
                    {recipe.hashTags.map((hashTag, idx) => (
                        <span key={ idx } className="tag">{ hashTag }</span>
                    ))}
                </div>
            </div>
        </div>
    )
}


class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      // You can also log the error to an error reporting service
    }
  
    render() {
      if (this.state.hasError) {
        return (
          <div>
            <h1>Something went wrong.</h1>
            <p>
              N.B. VPN/NAT source ip addresses can trigger Instagram rate limits.
            </p>
          </div>
        );
      }
  
      return this.props.children;
    }
  }

const InstagramFeed = () => {
    return (
        <div className="instagram-feed">
            <h3 className="section__title">INSTAGRAM</h3>
            <span className="underline"></span>
            <ErrorBoundary>
                <Feed userName="zielonojemy" className="ig-box" limit="4" />
            </ErrorBoundary>
        </div>
    )
}

export { Recipes, InstagramFeed };