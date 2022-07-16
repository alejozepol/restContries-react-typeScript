import { countryInit, RegionEnum } from '@interfaces/CountriesInterface';
import {
  getCountries,
  setCountriesInput,
  setCountriesRegion,
  setCountry,
  setCountryLocal,
  setMode,
} from './actions';

describe('====> Actions ====> ', () => {
  test('action ==> setMode', () => {
    const payload = true;
    const expected = {
      type: 'SET_MODE',
      payload,
    };
    expect(setMode(payload)).toEqual(expected);
  });
  test('action ==> getCountries', () => {
    const payload = [countryInit];
    const expected = {
      type: 'GET_COUNTRIES',
      payload,
    };
    expect(getCountries(payload)).toEqual(expected);
  });
  test('action ==> setCountriesInput', () => {
    const payload = 'hola';
    const expected = {
      type: 'SET_COUNTRIES_INPUT',
      payload,
    };
    expect(setCountriesInput(payload)).toEqual(expected);
  });
  test('action ==> setCountriesRegion', () => {
    const payload = RegionEnum.Africa;
    const expected = {
      type: 'SET_COUNTRIES_REGION',
      payload,
    };
    expect(setCountriesRegion(payload)).toEqual(expected);
  });
  test('action ==> setCountry', () => {
    const payload = countryInit;
    const expected = {
      type: 'SET_COUNTRY',
      payload,
    };
    expect(setCountry(payload)).toEqual(expected);
  });
  test('action ==> setCountryLocal', () => {
    const payload = 'COL';
    const expected = {
      type: 'SET_COUNTRY_LOCAL',
      payload,
    };
    expect(setCountryLocal(payload)).toEqual(expected);
  });
});
