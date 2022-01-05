import React from 'react';
import styles from './projects.module.css'
import breaktimer from "./assets/breaktimer.jpg";
import breaktimermobile from "./assets/breaktimermobile.png";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'



function BreakTimer() {


  return (
    <div id="breaktimer" className={styles.breaktimer}>
    <div className={styles.descriptor}>
      <h2 className={styles.projectHeader}>A Break Timer</h2>
      <ul className={styles.techList}>
        <li className={styles.techItem}>HTML5</li>
        <li className={styles.techItem}>CSS3</li>
        <li className={styles.techItem}>JQUERY</li>
      </ul>
      <p className={styles.projectParagraph}>
        A break timer built with JQUERY. It allows the user to select a specific time length for their break or choose from some popular choices. The timer then displays the amount of time remaining with real time styling changes to show how long is remaining.
      </p>
      <div className={styles.projectButtons}>
      <button className={styles.linkButton}><a href={'http://countdown.gourlay.me'}>Live Project</a></button>
      <button className={styles.linkButton}><a href={'https://github.com/NicholG90/countdown'}>Github Link</a></button>
      </div>
    </div>
    <div className={styles.screenshotContainer}>
      <Zoom><img src={breaktimer} alt="Break Timer Website" className={styles.screenshot}/></Zoom>
      <Zoom><img src={breaktimermobile} alt="Break Timer Website" className={styles.screenshotMobile}/></Zoom>
    </div>  
  </div>
  );
}

export default BreakTimer;
