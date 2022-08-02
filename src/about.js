import React from 'react';
import { Link } from "react-scroll";
import styles from './about.module.scss'
import github from "./assets/github.svg";
import linkedin from "./assets/linkedin.svg";
import arrow from "./assets/angle-down-solid.svg";

function About() {

  return (
    <header id="hello" className={styles.about}>
      <div className="wrapper">
          <div className={styles.aboutText}>
            <h1 className={styles.name}> Nick Gourlay</h1>
            <h2 className={styles.oneLiner}> junior front-end web developer</h2>
            <p className={styles.introDetails}>
              If you'd like to work together please get  
                  <Link
                        activeClass="active"
                        to="get in touch"
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
        <Link
          activeClass="active"
          to="about me"
          spy={true}
          smooth={true}
          duration={500}
          className={styles.arrowLink}
        > <div className={styles.imgContainer}><img src={arrow} alt="Down Arrow" className={styles.arrow} /></div></Link>
      </div>
    </header>
  );
}

export default About;
