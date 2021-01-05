import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';

import AdminSignIn from './AdminSignIn';
import AdminSignedIn from './AdminSignedIn';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faHome, faNewspaper, faBook, faTools, faRuler, faHeart, faFireAlt, faTasks } from '@fortawesome/free-solid-svg-icons'




const AdminPanel = () => {
    return (
        <section className="admin__panel">
            {/* <AdminSignIn /> */}
            <AdminSignedIn />
        </section>
    );
};



export default AdminPanel;