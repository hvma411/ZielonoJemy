import { ta } from 'date-fns/locale';
import React, { useState, useEffect } from 'react';
import SearchEngine from './SearchEngine';
import firebase from '../config/firebase';
import parse from 'html-react-parser';



const SearchResultModal = () => {

    const db = firebase.firestore();

    const result = {
        src: 'http://www.pixelstalk.net/wp-content/uploads/2016/05/Photo-Images-Bing-background.jpg',
        title: 'Title of the article',
        content: 'Lorem ipsum dolor sit amet del ravioli con gusto mi amigo levante renumio...',
        date: '2021-02-21',
        tags: ['tagi', 'spoko', 'są']
    }

    const arr = [result, result, result, result, result, result]

    const [tagToSearch, setTagToSearch] = useState('')
    const [documents, setDocuments] = useState(null)
    const [loading, setLoading] = useState(true)

    async function getResultDocuments() {

        const recipesRef = await db.collection('articlesAndRecipes').doc('allPosts').collection('recipes');
        const articlesRef = await db.collection('articlesAndRecipes').doc('allPosts').collection('articles');
        
        let documentsArr = [];

        await recipesRef.where('hashTags', 'array-contains', '#' + tagToSearch).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                documentsArr.push({ id: doc.id, ...doc.data() })
            });
        })
        .catch((error) => {
            setLoading(true);
            console.error("Error while getting documents: ", error);
        });
        
        if (documentsArr.length > 0) {
            setDocuments(documentsArr);
        }
        // setLoading(false);

        await articlesRef.where('hashTags', 'array-contains', '#' + tagToSearch).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                documentsArr.push({ id: doc.id, ...doc.data() })
            });
        })
        .catch((error) => {
            setLoading(true);
            console.error("Error while getting documents: ", error);
        });

        if (documentsArr.length > 0) {
            setDocuments(documentsArr);
        }

        setLoading(false);
    };

    useEffect(() => {
        getResultDocuments()
        console.log(tagToSearch)
        console.log(documents)
    }, [tagToSearch])

    return (
        <div className="search-result-background">
            <div className="search-result-modal">
                <div className="list-box">
                    <ul className="result-list">
                        { documents != null ? documents.map((obj, idx) => (
                            <SingleSearchResult key={idx} result={ obj } />
                        )) : null }
                        {/* <SingleSearchResult result={ result } /> */}
                    </ul>
                </div>
                <div className="space-wrapper"></div>
                <SearchEngine tagToSearch={ tagToSearch } setTagToSearch={ setTagToSearch } />
            </div>
        </div>
    )
}

const SingleSearchResult = ({ result }) => {

    console.log(result)

    return (
        <li className="single-search-result">
            <img className="result-img" src={ result.featureImage } />
            <div className="result-details">
                <div className="title-row">
                    <h3>{ result.title }</h3>
                    <span>{ result.date }</span>
                </div>
                <div className="content-row">{ parse(result.content.slice(0, 97) + "...")}</div>
                <ul className="tags-row">
                    { result.hashTags.map((value, idx) => (
                        <li key={ idx }>{ value }</li>
                    )) }
                </ul>
            </div>
        </li>
    )
}

export default SearchResultModal;