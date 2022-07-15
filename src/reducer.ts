import { ActionInterface, InicialStateInterface } from '@interfaces/ReducesInterface';

export const inicialState:InicialStateInterface = {
  isDarkMode: false,
};

export function reducer(state = inicialState, action:ActionInterface) {
  switch (action.type) {
    default:
      return state;
  }
}

