import {
  AppActionConstType,
  AppActionType,
  AppInitialStateType,
  ChangeColorActionType,
  ChangeQuoteActionType,
} from '@/types/redux/app-reducer';

const initialState: AppInitialStateType = {
  quotes: [
    {
      author: 'Dalai Lama',
      quote:
        'Remember that not getting what you want is sometimes a wonderful stroke of luck.',
      id: 1,
    },
    {
      author: 'Benjamin Franklin',
      quote: 'I didn’t fail the test. I just found 100 ways to do it wrong.',
      id: 2,
    },
    {
      author: 'Vincent van Gogh',
      quote: 'I would rather die of passion than of boredom.',
      id: 3,
    },
    {
      author: 'Marie Curie',
      quote:
        'We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained.',
      id: 4,
    },
  ],
  currentColor: '#04eda3',
  currentQuoteId: 1,
};

const ActionTypes: AppActionConstType = {
  CHANGE_COLOR: 'CHANGE_COLOR',
  CHANGE_QUOTE: 'CHANGE_QUOTE',
};

const ActionCreators = {
  changeColor: (color: string): ChangeColorActionType => ({
    type: ActionTypes.CHANGE_COLOR,
    payload: color,
  }),

  changeQuote: (quoteId: number): ChangeQuoteActionType => ({
    type: ActionTypes.CHANGE_QUOTE,
    payload: quoteId,
  }),
};

const reducer = (
  state: AppInitialStateType = initialState,
  action: AppActionType,
): AppInitialStateType => {
  switch (action.type) {
    case ActionTypes.CHANGE_COLOR:
      return {
        ...state,
        currentColor: action.payload,
      };

    case ActionTypes.CHANGE_QUOTE:
      return {
        ...state,
        currentQuoteId: action.payload,
      };

    default:
      return state;
  }
};

export {
  reducer as appReducer,
  ActionCreators as AppActionCreators,
  ActionTypes as AppActionTypes,
};
