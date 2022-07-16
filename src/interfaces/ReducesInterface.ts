import { CountryInterface, RegionEnum } from './CountriesInterface';

export interface ActionInterface {
  type:
    'SET_MODE' |
    'GET_COUNTRIES' |
    'SET_COUNTRIES_INPUT' |
    'SET_COUNTRIES_REGION' |
    'SET_COUNTRY_LOCAL' |
    'SET_COUNTRY';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload: any;
}

export interface InicialStateInterface {
  isDarkMode: boolean;
  countries: CountryInterface[];
  countriesData: CountryInterface[];
  country: CountryInterface;
  regionSelect: RegionEnum | string;
  inputSearch: string;
}
