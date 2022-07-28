import React from 'react';
import styles from './heading.module.scss'


function Heading( { title }) {

    return (
        <h2 className={styles.projectHeader}>{title}</h2>
    );
}

export default Heading;
