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
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >About</Link>
            </li>
            <li className={styles.listItem}>
                <Link
                    activeClass="active"
                    to="cocktail"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >Portfolio</Link>
            </li>
            <li className={styles.listItem}>
                <Link
                    activeClass="active"
                    to="contactform"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >Get In Touch</Link>
            </li>
            </ul>
    </>
    );
}

export default Navigation;