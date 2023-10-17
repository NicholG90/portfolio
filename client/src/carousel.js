import React, { useState } from 'react';
import { projectsData } from './projectsData';
import Projects from './projects';
import styles from './carousel.module.scss'


function Carousel () {
    const [current, setCurrent] = useState(0);
    const length = projectsData.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(projectsData) || projectsData.length <= 0) {
        return null;
    }

    return (
        <section className={styles.projects}>
            <div onClick={prevSlide} className={styles.arrowContainerLeft}><div className={styles.arrow}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z" /></svg></div><span className='sr-only'>Left</span></div>
            {projectsData.map((slide, index) => {
                return (
                    <div className={index === current ? `${styles.activeSlide}` : `${styles.slide}`} key={index}>
                        {index === current && (
                            <Projects {...slide} key={index} />
                        )}
                    </div>
                );
            })}
            <div onClick={nextSlide} className={styles.arrowContainerRight}><div className={styles.arrow}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" /></svg></div><span className='sr-only'>Right</span></div>
        </section>
    );
};

export default Carousel;

// Carousel Inspiration came from: https://www.youtube.com/watch?v=l1MYfu5YWHc & https://github.com/briancodex/react-image-slider-carousel

