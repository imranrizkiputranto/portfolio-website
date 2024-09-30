import React from 'react';
import styles from './Experience.module.css';

import ExperienceCards from '../../../common/ExperienceCards/ExperienceCards';

function Experience() {
  return (
    <div className={styles.container}>


        <div className={styles.experienceCard}>
            <ExperienceCards 
                time={'Jul - Aug 2022'} 
                company={'Star Energy Geothermal'} 
                position={'Engineering Intern'} 
                summary={'Evaluated past suction pump performance by collaborating with 3 teams from external companies. Improved suction pump performance and efficiency by solving a cavitation issue with senior engineers.'}
            />
        </div>

        <div className={styles.experienceCard}>
            <ExperienceCards 
                time={'Dec 2021 - May 2023'} 
                company={'University of Bristol'} 
                position={'Events Ambassador'} 
                summary={"Enhanced university outreach by coordinating large-scale recruitment events and adapting to each event's specific needs. Provided tours and assistance to campus visitors, ensuring they received comprehensive information of the university and its programmes."}
            />
        </div>

    </div>
  )
}

export default Experience