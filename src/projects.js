import React from 'react';
import styles from './projects.module.scss'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

function Projects(
  { projectName, 
    projectTech, 
    projectDescription, 
    projectLiveLink, 
    projectGithubLink, 
    projectDesktopImage, 
    projectMobileImage,
    projectID}) {
  return (
    <div className={styles[projectID]}>
      <div className={styles.descriptor}>
              <h2 className={styles.projectHeader}>{projectName}</h2>
        <ul className={styles.techList}>
            {projectTech.map((data, index) => {
                return <li className={styles.techItem} key={index}>{data}</li>
            })}
        </ul>
        <p className={styles.projectParagraph}>{projectDescription}</p>
        <div className={styles.projectButtons}>
        <button className={styles.linkButton}><a href={projectLiveLink}>Live Project</a></button>
        <button className={styles.linkButton}><a href={projectGithubLink}>Github Link</a></button>
        </div>
      </div>
      <div className={styles.screenshotContainer}>
        <Zoom><img src={projectDesktopImage} alt={`${projectName} Desktop Homepage Screenshot`} className={styles.screenshot}/></Zoom>
        <Zoom><img src={projectMobileImage} alt={`${projectName} Mobile Homepage Screenshot`} className={styles.screenshotMobile}/></Zoom>
      </div>
    </div>
  );
}

export default Projects;
