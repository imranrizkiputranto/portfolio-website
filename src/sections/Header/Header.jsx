import React from 'react';
import styles from './Header.module.css';
import { useTheme } from '../../common/ThemeContext';

import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';

function Header() {

    const { theme, toggleTheme } = useTheme();
    const themeIcon = theme === 'light' ? sun : moon;

    return (
        <section id='header' className={styles.container}>
            <div className={styles.colorModeContainer}> 

                <img //img tag for the color mode button
                    className={styles.colorMode}
                    src={themeIcon}
                    alt="Color mode icon"
                    onClick={toggleTheme}
                />
            </div>
        </section>
    )
}

export default Header

