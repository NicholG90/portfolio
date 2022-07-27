import React from "react";
import About from "./about";
import Skills from "./skills";
import ContactForm from "./contact";
import styles from './main.module.css';
import AboutMe from './aboutme';
import Projects from "./projects";
import { ProjectData } from './projectsData';


function Main(props) {

    return (
        <>
            <About />
            <AboutMe />
            <Skills />
            <div className={styles.projects}>
                {ProjectData.map((data, index) => {
                    return <Projects {...data} key={index} />
                })}
            </div>
            <ContactForm />
            <footer className={styles.footer}>Nick Gourlay ©2021</footer>
        </>
    )
}

export default Main