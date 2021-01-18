import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';
import firebase from '../config/firebase';

const AboutBlogSection = () => {

  const db = firebase.firestore();

  const [latestArticle, setLatestArticle] = useState([])
  const [latestRecipe, setLatestRecipe] = useState([])
  const [loadingArticles, setLoadingArticles] = useState(true);
  const [loadingRecipes, setLoadingRecipes] = useState(true);


  async function getAllArticles() {

      const articlesRef = await db.collection('articlesAndRecipes').doc('allPosts').collection('articles');

      let latestArticleArr = [];

      await articlesRef.where('isPublished', '==', true).orderBy('createDate', 'desc').limit(1).get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
              latestArticleArr.push({ id: doc.id, ...doc.data() })
          });
      })
      .catch((error) => {
          setLoadingArticles(true);
          console.error("Error while getting documents: ", error);
      });
      setLatestArticle(latestArticleArr)
      setLoadingArticles(false);
  };

  async function getAllRecipes() {

      const recipesRef = await db.collection('articlesAndRecipes').doc('allPosts').collection('recipes');

      let latestRecipeArr = [];

      await recipesRef.where('isPublished', '==', true).orderBy('createDate', 'desc').limit(1).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            latestRecipeArr.push({ id: doc.id, ...doc.data() })
        });
      })
      .catch((error) => {
          setLoadingRecipes(true);
          console.error("Error while getting documents: ", error);
      });
      setLatestRecipe(latestRecipeArr);
      setLoadingRecipes(false);
  }

  useEffect(() => {
      getAllArticles();
      getAllRecipes();
  }, [])

  // const setPublishedArticles = (latestArticle) => {
  //     let publishedArticles = [];

  //     latestArticle.forEach((article) => {
  //         if (article.isPublished) {
  //             publishedArticles.push(article)
  //         }
  //     })

  //     return publishedArticles;
  // }

  // console.log(latestArticle[0].featureImage)
  console.log(latestRecipe)
  
    return (
        <section className="about-blog-section">
          <div className="text-part-box container">
            <h2>Dlaczego Zielonojemy?</h2>
            <div className="under-line"></div>
            <h3>Mam dwie edukacyjne misje w życiu. Pierwszą jest zachęcanie do świadomych wyborów żywieniowych, abyśmy jako społeczeństwo mogli cieszyć się zdrowiem jak najdłużej. Drugą natomiast uświadamianie, że to, co jemy ma realny wpływ na naszą planetę. Jedząc bardziej roślinnie, możemy rozświetlić jej przyszłość!</h3>
          </div>
          <div className="new-posts-box">
            <div className="new-article-title-box">
              <div className="title">NAJNOWSZY ARTYKUŁ</div>
            </div>
            <div className="articles-recipes container">
              <div className="short-line-left"></div>
              { loadingArticles ? <div className="new__article post"></div> : <img src={ latestArticle[0].featureImage } className="new__article post" /> }
              <div className="logo"></div>
              { loadingRecipes ? <div className="new__recipe post"></div> : <img src={ latestRecipe[0].featureImage } className="new__recipe post" /> }
              <div className="short-line-right"></div>
            </div>
            <div className="new-recipe-title-box">
              <div className="title">NAJNOWSZY PRZEPIS</div>
            </div>
            
          </div>
        </section>
    );
};

export default AboutBlogSection;