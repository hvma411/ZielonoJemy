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
                    <div className="right__column">
                        <LatestRecipe />
                        <InstagramFeed />
                    </div>
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