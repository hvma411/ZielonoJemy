import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';
import firebase from '../config/firebase';
import parse from 'html-react-parser';

const SearchEngine = ({ tagToSearch, setTagToSearch }) => {

    const [tag, setTag] = useState('')

    const handleFormChange = (e) => {
        e.persist();
        setTag(e.target.value)
    };

    const handleSearchClick = (e) => {
        e.preventDefault()
        setTagToSearch(tag)
    }

    return (
        <div className="search-engine-box">
            <form className="search-form">
                <div className="input-box">
                    <label htmlFor="search-engine" className="hash">#</label>
                    <input id="search-engine" onChange={ handleFormChange } value={ tag } type="text" placeholder="Wpisz szukaną frazę..." />
                </div>
                <button onClick={ handleSearchClick } className="search-btn">Szukaj</button>
            </form>
        </div>
    )
}

export default SearchEngine;