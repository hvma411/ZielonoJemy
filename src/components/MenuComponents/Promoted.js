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
import parse from 'html-react-parser';

const Promoted = () => {

    const db = firebase.firestore();

    const [allData, setAllData] = useState([]);
    const [parentPath, setParentPath] = useState("");
    const [childrenPath, setChildrenPath] = useState("");
    const [loadingData, setLoadingData] = useState(true);

    const [articles, setArticles] = useState([])
    const [recipes, setRecipes] = useState([])
    const [loadingArticles, setLoadingArticles] = useState(true);
    const [loadingRecipes, setLoadingRecipes] = useState(true);

    async function getAllPromotedPosts() {

        const articlesRef = await db.collection('articlesAndRecipes').doc('allPosts').collection('articles');
        const recipesRef = await db.collection('articlesAndRecipes').doc('allPosts').collection('recipes');
        
        let articlesArr = [];
        let recipesArr = [];

        await articlesRef.where("isPromoted", "==", true).where("isPublished", "==", true).get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                articlesArr.push({ id: doc.id, ...doc.data(), type: "article" })
            });
        })
        .catch((error) => {
            console.error("Error while getting documents: ", error);
        });
        setArticles(articlesArr);
        setLoadingArticles(false);

        await recipesRef.where("isPromoted", "==", true).where("isPublished", "==", true).get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                recipesArr.push({ id: doc.id, ...doc.data(), type: "recipe" })
            });
        })
        .catch((error) => {
            console.error("Error while getting documents: ", error);
        });
        setRecipes(recipesArr);
        setLoadingRecipes(false);
    };

    const setAllPosts = () => {
        if (!loadingArticles && !loadingRecipes) {
            setAllData([...articles, ...recipes]);
            setLoadingData(false);
        }
    }

    const getRandomPostIndex = () => {
        let min = Math.ceil(0);
        let max = Math.floor(allData.length - 1);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let randomPostIndex = getRandomPostIndex();

    useEffect(() => {
        getRandomPostIndex();
    }, [])

    useEffect(() => {
        getAllPromotedPosts();
    }, [])

    useEffect(() => {
        setAllPosts();
    }, [loadingArticles, loadingRecipes])



    // const pathSeter = () => {
    //     if (!loadingData) {
    //         console.log(allData[randomPostIndex])
    //         if (allData[randomPostIndex].type === "article") {
    //             setParentPath("articles");
    //             setChildrenPath("art");
    //         } else {
    //             setParentPath("recipes");
    //             setChildrenPath("rec");
    //         }
    //     }
    // }



    // useEffect(() => {
    //     pathSeter();
    // }, [allData]);

    console.log(randomPostIndex);

    return (
        <div className="promoted">
            { loadingData ? <div className="loading-content"></div> : 
                <div className="promoted-post-box">
                    <div className="photo"></div>
                    <div className="data">
                        <h4 className="data__title">{ allData[randomPostIndex].title }</h4>
                        <div className="data__content">
                            { parse(allData[randomPostIndex].content.slice(0, 80) + "...") }
                        </div>
                        <ul className="data__tags">
                            { allData[randomPostIndex].hashTags.map((tag, idx) => (
                                <li key={ idx } className="tag">{ tag }</li>
                            )) }
                        </ul>
                        { allData[randomPostIndex].type != "article" ? 
                        <Link to={ '/recipes/' + 'rec/' + allData[randomPostIndex].id } >
                            <span className="read-more-btn">Czytaj więcej...</span>
                        </Link> 
                        :
                        <Link to={ '/articles/' + 'art/' + allData[randomPostIndex].id } >
                            <span className="read-more-btn">Czytaj więcej...</span>
                        </Link>
                        }
                    </div>
                </div>
            }
        </div>
    )
}

export default Promoted