import { CountryInterface } from './CountryInterface';

export interface ActionInterface {
  type: 'SET_MODE'| 'GET_COUNTRIES' ;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload: any;
}

export interface InicialStateInterface {
  isDarkMode: boolean;
  countries: CountryInterface[];
  countriesData: CountryInterface[];
  country: CountryInterface;
}
