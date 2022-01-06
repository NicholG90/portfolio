import React from 'react';
// import { Link } from "react-scroll";
import styles from './aboutme.module.css'

function AboutMe() {

    return(
        <div id="about" className={styles.aboutMe}>
            <h2 className={styles.aboutMeHeader}>About me</h2>
            <p className={styles.aboutMePara}>
            I'm a front-end web developer with a strong managerial and operations background. My 7 years of operations experience has given me a effective foundation for both problem solving and building complex solutions while reinforcing my communication and analytical skills. Prior to that I graduated from the University of Toronto with a BA.
            I'm looking forward to joining a team alongside other skilled programmers and continuining to hone my development skills.
            <br />
            <br />
            Outside of front-end development I enjoy home automation (Home Assistant) and self-hosting which has given me a good introduction to Dev Ops, especially Docker.
            <br />
            <br />
            Other than coding, I thoroughly enjoy both running and triathlon; having completed the Toronto Marathon and the Muskoka Half Ironman in the past few years. 
            </p>
        </div>
    )
}

export default AboutMe