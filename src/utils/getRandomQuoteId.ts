import getRandomInt from './getRandomInt';

export default (quotesIdList: number[], currentQuoteId: number) => {
  const filteredQuotesIdList = quotesIdList.filter(
    quoteId => quoteId !== currentQuoteId,
  );
  return filteredQuotesIdList[getRandomInt(0, filteredQuotesIdList.length - 1)];
};
