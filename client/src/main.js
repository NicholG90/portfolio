import React from "react";
import About from "./about";
import Skills from "./skills";
import ContactForm from "./contact";
import styles from './main.module.scss';
import AboutMe from './aboutme';
import Heading from "./heading"
import Carousel from "./carousel";
import Fade from 'react-reveal/Fade';



function Main() {


    return (
        <div>
            <About />
            <Fade bottom>
                <AboutMe />
            </Fade>
            <Fade bottom>
                <Skills />
            </Fade>
            <Fade bottom>
                <div className="wrapper">
                    <Heading title="projects" id="projects" />
                </div>
                <div className={styles.projectsFull}>
                    <div className="wrapper">
                        <Carousel />
                    </div>
                </div>
            </Fade>
            <Fade bottom>
                <ContactForm />
                <footer className={styles.footer}>Nick Gourlay ©2022</footer>
            </Fade>

        </div>
    )
}

export default Main