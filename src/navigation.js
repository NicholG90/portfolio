import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import styles from './navigation.module.css'


function Navigation(props){
    const [click, setClick] = useState(false);
    const closeMobileMenu = () => setClick(false);


    return (
        <>
           <ul className={styles.navList}>
            <li>
                <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >About</Link>
            </li>
            <li>
                <Link
                    activeClass="active"
                    to="cocktail"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >Portfolio</Link>
            </li>
            <li>
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