import React from 'react';
import styles from './projects.module.scss'


function Projects(
    { projectName,
        projectTech,
        projectDescription,
        projectLiveLink,
        projectGithubLink,
        projectDesktopImage,
        projectID }) {
    return (
        <div className={styles.project}>
            <img src={projectDesktopImage} />
            <div className={styles.content}>
                <h2>{projectName}</h2>
                <ul className={styles.techList}>
                    {projectTech.map((data, index) => {
                        return <li className={styles.techItem} key={index}>{data}</li>
                    })}
                </ul>
                <p className={styles.projectParagraph}>{projectDescription}</p>
                <div className={styles.projectButtons}>
                    <button className={styles.linkButton}><a href={projectLiveLink} target="_blank">Live Project</a></button>
                    <button className={styles.linkButton}><a href={projectGithubLink} target="_blank">Github Link</a></button>
                </div>
            </div>
        </div>
    );
}

export default Projects;
