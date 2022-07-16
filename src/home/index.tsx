import React from 'react';
import {
  ActionInterface,
  InicialStateInterface,
} from '@interfaces/ReducesInterface';
import { connect } from 'react-redux';
import './home.scss';
import { CountryInterface, RegionEnum } from '@interfaces/CountriesInterface';
import { setCountriesInput, setCountriesRegion } from '@actions';
import CardCountry from './Cardcountry';
import Options from './Options';

export interface HomeInterface {
  isDarkMode: boolean;
  countries: CountryInterface[];
  setCountriesInput: (payload: string) => ActionInterface;
  setCountriesRegion: (payload: RegionEnum) => ActionInterface;
}

export const Home = ({
  isDarkMode,
  countries,
  setCountriesInput,
  setCountriesRegion,
}: HomeInterface) => (
  <section className='Home'>
    <Options isDarkMode={isDarkMode} setCountriesInput={setCountriesInput} setCountriesRegion={setCountriesRegion} />
    <div className='Home__detail'>
      {countries.map((country) => (
        <CardCountry
          country={country}
          key={country.name.common}
          isDarkMode={isDarkMode}
        />
      ))}
    </div>
  </section>
);

const mapStateToProps = ({ isDarkMode, countries }: InicialStateInterface) => ({
  isDarkMode,
  countries,
});

const mapDispathToProps = {
  setCountriesInput,
  setCountriesRegion,
};

export default connect(mapStateToProps, mapDispathToProps)(Home);
