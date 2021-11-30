import React from 'react';
import styles from './skills.module.css'
import github from "./assets/github.svg"
import docker from "./assets/docker.svg"
import git from "./assets/git.svg"
import firebase from "./assets/firebase.svg"
import html5 from "./assets/html5.svg"
import javascript from "./assets/javascript.svg"
import jquery from "./assets/jquery.svg"
import react from "./assets/react.svg"
import css3 from "./assets/css3.svg"


function Skills() {

  return (
    <div id="skills" className={styles.skills}>
        <div>
            <h2>Skills and Technologies</h2>
            <ul className={styles.skillsList}>
                <li className={styles.skillsItem}><img src={css3} alt="CSS3 Logo" className={styles.logoimage}/><div className={styles.skillsText}>CSS3</div></li>
                <li className={styles.skillsItem}><img src={react} alt="React Logo" className={styles.logoimage}/><div className={styles.skillsText}>ReactJS</div></li>
                <li className={styles.skillsItem}><img src={html5} alt="HTML5 Logo" className={styles.logoimage}/><div className={styles.skillsText}>HTML5</div></li>
                <li className={styles.skillsItem}><img src={jquery} alt="JQuery Logo" className={styles.logoimage}/><div className={styles.skillsText}>JQuery</div></li>
                <li className={styles.skillsItem}><img src={firebase} alt="Firebase Logo" className={styles.logoimage}/><div className={styles.skillsText}>Firebase</div></li>
                <li className={styles.skillsItem}><img src={javascript} alt="Javascript Logo" className={styles.logoimage}/><div className={styles.skillsText}>Javascript</div></li>
                <li className={styles.skillsItem}><img src={git} alt="Git Logo" className={styles.logoimage}/><div className={styles.skillsText}>Git</div></li>
                <li className={styles.skillsItem}><img src={github} alt="GitHub Logo" className={styles.logoimage}/><div className={styles.skillsText}>Github</div></li>
                <li className={styles.skillsItem}><img src={docker} alt="Docker Logo" className={styles.logoimage}/><div className={styles.skillsText}>Docker</div></li>
            </ul>
        </div>
    </div>
  );
}

export default Skills;
