import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';

const Services = () => {
    return (
        <section className="services">
            <div className="container services__page">
                <h3 className="section__title">WSPARCIE INDYWIDUALNE</h3>
                <span className="underline"></span>
                <SingleService data={servicesData.oneMonth} />
                <SingleService data={servicesData.twoMonths} />
                <SingleService data={servicesData.threeMonths} />
                <h3 className="section__title">OFERTA DLA FIRM</h3>
                <span className="underline"></span>
                <SingleService data={servicesData.bussinessOffer}/>
            </div>
        </section>
    );
};

const servicesData = {
    oneMonth: {
        title: "Miesięczne",
        subtitle: "Pakiet na start - chcesz rozpocząć swoją przygodę ze zdrowym odżywianiem",
        price: 170,
        detailsList: [
            "Indywidualny jadłospis 7-dniowy w pliku pdf do kilkukrotnego powtórzenia (ściąga na lodówkę, dokładne przepisy do każdego posiłku, ilość produktów w gramaturze oraz w miarach domowych, lista zakupów na cały tydzień)",
            "Wstępna konsultacja wideo lub telefoniczna",
            "Dostęp do aplikacji mobilnej na okres współpracy, w której znajdzie się Twoja dieta",
            "Lista zamienników, aby jadłospis był jeszcze prostszy do zastosowania",
            "Stały kontakt mailowy",
            "2 zmiany w jadłospisie",
            "Propozycja ewentualnej suplementacji",
            "Pierwszeństwo przedłużenia współpracy na kolejny miesiąc"
        ]
    },
    twoMonths: {
        title: "Dwumiesięczne",
        subtitle: "Czujesz, że miesiąc to za krótko, aby wypracować nowe nawyki żywieniowe",
        price: 290,
        detailsList: [
            "Indywidualny jadłospis 7-dniowy w pliku pdf do kilkukrotnego powtórzenia (ściąga na lodówkę, dokładne przepisy do każdego posiłku, ilość produktów w gramaturze oraz w miarach domowych, lista zakupów na cały tydzień)",
            "Wstępna konsultacja wideo lub telefoniczna",
            "Dostęp do aplikacji mobilnej na okres współpracy, w której znajdzie się Twoja dieta",
            "Lista zamienników, aby jadłospis był jeszcze prostszy do zastosowania",
            "Stały kontakt mailowy",
            "2 zmiany w jadłospisie",
            "Propozycja ewentualnej suplementacji",
            "Pierwszeństwo przedłużenia współpracy na kolejny miesiąc"
        ]
    },
    threeMonths: {
        title: "Trzymiesięczne",
        subtitle: "Odpowiedni wariant dla Ciebie, jeśli potrzebujesz więcej czasu i pracy, aby zmienić swoje odżywianie",
        price: 390,
        detailsList: [
            "Indywidualny jadłospis 7-dniowy w pliku pdf do kilkukrotnego powtórzenia (ściąga na lodówkę, dokładne przepisy do każdego posiłku, ilość produktów w gramaturze oraz w miarach domowych, lista zakupów na cały tydzień)",
            "Wstępna konsultacja wideo lub telefoniczna",
            "Dostęp do aplikacji mobilnej na okres współpracy, w której znajdzie się Twoja dieta",
            "Lista zamienników, aby jadłospis był jeszcze prostszy do zastosowania",
            "Stały kontakt mailowy",
            "2 zmiany w jadłospisie",
            "Propozycja ewentualnej suplementacji",
            "Pierwszeństwo przedłużenia współpracy na kolejny miesiąc"
        ]
    },
    bussinessOffer: {
        title: "Tworzenie etykiet produktowych",
        subtitle: null,
        price: null,
        detailsList: [
            "Indywidualny jadłospis 7-dniowy w pliku pdf do kilkukrotnego powtórzenia (ściąga na lodówkę, dokładne przepisy do każdego posiłku, ilość produktów w gramaturze oraz w miarach domowych, lista zakupów na cały tydzień)",
            "Wstępna konsultacja wideo lub telefoniczna",
            "Dostęp do aplikacji mobilnej na okres współpracy, w której znajdzie się Twoja dieta",
            "Lista zamienników, aby jadłospis był jeszcze prostszy do zastosowania",
            "Stały kontakt mailowy",
            "2 zmiany w jadłospisie",
            "Propozycja ewentualnej suplementacji",
            "Pierwszeństwo przedłużenia współpracy na kolejny miesiąc"
        ]
    }
}

const SingleService = ( {data} ) => {
    console.log(data.detailsList)
    return (
        <div className="service-box">
            <div className="service__details">
                <ul>
                    {data.detailsList.map( (data, idx) => <li key={idx}>{ data }</li>
                    )}
                </ul>

            </div>
            <span className="service__title">{ data.title }</span>
            { data.subtitle ? <span className="service__subtitle">{ data.subtitle }</span> : null}
            { data.price ? <span className="service__price">{ data.price }zł</span> : <span className="service__price"> Cena ustalana indywidualnie</span>}
        </div>
    )
}

export default Services;