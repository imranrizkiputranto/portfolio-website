import React from 'react';
import styles from './Background.module.css';

function Background() {
  return (
    <div className={styles.container}>
        <p>
            I'm a <strong>University of Bristol</strong> graduate with a Bachelor's degree in <strong>Mechanical Engineering</strong>, now channeling my passion into a career in generative AI, data science, and software development.
        </p>
        <br/>
        <p>
          My academic journey sparked a deep curiosity about data's transformative potential and how it can drive solutions to complex challenges. This curiosity led me into data science, machine learning, and full-stack development, where I gained hands-on experience through courses and projects, honing my technical and problem-solving skills.
        </p>
        <br/>
        <p>
          Currently, I work as an AI Researcher at Indonesia Indicator, where I focus on developing advanced AI solutions, leveraging large language models and data analytics to drive impactful, data-driven insights. My recent work involves utilising AI for decision support and optimizing organizational processes, contributing to both high-impact public initiatives and internal innovation.
        </p>
        <br/>
        <p>
          Looking ahead, I'm excited to expand my expertise in building AI-driven software solutions that combine generative AI and data science. I'm eager to contribute to projects that push technological boundaries and make meaningful impacts in the tech industry.
        </p>

    </div>
  )
}

export default Background