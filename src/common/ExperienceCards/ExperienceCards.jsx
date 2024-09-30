import React from 'react';
import styles from './ExperienceCards.module.css';

function ExperienceCards({time, company, position, summary}) {
  return (
    <div className={styles.container}>

        <div className={styles.time}>
            <p>{time}</p>
        </div>

        <div className={styles.content}>
            <h3>{position} &middot; {company}</h3>
            <p>{summary}</p>
        </div>

    </div>
  )
}

export default ExperienceCards