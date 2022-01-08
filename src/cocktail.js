import React from 'react';
import styles from './projects.module.css'
import cocktailimage from "./assets/cocktail.png";
import cocktailmobile from "./assets/cocktailmobile.png"
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'



function Cocktail() {


  return (
    <div id="cocktail" className={styles.cocktail}>
      <div className={styles.descriptor}>
        <h2 className={styles.projectHeader}>Cocktail Shaker</h2>
        <ul className={styles.techList}>
          <li className={styles.techItem}>ReactJS</li>
          <li className={styles.techItem}>Firebase OAuth and Database</li>
          <li className={styles.techItem}>HTML5</li>
          <li className={styles.techItem}>CSS3</li>
          <li className={styles.techItem}>API</li>
        </ul>
        <p className={styles.projectParagraph}>
          A Cocktail App that allows the user to search for specific cocktails, find cocktails based on the ingredients and even choose a random cocktail. Designed and styled to harken back to 80s Synthwave. Written in React with a Firebase database backend and OAuth for users to save their favourite cocktails. 
        </p>
        <div className={styles.projectButtons}>
        <button className={styles.linkButton}><a href={'http://cocktails.gourlay.me'} >Live Project</a></button>
        <button className={styles.linkButton}><a href={'https://github.com/NicholG90/Cocktail-App'} >Github Link</a></button>
        </div>
      </div>
      <div className={styles.screenshotContainer}>
        <Zoom><img src={cocktailimage} alt="Cocktail Website" className={styles.screenshot}/></Zoom>
        <Zoom><img src={cocktailmobile} alt="Cocktail Website" className={styles.screenshotMobile}/></Zoom>
      </div>
    </div>
  );
}

export default Cocktail;
