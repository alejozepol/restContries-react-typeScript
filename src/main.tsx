import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import { InicialStateInterface } from '@interfaces/ReducesInterface';
import { getCountries } from '@actions';
import { CountryInterface } from '@interfaces/CountriesInterface';
import Header from './Header';
import Detail from './detail';
import Home from './home';
import useCountries from './hooks/useContries';

export interface MainProps {
  isDarkMode: boolean;
  getCountries: (payload: CountryInterface[]) => void;
}

const Main = ({ isDarkMode, getCountries }: MainProps) => {
  useCountries(getCountries);
  return (
    <section
      className={`container ${
        isDarkMode ? 'container-dark' : 'container-light'
      }`}
    >
      <div className='container__header'>
        <Header title='Where in the world?' />
      </div>
      <div className='container__detail'>
        <BrowserRouter basename='/'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/:id' element={<Detail />} />
          </Routes>
        </BrowserRouter>
      </div>
    </section>
  );
};

const mapStateToProps = ({ isDarkMode }: InicialStateInterface) => ({
  isDarkMode,
});

const mapDispathToProps = {
  getCountries,
};

export default connect(mapStateToProps, mapDispathToProps)(Main);
