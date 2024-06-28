import { useContext, useEffect, useState } from "react";
import { DarkModeContext } from "../DarkModeProvider";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

export default function ToggleButton() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const [translateX, setTranslateX] = useState('2em');

  useEffect(() => {
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

    calculateTranslateX();
    window.addEventListener('resize', calculateTranslateX);

    return () => window.removeEventListener('resize', calculateTranslateX);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('darkmode');
      document.body.classList.remove('lightmode');
      //console.log('darkmode applied');
    } else {
      document.body.classList.add('lightmode');
      document.body.classList.remove('darkmode');
      //console.log('lightmode applied');
    }
  }, [darkMode]);

  return (
    <div className="switchBtn" onClick={toggleDarkMode}>
      <div className="switchBtn__background"></div>
      <div className="switchBtn__indicator" style={{ transform: darkMode ? `translateX(${translateX})` : 'none' }}>
        <div className="switchBtn__icon_container">
          <FontAwesomeIcon icon={darkMode ? faMoon : faSun} className="switchBtn_icon" />
        </div>
      </div>
    </div>
  );
}
