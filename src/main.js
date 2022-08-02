import React from "react";
import About from "./about";
import Skills from "./skills";
import ContactForm from "./contact";
import styles from './main.module.scss';
import AboutMe from './aboutme';
import Heading from "./heading"
import Carousel  from "./carousel";


function Main() {


    return (
        <>
            <About />
            <AboutMe />
            <Skills />
            <div className="wrapper">
                <Heading title="projects"/>
            </div>
            <div className={styles.projectsFull}>
                <div className="wrapper">
                    <Carousel />
                </div>
            </div>
            <ContactForm />
            <footer className={styles.footer}>Nick Gourlay ©2022</footer>
        </>
    )
}

export default Main