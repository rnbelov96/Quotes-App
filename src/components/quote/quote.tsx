import { QuotePropsType } from '@/types/components/quote';
import React from 'react';

export const Quote: React.FunctionComponent<QuotePropsType> = ({ quoteToShow }) => (
  <>
    <div id="text">{quoteToShow.quote}</div>
    <div id="author">{quoteToShow.author}</div>
  </>
);

export default Quote;
