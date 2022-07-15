export interface ActionInterface {
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload: any;
}

export interface InicialStateInterface {
  isDarkMode: boolean;
}
