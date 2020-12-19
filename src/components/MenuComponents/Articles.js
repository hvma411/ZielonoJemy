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

const Articles = () => {
    return (
        <>
            <section className="articles">
                <div className="container articles__page">
                    <div className="articles-list">
                        <h3 className="section__title">ARTYKUŁY</h3>
                        <span className="underline"></span>
                        <div className="articles__pagination">
                            <SingleArticle />
                            <SingleArticle />
                            <SingleArticle />
                            <SingleArticle />
                        </div>
                    </div>
                <LatestArticle />
                </div>
            </section>
        </>
    );
};


const SingleArticle = () => {
    return (
        <div className="article-box">
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