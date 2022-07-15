import React from 'react';
import ButtonMode from './ButtonMode';
import './header.scss';

export interface HeaderProps {
  title: string;
  isDarkMode?: boolean;
}

const Header = ({ isDarkMode, title }: HeaderProps) => (
  <section className='container'>
    <h1 className='container__title'>{title}</h1>
    <div className='container__mode'>
      <ButtonMode isDarkMode />
    </div>
  </section>
);

export default Header;
