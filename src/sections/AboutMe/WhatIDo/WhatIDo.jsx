import React from 'react';
import styles from './WhatIDo.module.css';

import { useTheme } from '../../../common/ThemeContext';

import histogramDark from '../../../assets/histogram-dark.png';
import histogramLight from '../../../assets/histogram-light.png';
import keyboardDark from '../../../assets/keyboard-dark.png';
import keyboardLight from '../../../assets/keyboard-light.png';

function WhatIDo() {
    const { theme, toggleTheme } = useTheme();
    const histogramIcon = theme === 'light' ? histogramLight : histogramDark;
    const keyboardIcon = theme === 'light' ? keyboardLight : keyboardDark;

  return (
    <div id='whatIDo' className={styles.container}>
        <h3>What I Do</h3>

        <div className={styles.whatIDoContainer}>
            <div className={styles.whatIDo}>
                <img src={histogramIcon} alt="Data Analytics Icon" />
                <p>Data Science</p>
            </div>

            <div className={styles.whatIDo}>
                <img src={keyboardIcon} alt="Frontend Development Icon" />
                <p>Web Development</p>
            </div>
        </div>
    </div>
  )
}

export default WhatIDo