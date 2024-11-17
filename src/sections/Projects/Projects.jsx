import React from 'react';
import styles from './Projects.module.css';
import ProjectCard from '../../common/ProjectCard/ProjectCard';

function Projects() {
  return (
    <section id='projects' className={styles.container}>
      
      <div className={styles.projectsTitle}>
        <h3 className='sectionTitle'>Personal Projects</h3>
      </div>

      <div className={styles.projectsContainer}>

        <ProjectCard  
          link={'https://github.com/imranrizkiputranto/Leveraging-Big-Data-For-Business-Intelligence'}
          title={'Car Collision Risk Assessment'}
          description={"Developed predictive models to assess car collision risks for a New York-based car rental company, utilising weather data as a key factor. Model output was used to propose a dynamic pricing strategy for the insurance policies, aligning policy costs with the predicted risk."}
          skills={['SQL', 'Python', 'Numpy', 'Matplotlib', 'Scikit-Learn', 'Tensorflow', 'Excel', 'Powerpoint']}
        />

        <ProjectCard  
          link={'https://github.com/imranrizkiputranto/london-housing-analysis'}
          title={'London Housing Price Analysis'}
          description={'Linked factors influencing rental prices and property characteristics across different subdistricts in London. Key insights include variations in rent prices by location, furnishing type, and the impact of proximity to transportation. These insights can inform both prospective renters and real estate investors, aiding in decision-making processes.'}
          skills={[ 'Python', 'Numpy', 'Matplotlib', 'Seaborn']}
        />

        <ProjectCard  
          link={'https://github.com/imranrizkiputranto/jammming-v1'}
          title={'Jammming'}
          description={'Created a web application that integrates with the Spotify API to allow users to search for songs, create playlists, and save them directly to their Spotify account. Built using React, this project demonstrates proficiency in handling API requests, managing state with React components, and ensuring a responsive, user-friendly design. It offers a seamless music discovery and playlist creation experience.'}
          skills={[ 'JavaScript', 'CSS', 'HTML', 'React']}
        />    

        <ProjectCard  
          link={'https://github.com/imranrizkiputranto/computational-study-of-swallowing-disorders'}
          title={'Computational Study of Swallowing Disorders'}
          description={'Third-year Individual Research Project for the University of Bristol about the Computational Study of Swallowing Disorders. The project investigates the application of Smoothed Particle Hydrodynamics (SPH) to understand and diagnose dysphagia, a swallowing disorder.'}
          skills={[ 'Python', 'Numpy', 'Matplotlib', 'Computational Fluid Dynamics', 'SPH']}
        />    
        

      </div>
    </section>
  )
}

export default Projects