import React from 'react';
import styles from './aboutme.module.scss'
import profileimage from "./assets/profile.JPG";
import Heading from "./heading"


function AboutMe() {

    return(
        <div className={styles.aboutMe} id="aboutme">
            <div className='wrapper'>
                <div className={styles.imageContainer}>
                    <img src={profileimage} alt="Nick Gourlay Headshot" className={styles.profileImage} />
                </div>
                <Heading title="about me" id="aboutmesection" />
                <div className={styles.aboutMePara}>
                    <p>
                    I'm a front-end web developer with a strong managerial and operations background. My 7 years of operations experience has given me a effective foundation for both problem solving and building complex solutions while reinforcing my communication and analytical skills. Prior to that I graduated from the University of Toronto with a BA.
                    I'm looking forward to joining a team alongside other skilled programmers and continuining to hone my development skills.
                    </p>
                    <p>
                    Outside of front-end development I enjoy home automation (Home Assistant) and self-hosting which has given me a good introduction to Dev Ops, especially Docker.
                    </p>
                    <p>
                    Other than coding, I thoroughly enjoy both running and triathlon; having completed the Toronto Marathon and the Muskoka Half Ironman in the past few years. 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe