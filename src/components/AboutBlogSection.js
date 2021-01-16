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
  const [loading, setLoading] = useState(true);


  async function getAllArticles() {

      const articlesRef = await db.collection('articlesAndRecipes').doc('allPosts').collection('articles');
      const recipesRef = await db.collection('articlesAndRecipes').doc('allPosts').collection('recipes');

      let latestArticleArr = [];
      let latestRecipeArr = [];

      await articlesRef.where('isPublished', '==', true).orderBy('createDate', 'desc').limit(1).get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
              latestArticleArr.push({ id: doc.id, ...doc.data() })
          });
      })
      .catch((error) => {
          setLoading(true);
          console.error("Error while getting documents: ", error);
      });
      setLatestArticle(latestArticleArr)
      setLoading(false);

      await recipesRef.where('isPublished', '==', true).orderBy('createDate', 'desc').limit(1).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                latestRecipeArr.push({ id: doc.id, ...doc.data() })
            });
      })
      .catch((error) => {
          setLoading(true);
          console.error("Error while getting documents: ", error);
      });
      setLatestRecipe(latestRecipeArr);
      setLoading(false);
  };

  useEffect(() => {
    getAllArticles();
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
              <div className="new__article post">
                {loading ? <h1>abc</h1> : <h1>{ latestArticle[0].id }</h1>}
              </div>
              <div className="logo"></div>
              <div className="new__recipe post"></div>
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