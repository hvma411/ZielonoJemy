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

import ArticleList from "./ArticleList";
import UnpublishedPostsList from "./UnpublishedPostsList";

const AdminScheduleDesktop = () => {

    const db = firebase.firestore();

    return (
      <div className="desktop__styled__box">
          <UnpublishedPostsList db={ db } />
      </div>
    )
}

export default AdminScheduleDesktop;