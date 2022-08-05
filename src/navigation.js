import React from "react";
import { Link } from "react-scroll";
import styles from './navigation.module.scss'


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
                    to="about me"
                    spy={true}
                    smooth={true}
                    duration={500}
                >About</Link>
            </li>
            <li className={styles.listItem}>
                <Link
                    activeClass="active"
                    to="skills and tech"
                    spy={true}
                    smooth={true}
                    duration={500}
                >Skills</Link>
            </li>
            <li className={styles.listItem}>
                <Link
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    duration={500}
                >Projects</Link>
            </li>
            <li className={styles.listItem}>
                <Link
                    activeClass="active"
                    to="get in touch"
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