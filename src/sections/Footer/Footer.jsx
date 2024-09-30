import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <section id='footer' className={styles.container}>
        <p>
            Coded in <a href='https://code.visualstudio.com' target='_blank'><strong>Visual Studio Code</strong></a>. 
            Built with <a href="https://react.dev"><strong>React.js</strong></a> and deployed with <a href='' target='_blank'><strong>Netlify</strong></a>. 
            All text set in the <a href="https://fonts.google.com/specimen/Rubik"><strong>Rubik</strong></a> or <a href="https://fonts.google.com/specimen/Roboto?query=roboto"><strong>Roboto</strong></a> typeface.
        </p>
    </section>
  )
}

export default Footer