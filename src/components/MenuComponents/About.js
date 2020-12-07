import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';
import CertificateCarousel from "./CertificateCarousel";

const About = () => {
    return (
        <section className="about__me">
            <div className="container about__page">
                <div className="about__main__wrapper">
                    <div className="photo"></div>
                        <h2>Cześć, mam na imię Karolina</h2>
                        <h4>Jestem dietetykiem klinicznym, miłośniczką dobrej kawy i fanką diety roślinnej.</h4>
                        <p>Dyplom uzyskałam na Wydziale Lekarskim Collegium Medicum Uniwersytetu Jagiellońskiego w Krakowie. Dietetyką zaczęłam interesować się już w liceum, czyli w tym roku minie 6 lat, odkąd przeczytałam pierwsze podręczniki z nią związane. Chciałabym Ci pokazać, że <strong>zbilansowana dieta</strong> i <strong>aktywność fizyczna</strong> to droga do zdrowia i dobrego samopoczucia. Co ważne - nie potrzebujesz do tego garści suplementów, diety cud czy detoksów.
                            Jaką dietetykę popularyzuję? Opartą na faktach <strong>naukowych</strong> w przystępnej formie, abyś bez wykształcenia okołomedycznego czuł/a ten klimat.
                        </p>
                        <p>Poza ukończonymi studiami, uczestniczyłam w wielu <strong>konferencjach</strong>, <strong>warsztatach</strong> i <strong>szkoleniach</strong> (na certyfikaty możesz zerknąć poniżej). Jestem współautorką publikacji naukowej „Czy zmiany w mikrobiocie jelitowej mogą wpływać na występowanie nadwrażliwości pokarmowej” przedstawionej na międzynarodowej  konferencji. Moja praca licencjacka została opublikowana w czasopiśmie Medicina Sportiva, co również uważam za niemały sukces. 
                            W grudniu 2020 r. ukończyłam szkolnie <strong>SOIT</strong> przygotowujące mnie do pracy z pacjentami z insulinoopornością. Od tego momentu możesz znaleźć mnie na stronie „Fundacja Insulinooporność – zdrowa dieta i zdrowe życie” na liście <strong>polecanych przez fundację specjalistów</strong>.
                        </p>
                        <p>Z luźniejszych informacji „o mnie” mogę Ci powiedzieć, że postrzępione jeansy, trampki i T-shirt to zestaw, w którym najczęściej mnie zobaczysz. Moje zdolności makeupowe zaczynają się i kończą na malowaniu rzęs, a rano zamiast się uczesać wolę zjeść śniadanie. Uwielbiam czarną kawę przelewową, najlepiej wypijaną w towarzystwie przyjaciół w klimatycznej kawiarni, do których mam totalną słabość.
                            Z racji, że sport to zdrowie, staram się aby regularnie u mnie gościł. Rower, bieganie i pływanie to moja ulubiona trójka, z kolei z aktywności zimowych jedyną akceptowaną jest morsowanie.
                        </p>
                        <p>Jak już zdążyłeś/aś przeczytać na początku, jestem zwolenniczką <strong>diety roślinnej</strong>. Wynika to z mojego niepokoju w kwestii postępujących <strong>zmian klimatu</strong>, które możemy spowolnić stawiając na świadome wybory żywieniowe.
                            Spędzając czas na tej stronie uważaj na siebie, bo pewnie nie jeden raz padniesz ofiarą mojej <strong>fleksitariańskiej</strong> propagandy.
                        </p>
                        <p>Mam nadzieję, że zostaniesz ze mną na dłużej. Z miłą chęcią podzielę się z Tobą moją wiedzą i przepisami, natomiast jeśli potrzebujesz indywidualnego wsparcia, zapraszam Cię do <strong>współpracy</strong> (szczegóły znajdziesz w zakładce „oferta”).</p>
                </div>
                
            </div>
            <CertificateCarousel />
            


        </section>
    );
};

export default About;