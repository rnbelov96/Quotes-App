import { QuoteType } from '../general-types';

export type AppPropsType = {
  quoteToShow: QuoteType;
  quoteId: number;
  changeQuoteId: (id: number) => void;
  changeColor: (color: string) => void;
  currentColor: string;
  quotesIdList: number[];
};
