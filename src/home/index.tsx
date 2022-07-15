import React, { useState } from 'react';
import { InicialStateInterface } from '@interfaces/ReducesInterface';
import { connect } from 'react-redux';
import './home.scss';
import { CountryInterface } from '@interfaces/CountriesInterface';
import CardCountry from './Cardcountry';

export interface HomeInterface {
  isDarkMode: boolean;
  countries: CountryInterface[];
}

export const Home = ({ isDarkMode, countries }:HomeInterface) => (
  <section className='Home'>
    <div className='Home__option'>
      <input placeholder='Search for country...' />
      <select>
        <option>1</option>
        <option>2</option>
      </select>
    </div>
    <div className='Home__detail'>
      {countries.map((country) => (
        <CardCountry country={country} key={country.name.common} isDarkMode={isDarkMode} />
      ))}
    </div>

  </section>
);

const mapStateToProps = ({ isDarkMode, countries }: InicialStateInterface) => ({
  isDarkMode,
  countries,
});

const mapDispathToProps = {
};

export default connect(mapStateToProps, mapDispathToProps)(Home);
