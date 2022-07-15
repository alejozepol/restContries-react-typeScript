import { CountryInterface } from '@interfaces/CountriesInterface';
import { useEffect } from 'react';

const useCountries = (action: (countries:CountryInterface[])=> void) => {
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all').then(async (data) => {
      if (data.status === 200) {
        action(await data.json());
      }
    });
  }, []);
};

export default useCountries;
