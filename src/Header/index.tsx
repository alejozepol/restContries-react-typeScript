import { InicialStateInterface } from '@interfaces/ReducesInterface';
import { connect } from 'react-redux';
import React from 'react';
import { setMode } from '@actions';
import ButtonMode from './ButtonMode';
import './header.scss';

export interface HeaderProps {
  title: string;
  isDarkMode: boolean;
  setMode: (isDarkMode: boolean) => void;
}

const Header = ({ isDarkMode, title, setMode }: HeaderProps) => (
  <section className={`containerHeader ${isDarkMode && 'containerHeader-dark'}`}>
    <h1 className='containerHeader__title'>{title}</h1>
    <div className='containerHeader__mode'>
      <ButtonMode isDarkMode={isDarkMode} onAction={(isDarkMode) => setMode(isDarkMode)} />
    </div>
  </section>
);

const mapStateToProps = ({ isDarkMode }: InicialStateInterface) => ({
  isDarkMode,
});

const mapDispathToProps = {
  setMode,
};

export default connect(mapStateToProps, mapDispathToProps)(Header);
