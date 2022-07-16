import { CountryInterface, RegionEnum } from '@interfaces/CountriesInterface';
import { ActionInterface } from '@interfaces/ReducesInterface';

export const setMode = (payload: boolean) => ({
  type: 'SET_MODE',
  payload,
} as ActionInterface);

export const getCountries = (payload: CountryInterface[]) => ({
  type: 'GET_COUNTRIES',
  payload,
} as ActionInterface);

export const setCountriesInput = (payload: string) => ({
  type: 'SET_COUNTRIES_INPUT',
  payload,
} as ActionInterface);

export const setCountriesRegion = (payload: RegionEnum) => ({
  type: 'SET_COUNTRIES_REGION',
  payload,
} as ActionInterface);

export const setCountry = (payload: CountryInterface) => ({
  type: 'SET_COUNTRY',
  payload,
} as ActionInterface);

export const setCountryLocal = (payload: string) => ({
  type: 'SET_COUNTRY_LOCAL',
  payload,
} as ActionInterface);
