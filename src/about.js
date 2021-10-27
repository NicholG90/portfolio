import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import styles from './about.module.css'
import profileimage from "./assets/profile.JPG";
import github from "./assets/github.png";
import linkedin from "./assets/linkedin.png";




function About() {

  return (
    <div id="about" className={styles.about}>
      <header>
      <h2>Nick Gourlay</h2>
      <img src={profileimage} alt="Profile Image" className={styles.profileimage}/>
      </header>
      <p>
        Hi there! I'm Nick Gourlay, a junior front-end web developer.<br/>
        I've most recently been working in ReactJS but also have a broad level of expertise.<br/>
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
        <a href={'https://github.com/NicholG90'} target="_blank"><img src={github} altText="GitHub Logo" className={styles.logoimage}/></a>
        <a href={'https://github.com/NicholG90'} target="_blank"><img src={linkedin} altText="LinkedIn Logo" className={styles.logoimage}/></a>
      </div>
    </div>
  );
}

export default About;
