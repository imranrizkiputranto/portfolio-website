import React from 'react';
import { useTheme } from '../../common/ThemeContext';

import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import CV from '../../assets/ImranRizkiPutranto_CV.pdf';

function Hero() {
    const { theme, toggleTheme } = useTheme();
  
    const themeIcon = theme === 'light' ? sun : moon;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
  
  
    return (
      // Entire container for Hero section
      <section id='hero' className={styles.container}> 
        {/*
          <div className={styles.colorModeContainer}> 
    
            <img //img tag for the profile picture
              className={styles.hero} 
              src={heroImg} 
              alt="Profile Picture" 
            />
    
            <img //img tag for the color mode button
              className={styles.colorMode}
              src={themeIcon}
              alt="Color mode icon"
              onClick={toggleTheme}
            />
          </div>
        */}
  
        <div className={styles.info}> {/* section for the credentials and resume (LHS) */}
          <h1>Imran Rizki Putranto</h1>
          <h2>Aspiring Data Scientist & Web Developer</h2>
          <p className={styles.description}>
            With a passion for generating data-driven insights as well as developing modern web apps for commericial businesses.
          </p>
          
          {/* Button for resume */}
          <a href={CV} download>
            <button className='hover'>Resume</button>
          </a>

  
          <span>
            {/* Links for external websites */}
            <a href="https://linkedin.com/in/imranrizkiputranto" target='_blank'>
              <img src={linkedinIcon} alt="Linkedin icon" />
            </a>
            <a href="https://github.com/imranrizkiputranto" target='_blank'>
              <img src={githubIcon} alt="Github icon" />
            </a>
          </span>
          
        </div>
        
      </section>
    );
  }
  
  export default Hero