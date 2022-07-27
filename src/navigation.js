import React from "react";
import { Link } from "react-scroll";
import styles from './navigation.module.css'


function Navigation(props){

    return (
        <>
           <ul className={styles.navList}>
            <li className={styles.listItem}>
                <Link
                    activeClass="active"
                    to="hello"
                    spy={true}
                    smooth={true}
                    duration={500}
                >Hello</Link>
            </li>
            <li className={styles.listItem}>
                <Link
                    activeClass="active"
                    to="aboutme"
                    spy={true}
                    smooth={true}
                    duration={500}
                >About</Link>
            </li>
            <li className={styles.listItem}>
                <Link
                    activeClass="active"
                    to="skills"
                    spy={true}
                    smooth={true}
                    duration={500}
                >Skills</Link>
            </li>
            <li className={styles.listItem}>
                <Link
                    activeClass="active"
                    to="jldesign"
                    spy={true}
                    smooth={true}
                    duration={500}
                >Portfolio</Link>
            </li>
            <li className={styles.listItem}>
                <Link
                    activeClass="active"
                    to="contactform"
                    spy={true}
                    smooth={true}
                    duration={500}
                >Get In Touch</Link>
            </li>
            </ul>
    </>
    );
}

export default Navigation;