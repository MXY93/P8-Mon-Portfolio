import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import frFlag from '../assets/frFlag.webp';
import angFlag from '../assets/angFlag.webp';
import frBackground from '../assets/fondFr.webp';
import angBackground from '../assets/fondAng.webp';
import styles from '../styles/Switch.module.scss';

export default function LanguageToggleButton() {
  const { i18n } = useTranslation();
  const [isEnglish, setIsEnglish] = useState(i18n.language === 'en'); // Détermine la langue initiale

  const [isDarkMode, setIsDarkMode] = useState(document.body.classList.contains('darkmode'));
  const [translateX, setTranslateX] = useState('2em');
  const [backgroundPosition, setBackgroundPosition] = useState('center center');

  useEffect(() => {
    const adjustBackgroundPosition = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 450) {
        setBackgroundPosition(`${50 + (450 - screenWidth) * 0.1}% center`);
      } else {
        setBackgroundPosition('center center');
      }
    };

    window.addEventListener('resize', adjustBackgroundPosition);
    adjustBackgroundPosition(); // Initial call

    return () => {
      window.removeEventListener('resize', adjustBackgroundPosition);
    };
  }, []);

  useEffect(() => {
    if (isEnglish) {
      document.body.classList.add('isEnglish');
      document.body.classList.remove('isFrench');
    } else {
      document.body.classList.add('isFrench');
      document.body.classList.remove('isEnglish');
    }
  }, [isEnglish]);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.body.classList.contains('darkmode'));
    });

    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

    const calculateTranslateX = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 450) {
        const minScreenWidth = 320;
        const maxTranslateX = 2;
        const minTranslateX = 0.6;
        const scaleFactor = (screenWidth - minScreenWidth) / (450 - minScreenWidth);
        const scaledTranslateX = scaleFactor * (maxTranslateX - minTranslateX) + minTranslateX;
        setTranslateX(`${scaledTranslateX}em`);
      } else {
        setTranslateX('2em');
      }
    };

    window.addEventListener('resize', calculateTranslateX);
    calculateTranslateX(); // Initial call

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', calculateTranslateX);
    };
  }, []);

  const toggleLanguage = () => {
    const newLanguage = isEnglish ? 'fr' : 'en';
    i18n.changeLanguage(newLanguage);
    setIsEnglish(!isEnglish);
  };

  return (
    <div className={styles.switchBtn} onClick={toggleLanguage}>
      <div className={styles.switchBtn__background} style={{ backgroundImage: `url(${isEnglish ? angBackground : frBackground})`, backgroundPosition }}></div>
      <div 
        className={styles.switchBtn__indicator} 
        style={{ 
          transform: isEnglish ? `translateX(${translateX})` : 'none',
          backgroundColor: isDarkMode ? '#6E6E6E' : '#fff' 
        }}
      >
        <div className={styles.switchBtn__icon_container}>
          <img src={isEnglish ? angFlag : frFlag} loading="lazy" alt={isEnglish ? 'English Flag' : 'French Flag'} className={styles.switchBtn_icon} />
        </div>
      </div>
    </div>
  );
}





