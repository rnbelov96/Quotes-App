import { FullStateType, QuoteType } from '@/types/general-types';
import { createSelector } from 'reselect';

export const getAllQuotes = (state: FullStateType) => state.app.quotes;

export const getQuotesIdList = (state: FullStateType) => state.app.quotes.map(quote => quote.id);

export const getCurrentColor = (state: FullStateType) => state.app.currentColor;

export const getCurrentQuoteId = (state: FullStateType) => state.app.currentQuoteId;

export const getQuoteToShow = createSelector(
  getAllQuotes,
  getCurrentQuoteId,
  (quotes, quoteId) => {
    const quoteToShow: QuoteType | undefined = quotes.find(item => item.id === quoteId);
    if (quoteToShow) {
      return quoteToShow;
    }
    return quotes[0];
  },
);
