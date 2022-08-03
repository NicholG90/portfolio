import React, { useState } from 'react';
import { ProjectsData } from './projectsData';
import Projects from './projects';
import styles from './carousel.module.scss'
import leftarrow from "./assets/angle-left-solid.svg";
import rightarrow from "./assets/angle-right-solid.svg";





function Carousel () {
    const [current, setCurrent] = useState(0);
    const length = ProjectsData.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(ProjectsData) || ProjectsData.length <= 0) {
        return null;
    }

    return (
        <section className={styles.projects}>
            <div onClick={prevSlide} className={styles.arrowContainer}><img src={leftarrow} alt="Left Arrow" className={styles.arrow} /><span className='sr-only'>Left</span></div>
            {ProjectsData.map((slide, index) => {
                return (
                    <div className={index === current ? `${styles.activeSlide}` : `${styles.slide}`} key={index}>
                        {index === current && (
                            <Projects {...slide} key={index} />
                        )}
                    </div>
                );
            })}
            <div onClick={nextSlide} className={styles.arrowContainer}><img src={rightarrow} alt="Right Arrow" className={styles.arrow} /><span className='sr-only'>Right</span></div>
        </section>
    );
};

export default Carousel;

// Carousel Inspiration came from: https://www.youtube.com/watch?v=l1MYfu5YWHc & https://github.com/briancodex/react-image-slider-carousel

