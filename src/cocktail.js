import React from 'react';
import styles from './projects.module.css'
import cocktailimage from "./assets/cocktail.png";


function Cocktail() {


  return (
    <div id="cocktail" className={styles.cocktail}>
      <div className={styles.descriptor}>
        <h2 className={styles.projectHeader}>A Cocktail App</h2>
        <ul className={styles.techList}>
          <li>ReactJS</li>
          <li>Firebase OAuth and Database</li>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>API</li>
        </ul>
        <p className={styles.projectParagraph}>
          I put together a cocktail app that allows the user to search for specific cocktails, find cocktails based on the ingredients they have on hand and even just choose a random cocktail. Written in React with a Firebase database backend and OAth for users to save their favourite cocktails. 
        </p>
        <div className={styles.projectButtons}>
        <button className={styles.linkButton}><a href={'http://cocktails.gourlay.me'} >Live Project</a></button>
        <button className={styles.linkButton}><a href={'https://github.com/NicholG90/Cocktail-App'} >Github Link</a></button>
        </div>
      </div>
      <div className={styles.screenshotContainer}>
        <img src={cocktailimage} alt="Cocktail Website" className={styles.screenshot}/>
      </div>
    </div>
  );
}

export default Cocktail;
