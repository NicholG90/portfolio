import React from 'react';
import styles from './projects.module.scss'


function Projects(
    { projectName,
        projectTech,
        projectDescription,
        projectLiveLink,
        projectGithubLink,
        projectDesktopImage,
        projectMobileImage,
        projectID }) {
    return (
        <div className={styles.project}>
            <img src={projectDesktopImage} alt={`A desktop screenshot of my project titled ${projectName}`} className={styles.desktopImage} />
            <img src={projectMobileImage} alt={`A mobile screenshot of my project titled ${projectName}`} className={styles.mobileImage} />
            <div className={styles.content} tabIndex="0">
                <h2>{projectName}</h2>
                <ul className={styles.techList}>
                    {projectTech.map((data, index) => {
                        return <li className={styles.techItem} key={index}><p>{data}</p></li>
                    })}
                </ul>
                <p className={styles.projectParagraph}>{projectDescription}</p>
                <div className={styles.projectButtons}>
                    <button className={styles.linkButton}><a href={projectLiveLink} target="_blank" rel="noopener noreferrer">Live Project</a></button>
                    <button className={styles.linkButton}><a href={projectGithubLink} target="_blank" rel="noopener noreferrer">Github Link</a></button>
                </div>
            </div>
        </div>
    );
}

export default Projects;
