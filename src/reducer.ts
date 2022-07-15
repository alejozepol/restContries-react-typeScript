import { CountryInterface } from '@interfaces/CountriesInterface';
import { ActionInterface, InicialStateInterface } from '@interfaces/ReducesInterface';

export const inicialState:InicialStateInterface = {
  isDarkMode: false,
  countries: [] as CountryInterface[],
  countriesData: [] as CountryInterface[],
  country: {} as CountryInterface,
};

// eslint-disable-next-line default-param-last
export function reducer(state = inicialState, action:ActionInterface) {
  switch (action.type) {
    case 'SET_MODE': {
      return {
        ...state,
        isDarkMode: action.payload,
      } as InicialStateInterface;
    }
    case 'GET_COUNTRIES': {
      return {
        ...state,
        countries: action?.payload || [],
        countriesData: action?.payload || [],
      } as InicialStateInterface;
    }
    default:
      return state;
  }
}

