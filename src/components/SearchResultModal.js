import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom'
import SearchEngine from './SearchEngine';
import firebase from '../config/firebase';
import parse from 'html-react-parser';
import { SearchEngineContext } from '../App'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';



const SearchResultModal = () => {

    const db = firebase.firestore();

    const searchContext = useContext(SearchEngineContext);
    const tagToSearch = searchContext.hashTag
    const closeModal = () => {
        searchContext.setIsModalVisible(false)
        searchContext.setHashTag(null)
    }

    const [documents, setDocuments] = useState(null)
    const [loading, setLoading] = useState(true)
    const [spinner, setSpinner] = useState(false);

    async function getResultDocuments() {
        setSpinner(true)

        const recipesRef = await db.collection('articlesAndRecipes').doc('allPosts').collection('recipes');
        const articlesRef = await db.collection('articlesAndRecipes').doc('allPosts').collection('articles');
        
        let documentsArr = [];

        await recipesRef.where('hashTags', 'array-contains', '#' + tagToSearch).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                documentsArr.push({ id: doc.id, recipe: true, ...doc.data() })
            });
        })
        .catch((error) => {
            setLoading(true);
            console.error("Error while getting documents: ", error);
        });
        
        if (documentsArr.length > 0) {
            setDocuments(documentsArr);
        }

        await articlesRef.where('hashTags', 'array-contains', '#' + tagToSearch).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                documentsArr.push({ id: doc.id, article: true, ...doc.data() })
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
        setSpinner(false);
    };

    useEffect(() => {
        if (tagToSearch) {
            getResultDocuments()
        }
    }, [tagToSearch])

    return (
        <div className="search-result-background">
            <div className="search-result-modal">
                <div className="list-box">
                    <ul className="result-list">
                        { documents != null ? 
                            documents.map((obj, idx) => (
                                <SingleSearchResult key={idx} result={ obj } closeModal={ closeModal } />
                            )) : null  
                        }
                    </ul>
                </div>
                <div className="space-wrapper"></div>
                <SearchEngine />
                { loading ? <div className="loading-logo"></div> : null } 
                { spinner? <div className="loading-spinner"></div> : null}
            </div>
            <div className="close-btn" onClick={ () => closeModal(false) } >
                <FontAwesomeIcon icon={ faTimes } />
            </div>
        </div>
    )
}

const SingleSearchResult = ({ result, closeModal }) => {

    if (result.article) {
        return (
            <Link to={'/articles/' + 'art/' + result.id} onClick={ () => closeModal(false) } >
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
            </Link>
        )
    } else {
        return (
            <Link to={'/recipes/' + 'rec/' + result.id} onClick={ () => closeModal(false) }>
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
            </Link>
        )
    }


}

export default SearchResultModal;