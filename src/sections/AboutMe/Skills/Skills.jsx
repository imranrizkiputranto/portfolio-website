import React from 'react';
import styles from './Skills.module.css';
import SkillList from '../../../common/SkillList/SkillList'

function Skills() {
  return (
    <div className={styles.container}>

      <div className={styles.skillsContainer}>
        <h3>Languages</h3>
        <div className={styles.skillList}>
          <SkillList skill='Python' />
          <SkillList skill='SQL' />
          <SkillList skill='HTML' />
          <SkillList skill='CSS' />
          <SkillList skill='JavaScript' />
          <SkillList skill='MatLab' />
        </div>
      </div>

      <div className={styles.skillsContainer}>
        <h3>Libraries</h3>
        <div className={styles.skillList}>
          <SkillList skill='Scikit-Learn' />
          <SkillList skill='PyTorch' />
          <SkillList skill='LangChain' />
          <SkillList skill='Numpy' />
          <SkillList skill='Pandas' />
          <SkillList skill='Matplotlib & Seaborn' />
          <SkillList skill='React' />
          <SkillList skill='Redux' />
        </div>
      </div>
          
      <div className={styles.skillsContainer}>
        <h3>Tools</h3>
        <div className={styles.skillList}>
          <SkillList skill='Git, Github & GitLab' />
          <SkillList skill='PostgreSQL' />
          <SkillList skill='ElasticSearch' />
          <SkillList skill='Qdrant' />
          <SkillList skill='Chrome DevTools' />
          <SkillList skill='Excel' />
          <SkillList skill='Tableau' />
        </div>
      </div>
      
    </div>
  )
}

export default Skills