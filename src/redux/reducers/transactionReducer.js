import {
  TRANSACTIONS_LOADING,
  SET_TRANSACTIONS,
  TRANSACTION_ERROR,
  CLEAR_TRANSACTION_ERRORS
} from '../actions/types';

const initialState = {
  loading: false,
  transactions: [],
  error: {}
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case TRANSACTIONS_LOADING:
      return {
        ...state,
        loading: payload
      };
    case SET_TRANSACTIONS:
      return {
        ...state,
        loading: false,
        transactions: payload
      };
    case TRANSACTION_ERROR:
      return {
        ...state,
        error: payload
      };
    case CLEAR_TRANSACTION_ERRORS:
      return {
        ...state,
        error: {}
      };
    default:
      return state;
  }
};
