import React from 'react';
import styles from './AboutMeStyles.module.css';

import WhatIDo from './WhatIDo/WhatIDo';
import AboutMeCard from '../../common/AboutMeCards/AboutMeCard';

import Background from './Background/Background';
import Skills from './Skills/Skills';
import Experience from './Experience/Experience';

function AboutMe() {

  return (
    <section id='aboutMe' className={styles.container}>
        <WhatIDo />

        <div className={styles.aboutMeCardContainer}>

          <div id='background'className={styles.aboutMeCard}>
            <AboutMeCard sectionTitle={<h3>Background</h3>} sectionContent={<Background />}/>
          </div>

          <div id='skills' className={styles.aboutMeCard}>
            <AboutMeCard sectionTitle={<h3>Skills</h3> }sectionContent={<Skills />}/>
          </div>

          <div id='experience' className={styles.aboutMeCard}>
            <AboutMeCard sectionTitle={<h3>Experience</h3>} sectionContent={<Experience />} />
          </div>

        </div>
        
    </section>
  )
}

export default AboutMe