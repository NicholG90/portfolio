import React from 'react';
import { Link } from "react-scroll";
import styles from './about.module.scss'
import github from "./assets/github.svg";
import linkedin from "./assets/linkedin.svg";
import arrow from "./assets/angle-down-solid.svg";

function About() {

  return (
    <div id="hello" className={styles.about}>
      <div className="wrapper">
      <div className={styles.aboutFlex}>
        <div className={styles.aboutText}>
          <header>
            <p className={styles.name}> Nick Gourlay</p>
            <p className={styles.oneLiner}> junior front-end web developer</p>
          </header>
          <p className={styles.introDetails}>
            If you think we could work together please get  
                <Link
                      activeClass="active"
                      to="contact"
                      spy={true}
                      smooth={true}
                      duration={500}
                      className={styles.link}
                  > in touch.</Link>
          </p>
          <div className={styles.logos}>
            <a href={'https://github.com/NicholG90'} target="_blank" rel="noreferrer"><img src={github} alt="GitHub Logo" className={styles.logoimage}/></a>
            <a href={'https://www.linkedin.com/in/nickgourlay/'} target="_blank" rel="noreferrer"><img src={linkedin} alt="LinkedIn Logo" className={styles.logoimage}/></a>
          </div>
        </div>
      </div>
        <Link
          activeClass="active"
          to="aboutme"
          spy={true}
          smooth={true}
          duration={500}
          className={styles.arrowLink}
        > <div className={styles.imgContainer}><img src={arrow} alt="Down Arrow" className={styles.arrow} /></div></Link>
      </div>
    </div>
  );
}

export default About;
