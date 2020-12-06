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
                <div className="container">
                    ARTICLES PAGE
                </div>
            </section>
        </>
    );
};

export default Articles;