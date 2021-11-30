import React from "react";
import Cocktail from "./cocktail";
import Jldesign from "./jldesign";
import BreakTimer from "./breaktimer";
import About from "./about";
// import Weighttracker from "./weighttracker";
import Skills from "./skills";
import ContactForm from "./contact";
import styles from './main.module.css'
import Fade from 'react-reveal/Fade';



function Main(props) {

    return (
        <>
        <Fade up duration={1000}>
        <About />
        </Fade>
        <div className={styles.projects}>
        <Fade left duration={1500}>
            <Jldesign />
        </Fade>
        <Fade right duration={1500}>
            <Cocktail />
        </Fade>
        <Fade left duration={1500}>
            <BreakTimer />
        </Fade>
        {/* <Weighttracker /> */}
        </div>
        <Fade up duration={1000}>
            <Skills />
            <ContactForm />
        </Fade>
        <footer className={styles.footer}>Nick Gourlay ©2021</footer>
        </>
    )
}

export default Main