import React from 'react';
import styles from './Contact.module.css';
import { useTheme } from '../../common/ThemeContext';

import EmailLight from '../../assets/email-light.png';
import EmailDark from '../../assets/email-dark.png';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';

function Contact() {
  const { theme, toggleTheme } = useTheme();

  const emailIcon = theme === 'light' ? EmailLight : EmailDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id='contact' className={styles.container}>
      <p className={styles.headingParagraph}>Get in touch!</p>
      <h1>Contact</h1>
      <div className={styles.contactInfoUpperContainer}>
        <div className={styles.contactInfoContainer}>
          <img src={emailIcon} alt="Email icon" className={styles.contactIcon}/>
          <p>
            <a href="mailto:imranrizkiputranto@gmail.com" target="_blank" className='email'>imranrizkiputranto@gmail.com</a>
          </p>
        </div>

        <div className={styles.contactInfoContainer}>
          <img src={linkedinIcon} alt="Linkedin icon" className={styles.contactIcon}/>
          <p>
            <a href="https://linkedin.com/in/imranrizkiputranto" target="_blank" className='email'>Linkedin</a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact;