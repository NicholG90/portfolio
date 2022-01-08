import React from 'react';
import { Link } from "react-scroll";
import styles from './about.module.css'
import profileimage from "./assets/profile.JPG";
import github from "./assets/github.svg";
import linkedin from "./assets/linkedin.svg";
import arrow from "./assets/angle-down-solid.svg";

function About() {

  return (
    <div id="hello" className={styles.about}>
      <img src={profileimage} alt="Nick Gourlay Headshot" className={styles.profileImage}/>
      <div className={styles.aboutText}>
      <header>
      <p className={styles.intro}>Hello! I'm</p>
      <p className={styles.name}> Nick Gourlay</p>
      <p className={styles.oneLiner}> a junior front-end web developer.</p>
      </header>
      <p className={styles.introDetails}>
        I've most recently been working in ReactJS but also have a broad level of expertise.<br/>
        I've also built a good background in DevOps, especially with Docker, while experimenting on my home server.<br/>
        If you think we could work together please get  
            <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className={styles.link}
              > in touch.</Link>
      </p>
      <div className={styles.logos}>
        <a href={'https://github.com/NicholG90'} target="_blank" rel="noreferrer"><img src={github} alt="GitHub Logo" className={styles.logoimage}/></a>
        <a href={'https://www.linkedin.com/in/nickgourlay/'} target="_blank" rel="noreferrer"><img src={linkedin} alt="LinkedIn Logo" className={styles.logoimage}/></a>
      </div>
      <Link
                  activeClass="active"
                  to="jldesign"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className={styles.arrowLink}
              > <img src={arrow} alt="Down Arrow" className={styles.arrow}/></Link>
      </div>
    </div>
  );
}

export default About;
