import React from 'react';
import styles from './ProjectSkillUsedStyles.module.css'; 

function ProjectSkillUsed( {skills} ) {
  return (
    <div className={styles.skillsContainer}>
      {skills.map((skill) => {
        return <span className={styles.skillBadge}>
          {skill}
        </span>
    })}
    </div>
  )
}

export default ProjectSkillUsed