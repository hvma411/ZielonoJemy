import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import ReactHtmlParser from 'react-html-parser';
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';

const Services = () => {

    const servicesData = {
        oneMonth: {
            title: "Miesięczne",
            subtitle: "Pakiet na start - chcesz rozpocząć swoją przygodę ze zdrowym odżywianiem",
            price: 170,
            detailsList: [
                "Indywidualny jadłospis 7-dniowy w pliku PDF do kilkukrotnego powtórzenia (ściąga na lodówkę, dokładne przepisy do każdego posiłku, ilość produktów w gramaturze oraz w miarach domowych, lista zakupów na cały tydzień)",
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
                "Zaoszczędzasz 50 zł na dodatkową porcję warzyw",
                "Dwa indywidualne jadłospisy 7-dniowe w pliku PDF do kilkukrotnego powtórzenia (ściąga na lodówkę, dokładne przepisy do każdego posiłku, ilość produktów w gramaturze oraz w miarach domowych, lista zakupów na cały tydzień)",
                "Wstępna oraz kontrolna konsultacja wideo lub telefoniczna",
                "Dostęp do aplikacji mobilnej na okres współpracy, w której znajdzie się Twoja dieta",
                "Lista zamienników produktów, aby jadłospis był jeszcze prostszy do zastosowania",
                "Stały kontakt mailowy",
                "2 zmiany w jadłospisie",
                "Propozycja ewentualnej suplementacji",
                "Pierwszeństwo przedłużenia współpracy na kolejny okres"
            ]
        },
        threeMonths: {
            title: "Trzymiesięczne",
            subtitle: "Odpowiedni wariant dla Ciebie, jeśli potrzebujesz więcej czasu i pracy, aby zmienić swoje odżywianie",
            price: 390,
            detailsList: [
                "Trzy indywidualne jadłospisy 7-dniowe w pliku pdf do kilkukrotnego powtórzenia (ściąga na lodówkę, dokładne przepisy do każdego posiłku, ilość produktów w gramaturze oraz w miarach domowych, lista zakupów na cały tydzień)",
                "Dostęp do aplikacji mobilnej na okres współpracy, w której znajdzie się Twoja dieta",
                "Lista zamienników, aby jadłospis był jeszcze prostszy do zastosowania",
                "Wstępna oraz dwie kontrolne konsultacje wideo lub telefoniczne",
                "Stały kontakt mailowy",
                "2 zmiany w każdym jadłospisie",
                "Propozycja ewentualnej suplementacji",
                "Pierwszeństwo przedłużenia współpracy na kolejny okres"
            ]
        },
        bussinessOffer: {
            title: null,
            subtitle: "Tworzenie etykiet produktowych",
            price: null,
            moreInfo: "Prowadzisz kawiarnię/restaurację i potrzebujesz stworzyć etykiety na swoje produkty sprzedawane na wynos? Śmiało możesz oddać to w moje ręce. Tworzę opisy zgodne z Rozporządzeniem Parlamentu Europejskiego, dlatego możesz mieć pewność, że będą wykonane poprawnie i nic na nich nie zabraknie.",
            listTitle: "Jakie informacje między innymi muszą znaleźć się na etykiecie?",
            detailsList: [
                "Nazwa produktu",
                "Jego skład",
                "Tabela wartości odżywczych w przeliczeniu na 100g produktu oraz opcjonalnie na porcję",
                "Wyraźnie zaznaczone alergeny",
                "Producent",
                "Data przydatności i do spożycia",
            ]
        }
    }

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
                <SingleService data={servicesData.bussinessOffer} />
            </div>
        </section>
    );
};



const SingleService = ( {data} ) => {
    return (
        <div className="service-box">
            <div className="service__details">
                { data.moreInfo ? 
                    <div>
                        <h4>{ data.moreInfo }</h4>
                        <h4>{ data.listTitle }</h4>
                    </div> : null 
                }
                <ul>
                    {data.detailsList.map( (data, idx) => <li key={idx}>{ data }</li> )}
                </ul>
            </div>
            { data.title ? <span className="service__title">{ data.title }</span> : null}
            { data.subtitle ? <span className="service__subtitle">{ data.subtitle }</span> : null}
            { data.price ? <span className="service__price">{ data.price }zł</span> : <span className="service__price"> Cena ustalana indywidualnie</span>}
        </div>
    )

    
}

export default Services;