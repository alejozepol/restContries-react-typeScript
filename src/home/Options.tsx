import { RegionEnum } from '@interfaces/CountriesInterface';
import { ActionInterface } from '@interfaces/ReducesInterface';
import React, { ChangeEventHandler } from 'react';

export interface OptionsProps {
  isDarkMode: boolean;
  setCountriesInput: (payload: string) => ActionInterface;
  setCountriesRegion: (payload: RegionEnum) => ActionInterface;
}

export const Options = ({
  isDarkMode,
  setCountriesInput,
  setCountriesRegion,
}: OptionsProps) => {
  const handleInput = (input : {target:{value: string}}) => {
    setCountriesInput(input.target.value);
  };
  const handleSelect = (input : {target:{value: RegionEnum}}) => {
    setCountriesRegion(input.target.value);
  };
  return (
    <div className='Home__option'>
      <div
        className={`Home__option-input ${
          isDarkMode && 'Home__option-input-dark'
        }`}
      >
        <span className='material-symbols-outlined'>search</span>
        <input placeholder='Search for country...' onChange={handleInput} />
      </div>
      <select
        className={`Home__option-select ${
          isDarkMode && 'Home__option-select-dark'
        }`}
        onChange={handleSelect as ChangeEventHandler<HTMLSelectElement>}
      >
        <option value=''>Select</option>
        {Object.entries(RegionEnum).map((item) => (
          <option key={item[0]} value={item[1]}>
            {item[0]}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Options;
