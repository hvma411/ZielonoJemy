import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import firebase from '../config/firebase';

const OpinionsSection = () => {

    const db = firebase.firestore();


    const [allOpinions, setAllOpinions] = useState({})
    const [loading, setLoading] = useState(true)


    async function getOpinions() {
        const opinionsRef = db.collection('opinions');

        let opinions = []

        await opinionsRef.get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                opinions.push({ id: doc.id, ...doc.data()});
            })
        }).catch(function(error) {
            setLoading(true);
            console.log("Error getting document:", error);
        });
        setAllOpinions(opinions)
        setLoading(false);
    }

    useEffect(() => {
        getOpinions();

    }, [])

    return (
        <section className="opinions-section">
            <div className="container opinions-wrapper">
                <h2>Co mówią o mnie inni?</h2>
                <div className="underline"></div>
                {loading ? null :
                    <Carousel swipeable={true} showThumbs={false} autoPlay={true} autoFocus={false} infiniteLoop={true} interval={4000} centerMode={true}>
                        { allOpinions.map((opinion, idx) => (
                            <div key={idx} className="opinions-slider">
                                <div className="opinion-txt">
                                    <h3>{ opinion.name }</h3>
                                    <p>{ opinion.opinion }</p>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                }
            </div>
        </section>
    );
};


<div className="opinions-slider">
<div className="user-img"></div>
<div className="opinion-txt">
    <h3>ANNA KOWALSKA</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temport incididunt ut laobre et dolore magna aliqua.</p>
</div>
</div>

export default OpinionsSection;