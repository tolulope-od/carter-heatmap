import axios from 'axios';

import {
  TRANSACTIONS_LOADING,
  SET_TRANSACTIONS,
  TRANSACTION_ERROR,
  CLEAR_TRANSACTION_ERRORS
} from './types';

export const loadingTransaction = payload => ({
  type: TRANSACTIONS_LOADING,
  payload
});

export const clearTransactionErrors = () => ({
  type: CLEAR_TRANSACTION_ERRORS
});

export const transactionError = error => ({
  type: TRANSACTION_ERROR,
  payload: error
});

export const setTransactions = transactions => ({
  type: SET_TRANSACTIONS,
  payload: transactions
});

export const fetchTransactions = () => async dispatch => {
  dispatch(clearTransactionErrors());
  dispatch(loadingTransaction(true));
  try {
    const fetchedTransactions = await axios.get('/api/v1/transactions');
    dispatch(setTransactions(fetchedTransactions.data.data));
  } catch (e) {
    dispatch(loadingTransaction(false));
    dispatch(transactionError(e.response));
  }
};
