import React from 'react';
import { CountryInterface } from '@interfaces/CountriesInterface';
import './home.scss';
import { Link } from 'react-router-dom';

const ItemDetail = ({ title, value }: { title: string; value:string | number}) => (
  <div className='CardCountry__detail__item'>
    <p>
      {`${title}:`}
    </p>
    <p>{value}</p>
  </div>
);

export interface CardcountryProps {
  country: CountryInterface
  isDarkMode: boolean;
}

const CardCountry = ({ country, isDarkMode }: CardcountryProps) => (
  <Link to={`/${country.cca3}`} style={{ textDecoration: 'none' }}>
    <section className={`CardCountry ${isDarkMode && 'CardCountry-dark'}`}>
      <div className='CardCountry__img'>
        <img src={country.flags.png} alt={country.name.official} />
      </div>
      <h3 className='CardCountry__name'>{country.name.official}</h3>
      <div className='CardCountry__detail'>
        <ItemDetail title='Population' value={country.population} />
        <ItemDetail title='Region' value={country.region} />
        <ItemDetail title='Capital' value={(country.capital || [])[0]} />
      </div>
    </section>
  </Link>
);

export default CardCountry;
