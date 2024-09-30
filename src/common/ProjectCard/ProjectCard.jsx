import React from 'react';

import ProjectSkillUsed from './ProjectSkillUsed';
import styles from './ProjectCardStyles.module.css';


function ProjectCard({ link, title, description, skills }) {
  return (
    <div className={styles.projectCardContainer}>

      {/* {Can add image container in future} */}
  
      <div className={styles.detailsContainer}>
          <a href={link} target='_blank'>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>

            <div className={styles.skillUsedContainer}>
              <ProjectSkillUsed skills={skills}/>
            </div>
            
          </a>
      </div>

    </div>
  )
}

export default ProjectCard;
