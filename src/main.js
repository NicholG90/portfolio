import React from "react";
import About from "./about";
import Skills from "./skills";
import ContactForm from "./contact";
import styles from './main.module.scss';
import AboutMe from './aboutme';
import Projects from "./projects";
import Heading from "./heading"
import { ProjectData } from './projectsData';


function Main(props) {

    return (
        <>
            <About />
            <AboutMe />
            <Skills />
            <div className="wrapper">
                <Heading title="Projects"/>
            </div>
                {ProjectData.map((data, index) => {
                    return <Projects {...data} key={data.projectID} />
                })}
            <ContactForm />
            <footer className={styles.footer}>Nick Gourlay ©2022</footer>
        </>
    )
}

export default Main