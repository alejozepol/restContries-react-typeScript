/* eslint-disable no-unused-vars */
export interface CountryInterface {
  name: {
    common: string;
    official: string;
    nativeName: {
      [nativeName: string]: {
        official: string;
        common: string;
      },
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
  postalCode?: {
    format: string;
    regex: string;
  },
  borders: string[]
}

export enum RegionEnum {
  Africa = 'Africa',
  America = 'Americas',
  Asia = 'Asia',
  Europe = 'Europe',
  Oceania = 'Oceania',
}

export const countryInit:CountryInterface = {
  name: {
    common: '',
    official: '',
    nativeName: {
      spa: {
        official: '',
        common: '',
      },
    },
  },
  tld: [
    '',
  ],
  cca2: '',
  ccn3: '',
  cca3: '',
  cioc: '',
  independent: false,
  status: '',
  unMember: false,
  currencies: {
    COP: {
      name: '',
      symbol: '',
    },
  },
  idd: {
    root: '+5',
    suffixes: [
      '7',
    ],
  },
  capital: [
    '',
  ],
  altSpellings: [
    '',
    '',
    '',
  ],
  region: '',
  subregion: '',
  languages: {
    spa: '',
  },
  translations: {
    spa: {
      official: '',
      common: '',
    },
  },
  latlng: [
    0,
    0,
  ],
  landlocked: false,
  borders: [
  ],
  area: 0,
  demonyms: {
    eng: {
      'f': '',
      'm': '',
    },
    fra: {
      'f': '',
      'm': '',
    },
  },
  flag: '',
  maps: {
    googleMaps: '',
    openStreetMaps: '',
  },
  population: 0,
  fifa: '',
  car: {
    signs: [
    ],
    side: '',
  },
  timezones: [
    '',
  ],
  continents: [
    '',
  ],
  flags: {
    png: '',
    svg: '',
  },
  coatOfArms: {
    png: '',
    svg: '',
  },
  startOfWeek: '',
  capitalInfo: {
    latlng: [
      0,
      0,
    ],
  },

};
