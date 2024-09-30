import React from 'react';
import styles from './Background.module.css';

function Background() {
  return (
    <div className={styles.container}>
        <p>
            I'm a graduate from the <strong> University of Bristol </strong> with a <strong> Bachelor's degree </strong>in <strong> Mechanical Engineering</strong>. 
            However, my passion lies in the realms of data science and software development, where I'm eager to carve out a career.
        </p>
        <br/>
        <p>
          Throughout my academic journey, I became captivated by the power of data and technology to provide data-driven insights to solve business challenges. 
          This curiosity extended to how these insights could be transformed into user-friendly tools, sparking my interest in web development. 
          This fascination drove me to dive deep into both data science and full-stack development, where I took multiple courses and worked on various projects to build and refine my expertise.
        </p>
        <br/>
        <p>
            Now, I'm looking to transition my technical background into a role where I can continue to develop these skills and contribute to innovative projects in the tech industry.
        </p>

    </div>
  )
}

export default Background