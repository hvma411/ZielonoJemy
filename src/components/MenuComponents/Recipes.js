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

const Recipes = () => {
    return (
        <>
            <section className="articles">
                <div className="container articles__page">
                    <div className="articles-list">
                        <h3 className="section__title">PRZEPISY</h3>
                        <span className="underline"></span>
                        <div className="articles__pagination">
                            <SingleRecipe />
                            <SingleRecipe />
                            <SingleRecipe />
                            <SingleRecipe />
                        </div>
                    </div>
                <LatestRecipe />
                </div>
            </section>
        </>
    );
};


const SingleRecipe = () => {
    return (
        <div className="article-box">
            <div className="recipe__photo"></div>
            <div className="article__data">
                <div className="article__title__date">
                    <h4 className="title">TYTUŁ PRZEPISU</h4>
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
    )
}

const LatestRecipe = () => {
    return (
        <div className="latest">
            <h3 className="section__title">NAJNOWSZY</h3>
            <span className="underline"></span>
            <div className="latest-article-box">
                <div className="recipe__photo"></div>
                <div className="article__data">
                    <div className="article__title__date">
                        <h4 className="title">TYTUŁ PRZEPISU</h4>
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

export default Recipes;