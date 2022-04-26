import { AppInitialStateType } from './redux/app-reducer';

export type QuoteType = {
  author: string;
  quote: string;
  id: number;
};

export type FullStateType = {
  app: AppInitialStateType;
};
