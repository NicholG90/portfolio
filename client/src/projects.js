import { React, useState } from 'react';
import styles from './projects.module.scss';

function Projects(
    { projectName,
        projectTech,
        projectDescription,
        projectLiveLink,
        projectGithubLink,
        projectDesktopImage,
        projectMobileImage,
        projectID }) {

    const [visible, setVisible] = useState(false);

    const handleClick = () => {
        setVisible(!visible);
    };


    return (
        <div className={styles.projectSection}>
            <div className={styles.project}>
                <img src={projectDesktopImage} alt={`A desktop screenshot of my project titled ${projectName}`} className={styles.desktopImage} />
                <img src={projectMobileImage} alt={`A mobile screenshot of my project titled ${projectName}`} className={styles.mobileImage} />
                <div when={visible}>
                    <div className={`${styles.content} ${visible ? styles.contentVisible : ''}`}>
                        <h2>{projectName}</h2>
                        <ul className={styles.techList}>
                            {projectTech.map((data, index) => {
                                return <li className={styles.techItem} key={index}><p>{data}</p></li>;
                            })}
                        </ul>
                        <p className={styles.projectParagraph}>{projectDescription}</p>
                        <div className={styles.projectButtons}>
                            <button className={styles.linkButton}><a href={projectLiveLink} target="_blank" rel="noopener noreferrer">Live Project</a></button>
                            <button className={styles.linkButton}><a href={projectGithubLink} target="_blank" rel="noopener noreferrer">Github Link</a></button>
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={handleClick} className={styles.testButton}>{visible ? 'Hide' : 'Show'} Project Details</button>
        </div>

    );
}

export default Projects;
