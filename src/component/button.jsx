// Button.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDarkmode } from './context';  // Make sure this path is correct
import './darkbutton.css'
const Button = () => {
  const { handleClick, containerClassName,btnn, icon,topp } = useDarkmode();

  return (
  <div className={topp}>
    <div className={btnn}>
    <div className={containerClassName} onClick={handleClick}>
      <FontAwesomeIcon icon={icon} className="sun-icon" />
    </div></div></div>
  );
};

export default Button;