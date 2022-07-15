import { CountryInterface } from '@interfaces/CountriesInterface';
import { ActionInterface } from '@interfaces/ReducesInterface';

export const setMode = (payload: boolean) => ({
  type: 'SET_MODE',
  payload,
} as ActionInterface);

export const getCountries = (payload: CountryInterface[]) => ({
  type: 'GET_COUNTRIES',
  payload,
} as ActionInterface);
