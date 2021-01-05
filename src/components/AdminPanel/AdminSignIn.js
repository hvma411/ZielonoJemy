import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';

const AdminSignIn = () => {
    return (
        <div className="sign__in">
            <div className="logo"></div>
            <h2>Halko! Zaloguj się :)</h2>
            <form className="sign__in--form">
                <input type="text" placeholder="Login" />
                <input type="password" placeholder="Password"/>
                <div className="button__box">
                    <button>Zaloguj się</button>
                </div>
            </form>
        </div>
    )
}

export default AdminSignIn;