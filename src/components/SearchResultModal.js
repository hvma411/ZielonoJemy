import React, { useState, useEffect } from 'react';
import SearchEngine from './SearchEngine';

const SearchResultModal = () => {

    const result = {
        src: 'http://www.pixelstalk.net/wp-content/uploads/2016/05/Photo-Images-Bing-background.jpg',
        title: 'Title of the article',
        content: 'Lorem ipsum dolor sit amet del ravioli con gusto mi amigo levante renumio...',
        date: '2021-02-21',
        tags: ['tagi', 'spoko', 'są']
    }

    const arr = [result, result, result, result, result, result]

    return (
        <div className="search-result-background">
            <div className="search-result-modal">
                <div className="list-box">
                    <ul className="result-list">
                        { arr.map((obj, idx) => (
                            <SingleSearchResult key={idx} result={ obj } />
                        ))}
                        {/* <SingleSearchResult result={ result } /> */}
                    </ul>
                </div>
                <SearchEngine />
            </div>
        </div>
    )
}

const SingleSearchResult = ({ result }) => {
    return (
        <li className="single-search-result">
            <img className="result-img" src={ result.src } />
            <div className="result-details">
                <div className="title-row">
                    <h3>{ result.title }</h3>
                    <span>{ result.date }</span>
                </div>
                <div className="content-row">{ result.content }</div>
                <ul className="tags-row">
                    { result.tags.map((value, idx) => (
                        <li key={ idx }>{ value }</li>
                    )) }
                </ul>
            </div>
        </li>
    )
}

export default SearchResultModal;