import React, { useState } from 'react';
import { ProjectsData } from './projectsData';
import Projects from './projects';
import styles from './carousel.module.scss'



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
            <button onClick={prevSlide}>Left</button>
            {ProjectsData.map((slide, index) => {
                return (
                    <div className={index === current ? `${styles.activeSlide}` : `${styles.slide}`} key={index}>
                        {index === current && (
                            <Projects {...slide} key={index} />
                        )}
                    </div>
                );
            })}
            <button onClick={nextSlide}>Right</button>
        </section>
    );
};

export default Carousel;

// Carousel Inspiration came from: https://www.youtube.com/watch?v=l1MYfu5YWHc & https://github.com/briancodex/react-image-slider-carousel

