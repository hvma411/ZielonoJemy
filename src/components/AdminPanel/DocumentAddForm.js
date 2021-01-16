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

import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";


const DocumentAddForm = ({ db, setIsAdded, typeOfRequest }) => {

    const [article, setArticle] = useState({
        title: '',
        content: '',
        currentHashTag: '',
        hashTags: [],
        createDate: new Date(),
        featureImage: '',
        isPublished: false,
        lastModified: new Date(),
        createUserId: ''

    })

    const modules = {
        toolbar: {
            container: [
                [{'header': '1'}, {'header': '2'}, {'font': []}],
                [{size: []}],
                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                [{'list': 'ordered'}, {'list': 'bullet'},
                    {'indent': '-1'}, {'indent': '+1'}],
                ['link', 'image', 'video'],
                ['clean'], ['code-block']
            ],
        },
        clipboard: {
            natchVisual: false,
        },
    }

    const format = [
        'header',
        'font',
        'size',
        'bold',
        'italic',
        'underline',
        'strike',
        'blockquote',
        'list',
        'bullet',
        'indent',
        'link',
        'image',
        'video',
        'code-block',
    ]


    const handleFormChange = (e) => {
        e.persist();

        if (e.target.name === 'currentHashTag') {
            setArticle(prevState => ({
                ...prevState,
                [e.target.name]: e.target.value.toLowerCase(),
            }));
        } else {
            setArticle(prevState => ({
                ...prevState,
                [e.target.name]: e.target.value,
            }));
        };
    }


    const handleCheckboxChange = (e) => {
        e.persist();
        setArticle(prevState => ({
            ...prevState,
            [e.target.name]: e.target.checked,
        }));
    }
    

    const handleHashTagAdd = (e) => {
        if (e.key === ' ') {
            e.preventDefault();
        }

        if (e.key === ' ' && article.currentHashTag !== '' || e.key === 'Enter' && article.currentHashTag !== '') {
            setArticle(prevState => ({
                ...prevState,
                hashTags: [...prevState.hashTags, `#${article.currentHashTag}`],
                currentHashTag: '',
            }));
        }
    };


    const onHashTagClick = (e) => {
        let editedHashTags = [...article.hashTags];
        const hashTagIdx = editedHashTags.indexOf(e.target.innerHTML)

        if (hashTagIdx !== -1) {
            editedHashTags.splice(hashTagIdx, 1);
            setArticle(prevState => ({
                ...prevState,
                hashTags: editedHashTags,
                currentHashTag: '',
            }));
        };
    };


    const handleContentChange = (e) => {
        setArticle(prevState => ({
            ...prevState,
            content: e
        }));
    };


    const articlesCounterDb = () => {
        const articlesCounterRef = db.collection('articlesAndRecipes').doc('allPosts');

        if (typeOfRequest === 'article') {
            if (article.isPublished) {
                const incrementCounter = articlesCounterRef.update({
                    articlesCounter: firebase.firestore.FieldValue.increment(1),
                });
            } else {
                const incrementCounter = articlesCounterRef.update({
                    articlesCounter: firebase.firestore.FieldValue.increment(1),
                    unpublishedArticles: firebase.firestore.FieldValue.increment(1),
                });
            }
        } else {
            if (article.isPublished) {
                const incrementCounter = articlesCounterRef.update({
                    recipesCounter: firebase.firestore.FieldValue.increment(1)
                });
            } else {
                const incrementCounter = articlesCounterRef.update({
                    recipesCounter: firebase.firestore.FieldValue.increment(1),
                    unpublishedRecipes: firebase.firestore.FieldValue.increment(1),
                });
            }
        }
    };


    const addHashTagsToDb = () => {
        const tagsRef = db.collection('articlesAndRecipes').doc('listOfTags');

        const setWithTagsMerge = tagsRef.update({
            articlesTags: firebase.firestore.FieldValue.arrayUnion(...article.hashTags)
        }, { 
            merge: true 
        })
        .then(() => {
            console.log("Tags succesfully updated!")
        })
        .catch((error) => {
            console.error("Error while updating tags: ", error);
        })
    };


    const addArticleToDb = () => {
        const articlesRef = db.collection('articlesAndRecipes').doc('allPosts').collection('articles');
        const recipesRef = db.collection('articlesAndRecipes').doc('allPosts').collection('recipes');

        addHashTagsToDb();
        articlesCounterDb();

        if (typeOfRequest === 'article') {
            const setNewArticle = articlesRef.add({
                ...article
            })
            .then(() => {
                console.log("Article succesfully added!")
                setIsAdded(true);
            })
            .then(() => {
                setIsAdded(false);
            })
            .catch((error) => {
                console.error("Error while updating tags: ", error);
            })
        } else {
            const setNewArticle = recipesRef.add({
                ...article
            })
            .then(() => {
                console.log("Recipe succesfully added!")
                setIsAdded(true);
            })
            .then(() => {
                setIsAdded(false);
            })
            .catch((error) => {
                console.error("Error while updating tags: ", error);
            })
        }


    };

    return (
        <div className="data__box">
            { typeOfRequest === 'article' ? <h4>Dodaj nowy artykuł</h4> : <h4>Dodaj nowy przepis</h4>}
            <form>
                <div className="inputs__box">
                    <div className="single__input__box">
                        <h5>Tytuł:</h5>
                        { typeOfRequest === 'article' ? 
                            <input type="text" name="title" id="articleTitle" onChange={ handleFormChange } value={ article.title } placeholder="Wpisz tytuł artykułu..." />
                            :
                            <input type="text" name="title" id="articleTitle" onChange={ handleFormChange } value={ article.title } placeholder="Wpisz tytuł przepisu..." />
                        }
                        <div className="is__published__box">
                            <label>
                                <input type="checkbox" name="isPublished" value={ article.isPublished } onChange={ handleCheckboxChange }/>
                                <span></span>
                            </label>
                            { typeOfRequest === 'article' ? <h5>Opublikuj artykuł po jego dodaniu</h5> : <h5>Opublikuj przepis po jego dodaniu</h5>}
                        </div>
                    </div>
                    <div className="single__input__box">
                        <h5>Tagi:</h5>
                        <input type="text" autoComplete="off" name="currentHashTag" id="articleHashTags" onKeyPress={ handleHashTagAdd } value={ article.currentHashTag } onChange={ handleFormChange } placeholder="Każdy tag oddzielaj enterem..." />
                        <div className="hash__tags__box">
                            { article.hashTags.map((value, idx) => <p key={ idx } className="hash__tag" onClick={ onHashTagClick }>{ value }</p>)}
                        </div>
                    </div>
                </div>
                <h5>Treść:</h5>
                <ReactQuill
                    // ref={ (el) => this.quill = el }
                    value={ article.content }
                    onChange={ handleContentChange }
                    theme="snow"
                    modules={ modules }
                    formats={ format }
                />
                <div className="btn__box">
                    <button type="button" className="submit__btn" onClick={ addArticleToDb }>
                    <FontAwesomeIcon icon={ faPlusSquare } /> Dodaj</button>
                </div>
            </form>
        </div>
    )
}

export default DocumentAddForm;