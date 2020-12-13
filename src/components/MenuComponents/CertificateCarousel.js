import React, { Component, useState, useEffect } from "react";
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

    return (
        <Carousel breakPoints={ breakPoints }>
            { state.map(item => <Item number={ item.id } key={ item.id } title={ item.title } />)}
        </Carousel>
    )
}

const Item = ({ number, title }) => 
    <div className="carousel__item">
        <div className={ `certificate${number}` } />
    </div>

export default CertificateCarousel;