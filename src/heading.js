import React from 'react';
import styles from './heading.module.scss'


function Heading( { title, id }) {

    return (
        <div className={styles.heading} id={id}>
            <div className={styles.zigzag} aria-hidden="true"></div>
            <h2 className={styles.headerTitle}>{title}</h2>
        </div>
    );
}

export default Heading;
