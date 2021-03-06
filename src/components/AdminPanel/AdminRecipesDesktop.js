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

import ArticleList from './ArticleList';
import DocumentAddForm from './DocumentAddForm';

const AdminRecipesDesktop = () => {

    const db = firebase.firestore();

    const [isAdded, setIsAdded] = useState(false);

    return (
        <div className="desktop__styled__box">
            <DocumentAddForm db={ db } setIsAdded={ setIsAdded } typeOfRequest={'recipe'} />
            <ArticleList db={ db } isAdded={ isAdded } typeOfRequest={'recipe'} />
        </div>
    )
}



export default AdminRecipesDesktop;