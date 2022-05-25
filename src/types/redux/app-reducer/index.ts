import { QuoteType } from '@/types/general-types';

export type AppInitialStateType = {
  quotes: QuoteType[];
  currentColor: string;
  currentQuoteId: number;
};

export type AppActionConstType = {
  CHANGE_COLOR: 'CHANGE_COLOR';
  CHANGE_QUOTE: 'CHANGE_QUOTE';
};

export type ChangeColorActionType = {
  type: AppActionConstType['CHANGE_COLOR'];
  payload: string;
};

export type ChangeQuoteActionType = {
  type: AppActionConstType['CHANGE_QUOTE'];
  payload: number;
};

export type AppActionType = ChangeColorActionType | ChangeQuoteActionType;
