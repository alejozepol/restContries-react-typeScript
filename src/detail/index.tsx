import { setCountry, setCountryLocal } from '@actions';
import { CountryInterface } from '@interfaces/CountriesInterface';
import { ActionInterface, InicialStateInterface } from '@interfaces/ReducesInterface';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import './detail.scss';

const ItemDetail = ({ title, value }: { title: string; value:string | number}) => (
  <div className='detail__item'>
    <p className='detail__item-title'>
      {`${title}:`}
    </p>
    <p className='detail__item-value'>{value}</p>
  </div>
);

export interface DetailProp {
  country: CountryInterface;
  isDarkMode: boolean;
  setCountry: (payload: CountryInterface) => ActionInterface;
  setCountryLocal: (payload: string) => ActionInterface;
  isCountriesData: boolean;
  countriesData: CountryInterface[];
}

const getCountry = async (id:string) => {
  const data: CountryInterface[] = await (await fetch(`https://restcountries.com/v3.1/alpha/${id}`)).json();
  return data || [];
};

export const Detail = ({ country, isDarkMode, setCountry, isCountriesData, setCountryLocal, countriesData }: DetailProp) => {
  const { id } = useParams();
  useEffect(() => {
    if (isCountriesData && id !== null && id !== undefined && id !== '') {
      setCountryLocal(id.toLocaleUpperCase());
    }
    if (!isCountriesData && id !== null && id !== undefined && id !== '') {
      getCountry(id.toLocaleUpperCase()).then((data) => setCountry(data[0]));
    }

  }, []);

  return (
    <section className={`detail ${isDarkMode && 'detail-dark'}`}>
      <div className='detail__action'>
        <Link to='/' className={`detail__action-btn ${isDarkMode && 'detail__action-btn-dark'}`} style={{ textDecoration: 'none' }}>
          <span className='material-symbols-outlined'>
            arrow_back
          </span>
          <p>Back</p>
        </Link>
      </div>
      <div className='detail__flag'>
        <img src={country?.flags?.png || ''} alt={country.name.official} />
      </div>
      <div className='detail__info'>
        <h2 className='detail__info-name'>{country.name.official}</h2>
        <div className='detail__info-items'>
          <ItemDetail title='Native Name' value={Object.values(country.name.nativeName)[0].official} />
          <ItemDetail title='Population' value={new Intl.NumberFormat('de-DE').format(country?.population || 0)} />
          <ItemDetail title='Region' value={country.region} />
          <ItemDetail title='Sub Region' value={country.subregion} />
          <ItemDetail title='Capital' value={(country.capital || []).toString()} />
          <ItemDetail title='Top Level Domain' value={(country?.tld || []).toString()} />
          <ItemDetail title='Currences' value={Object.keys(country?.currencies || {}).toString()} />
          <ItemDetail title='Languages' value={Object.values(country.languages || {}).toString()} />
        </div>
      </div>
      <div className='detail__border'>
        <p className='detail__border-title'>
          Border Country:
        </p>

        {
          (country.borders || []).map((item) => (

            <p key={item} className={`detail__border-item ${isDarkMode && 'detail__border-item-dark'}`}>
              {
                countriesData.find((country) => country.cca3 === item || country.cioc === item)?.name.common || item
              }

            </p>
          ))
        }
      </div>
    </section>
  );
};

const mapToStateToProps = ({ country, isDarkMode, countriesData }: InicialStateInterface) => ({
  country,
  isDarkMode,
  isCountriesData: countriesData.length > 0,
  countriesData,
});

const mapDispathToProps = {
  setCountry,
  setCountryLocal,
};

export default connect(mapToStateToProps, mapDispathToProps)(Detail);
