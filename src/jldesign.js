import React from 'react';
import styles from './projects.module.css'
import jldesignimage from "./assets/jldesign.png";


function Jldesign() {

  

  return (
    <div id="jldesign" className={styles.jldesign}>
      <div className={styles.descriptor}>
        <h2 className={styles.projectHeader}>JL Design Architecture Portfolio</h2>
        <ul className={styles.techList}>
          <li className={styles.techItem}>ReactJS</li>
          <li className={styles.techItem}>Nodemailer and NodeJS</li>
          <li className={styles.techItem}>HTML5</li>
          <li className={styles.techItem}>CSS3</li>
        </ul>
        <p className={styles.projectParagraph}>
          I worked with a small architectural firm in South Westen Ontario to put together a portfolio website that puts their designs front and centre.
          Built in React and using NodeJS with Nodemailer for the backend contact form. 
        </p>
        <div className={styles.projectButtons}>
        <button className={styles.linkButton}><a href={'http://jldesign.gourlay.me'}>Live Project</a></button>
        <button className={styles.linkButton}><a href={'https://github.com/NicholG90/JLDesign'}>Github Link</a></button>
        </div>
      </div>
      <div className={styles.screenshotContainer}>
        <img src={jldesignimage} alt="John Lucente Website" className={styles.screenshot}/>
      </div>
    </div>
  );
}

export default Jldesign;
