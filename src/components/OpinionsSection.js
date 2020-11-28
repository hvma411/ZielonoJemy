import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';

const OpinionsSection = () => {
    return (
        <section className="opinions-section">
            <div className="container opinions-wrapper">
                <h2>Co mówią o mnie inni?</h2>
                <div className="underline"></div>
                <div className="opinions-slider">
                    {/* <div className="user-img"></div> */}
                    <div className="opinion-txt">
                        <h3>ANNA KOWALSKA</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temport incididunt ut laobre et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OpinionsSection;