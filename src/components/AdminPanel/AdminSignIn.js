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
import "firebase/auth";

const AdminSignIn = () => {

    const [signIn, setSignIn] = useState({
        user: "",
        password: "",
    })

    const handleFormChange = (e) => {
        e.persist();
        setSignIn(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const signInFn = () => {
        firebase.auth().signInWithEmailAndPassword(signIn.user, signIn.password)
            .then((userCredential) => {
                console.log(userCredential.user)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        signInFn();
    }

    return (
        <section className="admin__panel">
            <div className="sign__in">
                <div className="logo"></div>
                <h2>Halko! Zaloguj się :)</h2>
                <form className="sign__in--form">
                    <input type="text" placeholder="E-mail" name="user" value={ signIn.user } onChange={ handleFormChange } />
                    <input type="password" placeholder="Password" name="password" value={ signIn.password } onChange={ handleFormChange } />
                    <div className="button__box">
                        <button onClick={ handleSubmit } type="button">Zaloguj się</button>
                    </div>
                </form>
            </div>
        </section>

    )
}

export default AdminSignIn;