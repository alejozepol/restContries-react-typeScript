/* eslint-disable no-unused-vars */
export interface CountryInterface {
  name: {
    common: string;
    official: string;
    nativeName: {
      cha: {
        official: string;
        common: string;
      },
      eng: {
        official: string;
        common: string;
      },
      spa: {
        official: string;
        common: string;
      }
    }
  },
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: {
    [currence: string]: {
      name: string,
      symbol: string
    }
  };
  idd: {
    root: string;
    suffixes: string[];
  };
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: {
    [lenguage:string]: string;
  },
  translations: {
    [translation: string]: {
      official: string;
      common: string;
    }
  };
  latlng: number[];
  landlocked: boolean;
  area: number;
  demonyms: {
    [demonym:string]: {
      f: string;
      m: string;
    }
  },
  flag: string;
  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };
  population: number;
  fifa: string;
  car: {
    signs: string[];
    side: string
  };
  timezones: string[];
  continents: string[];
  flags: {
    png: string;
    svg: string;
  },
  coatOfArms: {
    png: string;
    svg: string;
  },
  startOfWeek: string,
  capitalInfo: {
    latlng: number[
    ];
  };
  postalCode: {
    format: string;
    regex: string;
  }
}

export enum RegionEnum {
  Africa = 'Africa',
  America = 'Americas',
  Asia = 'Asia',
  Europe = 'Europe',
  Oceania = 'Oceania',
}
