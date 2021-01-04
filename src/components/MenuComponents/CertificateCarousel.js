import React, { Component, useState, useEffect, useCallback } from "react";
import ReactDOM from "react-dom";
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';

import Carousel from 'react-elastic-carousel';

const CertificateCarousel = () => {

    const [state, setState] = useState([
            {id: 1, title: 'certificate #1'},
            {id: 2, title: 'certificate #2'},
            {id: 3, title: 'certificate #3'},
            {id: 4, title: 'certificate #4'},
            {id: 5, title: 'certificate #5'},
            {id: 6, title: 'certificate #6'},
            {id: 7, title: 'certificate #7'},
            {id: 8, title: 'certificate #8'},
    ]);

    const breakPoints = [
        {width: 1, itemsToShow: 1},
        {width: 640, itemsToShow: 3},
        {width: 1023, itemsToShow: 4}
    ]


    const [name, setName] = useState('foo')

    return (
        <>
            <Carousel breakPoints={ breakPoints }>
                { state.map(item => <Item number={ item.id } key={ item.id } title={ item.title } classToDisplay={ name } onClassChange={ setName } />)}
            </Carousel>
            <ItemBigView classToDisplay={ name } />
        </>
    )
}

const Item = ({ number, classToDisplay, onClassChange }) => {

    const handleClick = useCallback(e => {
        
        onClassChange(e.target.className);

        document.querySelector(".item__big__view").classList.add("item__big__view--visible");
        document.querySelector("body").style.overflow = "hidden";

    }, [onClassChange])
    
    return (
        <div className="carousel__item">
            <div className={ `certificate${number}` } onClick={ handleClick } />
        </div>
    );
}


const ItemBigView = ({ classToDisplay }) => {

    const handleCloseClick = (e) => {
        document.querySelector(".item__big__view").classList.remove("item__big__view--visible")
        document.querySelector("body").style.overflow = "visible";
    }

    return (
        <div className="item__big__view">
            <div className={`${ classToDisplay }`} />
            <div className="close-btn" onClick={ handleCloseClick } ></div>
        </div>
    )
}

export default CertificateCarousel;