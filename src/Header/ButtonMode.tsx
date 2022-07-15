import React from 'react';
import './header.scss';

export interface ButtonModeProps {
  isDarkMode: boolean;
  onAction: (isDarkMode: boolean) => void;
}

export const ButtonMode = ({ isDarkMode, onAction }: ButtonModeProps) => (
  <button className={`btn ${isDarkMode && 'btn-dark'}`} type='button' onClick={() => onAction(!isDarkMode)}>
    <span className='material-symbols-outlined' style={{ marginRight: 10 }}>
      {isDarkMode ? 'dark_mode' : 'brightness_5'}
    </span>
    <p>{`${isDarkMode ? 'Dark' : 'Light'} Mode`}</p>
  </button>
);

export default ButtonMode;
