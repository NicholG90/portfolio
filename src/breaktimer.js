import React from 'react';
import styles from './projects.module.css'
import breaktimer from "./assets/breaktimer.jpg";


function BreakTimer() {


  return (
    <div id="breaktimer" className={styles.breaktimer}>
    <div className={styles.descriptor}>
      <h2 className={styles.projectHeader}>A Break Timer</h2>
      <ul className={styles.techList}>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>JQUERY</li>
      </ul>
      <p className={styles.projectParagraph}>
        A simple break timer built in with JQUERY. It allows the user to select a sepcific time length for their break or select from some popular choices. The timer then displays the amount of time remaining with styling changes to show how long is remaining.
      </p>
      <div className={styles.projectButtons}>
      <button className={styles.linkButton}><a href={'http://countdown.gourlay.me'}>Live Project</a></button>
      <button className={styles.linkButton}><a href={'https://github.com/NicholG90/countdown'}>Github Link</a></button>
      </div>
    </div>
    <div className={styles.screenshotContainer}>
      <img src={breaktimer} alt="Cocktail Website" className={styles.screenshot}/>
    </div>  
  </div>
  );
}

export default BreakTimer;
