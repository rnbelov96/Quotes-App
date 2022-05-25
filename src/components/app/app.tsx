import React, { useEffect } from 'react';
import { AppActionCreators } from '@/redux/app';
import {
  getCurrentColor,
  getCurrentQuoteId,
  getQuotesIdList,
  getQuoteToShow,
} from '@/redux/app/selectors';
import { connect } from 'react-redux';
import { FullStateType } from '@/types/general-types';
import { Dispatch } from 'redux';
import { AppActionType } from '@/types/redux/app-reducer';
import { AppPropsType } from '@/types/components/app';
import getRandomQuoteId from '@/utils/getRandomQuoteId';
import { Quote } from '../quote';

export const PureApp: React.FunctionComponent<AppPropsType> = ({
  changeQuoteId,
  changeColor,
  currentColor,
  quoteToShow,
  quotesIdList,
  quoteId,
}) => {
  useEffect(() => {
    document.body.style.backgroundColor = currentColor;
    document.body.style.color = currentColor;
  }, [currentColor]);

  return (
    <div id="quote-box">
      <Quote quoteToShow={quoteToShow} />
      <div id="buttons">
        <button
          type="button"
          style={{ backgroundColor: currentColor }}
          onClick={() => {
            const newColor = `#${Math.floor(Math.random() * 16777215).toString(
              16,
            )}`;
            changeColor(newColor);
            changeQuoteId(getRandomQuoteId(quotesIdList, quoteId));
            // textEl.style.opacity = 0;
            // authorEl.style.opacity = 0;
            // newQuoteBtnEl.disabled = true;
            // setTimeout(() => {
            // document.body.querySelector('#text').style.opacity = 1;
            // document.body.querySelector('#author').style.opacity = 1;
            // newQuoteBtnEl.disabled = false;
            // }, 500);
          }}
          id="new-quote"
        >
          New quote
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state: FullStateType) => ({
  quoteId: getCurrentQuoteId(state),
  currentColor: getCurrentColor(state),
  quoteToShow: getQuoteToShow(state),
  quotesIdList: getQuotesIdList(state),
});

const mapDispatchToProps = (dispatch: Dispatch<AppActionType>) => ({
  changeQuoteId: (quoteId: number) => {
    dispatch(AppActionCreators.changeQuote(quoteId));
  },
  changeColor: (color: string) => {
    dispatch(AppActionCreators.changeColor(color));
  },
});

export const App = connect(mapStateToProps, mapDispatchToProps)(PureApp);
