import { FullStateType } from '@/types/general-types';
import { createSelector } from 'reselect';

export const getAllQuotes = (state: FullStateType) => state.app.quotes;

export const getCurrentColor = (state: FullStateType) => state.app.currentColor;

export const getCurrentQuoteId = (state: FullStateType) => state.app.currentQuoteId;

export const getQuoteToShow = createSelector(
  getAllQuotes,
  getCurrentQuoteId,
  (quotes, quoteId) => quotes.find(item => item.id === quoteId),
);
