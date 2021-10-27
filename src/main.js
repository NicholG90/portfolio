import React, { useState } from "react";
import Cocktail from "./cocktail";
import BreakTimer from "./breaktimer";
import About from "./about";
import Weighttracker from "./weighttracker";
import Contact from "./contact";
import styles from './main.module.css'


function Main(props) {

    return (
        <>
        <About />
        <Cocktail />
        <BreakTimer />
        <Weighttracker />
        <Contact />
        </>
    )
}

export default Main