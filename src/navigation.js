import React from "react";
import styles from './navigation.module.scss'


function Navigation(props){

    return (
        <>
           <ul className={styles.navList}>
            <li className={styles.listItem}>
                <a href={"#hello"}>Hello</a>
            </li>
            <li className={styles.listItem}>
                <a href={"#aboutme"}>About Me</a>
            </li>
            <li className={styles.listItem}>
                <a href={"#skills"}>Skills</a>
            </li>
            <li className={styles.listItem}>
                <a href={"#projects"}>Projects</a>
            </li>
            <li className={styles.listItem}>
                <a href={"#contact"}>Get in Touch</a>
            </li>
            </ul>
    </>
    );
}

export default Navigation;