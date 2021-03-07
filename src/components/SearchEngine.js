import React, { Component, useState, useEffect, useContext } from "react";
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
import { SearchEngineContext } from '../App';

const SearchEngine = () => {

    const [tagToSearch, setTagToSearch] = useState('')


    const searchContext = useContext(SearchEngineContext)

    const handleFormChange = (e) => {
        e.persist();
        setTagToSearch(e.target.value)
    };

    const handleSearchClick = (e) => {
        e.preventDefault();
        searchContext.setHashTag(tagToSearch);
        searchContext.setIsModalVisible(true)
        // getResultDocuments()
    }

    return (
        <div className="search-engine-box">
            <form className="search-form">
                <div className="input-box">
                    <label htmlFor="search-engine" className="hash">#</label>
                    <input id="search-engine" onChange={ handleFormChange } value={ tagToSearch } type="text" placeholder="Wpisz szukaną frazę..." />
                </div>
                <button onClick={ handleSearchClick } className="search-btn">Szukaj</button>
            </form>
        </div>
    )
}

export default SearchEngine;