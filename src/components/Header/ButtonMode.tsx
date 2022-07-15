import React from 'react';
import './header.scss';

export interface ButtonProps {
  isDarkMode?: boolean;
}

export const ButtonMode = ({ isDarkMode }: ButtonProps) => (
  <div className='btn'>
    <span className='material-symbols-outlined'>
      {isDarkMode ? 'dark_mode' : 'brightness_5'}
    </span>
    <p>{`${isDarkMode ? 'Dark' : 'Light'} Mode`}</p>
  </div>
);

export default ButtonMode;
