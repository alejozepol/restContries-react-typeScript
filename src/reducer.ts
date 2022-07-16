import { countryInit, CountryInterface } from '@interfaces/CountriesInterface';
import { ActionInterface, InicialStateInterface } from '@interfaces/ReducesInterface';

export const inicialState: InicialStateInterface = {
  isDarkMode: false,
  countries: [] as CountryInterface[],
  countriesData: [] as CountryInterface[],
  country: countryInit,
  inputSearch: '',
  regionSelect: '',
};

// eslint-disable-next-line default-param-last
export function reducer(state = inicialState, action: ActionInterface) {
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
    case 'SET_COUNTRIES_REGION': {
      if (action.payload !== '' && state.inputSearch === '') {
        return {
          ...state,
          regionSelect: action.payload,
          countries: state.countriesData.filter(({ region }) => region === action.payload),
        } as InicialStateInterface;
      }
      if (action.payload !== '' && state.inputSearch !== '') {
        return {
          ...state,
          regionSelect: action.payload,
          countries: state.countriesData.filter((
            { name, region },
          ) => region === action.payload && (
            name.common.toLocaleLowerCase().includes(state.inputSearch.toLocaleLowerCase()) ||
          name.official.toLocaleLowerCase().includes(state.inputSearch.toLocaleLowerCase())
          )),
        } as InicialStateInterface;
      }
      if (action.payload === '' && state.inputSearch !== '') {
        return {
          ...state,
          regionSelect: action.payload,
          countries: state.countriesData.filter((
            { name },
          ) => name.common.toLocaleLowerCase().includes(state.inputSearch.toLocaleLowerCase()) ||
          name.official.toLocaleLowerCase().includes(state.inputSearch.toLocaleLowerCase())),
        } as InicialStateInterface;
      }
      return {
        ...state,
        regionSelect: action.payload,
        countries: [...state.countriesData],
      } as InicialStateInterface;
    }
    case 'SET_COUNTRIES_INPUT': {
      if (action.payload !== '' && state.regionSelect === '') {
        return {
          ...state,
          inputSearch: action.payload,
          countries: state.countriesData.filter(
            ({ name, region }) => name.common.toLocaleLowerCase().includes(action.payload.toLocaleLowerCase()) ||
            name.official.toLocaleLowerCase().includes(action.payload.toLocaleLowerCase()) ||
            region.toLocaleLowerCase().includes(action.payload.toLocaleLowerCase()),
          ),
        } as InicialStateInterface;
      }
      if (action.payload !== '' && state.regionSelect !== '') {
        return {
          ...state,
          inputSearch: action.payload,
          countries: state.countriesData.filter(
            ({ name, region }) => (
              name.common.toLocaleLowerCase().includes(action.payload.toLocaleLowerCase()) ||
            name.official.toLocaleLowerCase().includes(action.payload.toLocaleLowerCase())
            ) &&
            region === state.regionSelect,
          ),
        } as InicialStateInterface;
      }
      if (action.payload === '' && state.regionSelect !== '') {
        return {
          ...state,
          inputSearch: action.payload,
          countries: state.countriesData.filter(
            ({ region }) => region === state.regionSelect,
          ),
        } as InicialStateInterface;
      }
      return {
        ...state,
        inputSearch: action.payload,
        countries: [...state.countriesData],
      } as InicialStateInterface;
    }
    case 'SET_COUNTRY_LOCAL': {
      return {
        ...state,
        country: state.countriesData.find((country) => country.cca2 === action.payload || country.cca3 === action.payload || country.ccn3 === action.payload || country.cioc === action.payload),
      };
    }
    case 'SET_COUNTRY': {
      return {
        ...state,
        country: action.payload,
      };
    }
    default:
      return state;
  }
}

