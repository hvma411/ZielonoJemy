import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
  useParams,
  BrowserRouter as Router,
} from 'react-router-dom';

const ArticleDisplay = () => {

    let { articleID } = useParams();

    return (
        <section className="article__display">
            <div className="container">
             Hello {articleID}
            </div>
        </section>
    )
}

export default ArticleDisplay;