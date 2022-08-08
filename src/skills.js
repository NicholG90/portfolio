import React from 'react';
import styles from './skills.module.scss'
import Heading from "./heading"
import { skillsData } from './skillsData';


function Skills() {

  return (
    <div className={styles.skills}>
        <div className='wrapper'>
            <Heading title="skills and tech" id="skills"/>
            <ul className={styles.skillsList}>
              {skillsData.map((data, index) => {
                return ([
                <li className={styles.skillsItem} key={index}>
                  <img src={data.skillLogo} alt={`${data.skillName} Logo`} className={styles.logoImage} />
                  <div className={styles.skillsText}>{data.skillName}</div>
                </li>])
              })}
            </ul>
        </div>
    </div>
  );
}

export default Skills;
