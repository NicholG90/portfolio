import React from "react";
import Cocktail from "./cocktail";
import BreakTimer from "./breaktimer";
import About from "./about";
import Weighttracker from "./weighttracker";
import ContactForm from "./contact";
import styles from './main.module.css'


function Main(props) {

    return (
        <>
        <About />
        <Cocktail />
        <BreakTimer />
        <Weighttracker />
        <ContactForm />
        <footer className={styles.footer}>Nick Gourlay ©2021</footer>
        </>
    )
}

export default Main