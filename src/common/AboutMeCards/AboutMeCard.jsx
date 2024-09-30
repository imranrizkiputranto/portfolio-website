import React from 'react';
import styles from './AboutMeCard.module.css';

function AboutMeCard({ sectionTitle, sectionContent}) {
  return (
    <div className={styles.container}>
        <div className={styles.sectionTitle}>
            {sectionTitle}
        </div>

        <div className={styles.sectionContent}>
            {sectionContent}
        </div>
    </div>
  )
}

export default AboutMeCard