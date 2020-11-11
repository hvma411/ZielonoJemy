import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';

const AboutBlogSection = () => {
    return (
        <section className="about-blog-section">
          <div className="text-part-box container">
            <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed</h2>
            <div className="under-line"></div>
            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut</h3>
          </div>
          <div className="new-posts-box">
            <div className="new-article-title-box">
              <div className="title">NAJNOWSZY ARTYKUŁ</div>
            </div>
            <div className="articles-recipes container">
              <div className="short-line-left"></div>
              <div className="new__article post"></div>
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