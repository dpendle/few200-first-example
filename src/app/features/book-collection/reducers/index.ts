import * as bookListReducers from './book-collection.reducer';
import * as onLoanReducers from './on-loan.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BookItem } from '../models/book-model';

export const FEATURE = 'bookCollectionFeature';

export interface State {
  availableBooks: bookListReducers.State;
  booksOnLoan: onLoanReducers.State;
}

export const reducers = {
  availableBooks: bookListReducers.reducer,
  booksOnLoan: onLoanReducers.reducer
};

export const selectFeature = createFeatureSelector<State>(FEATURE);

export const selectListBranch = createSelector(selectFeature, f => f.availableBooks);
export const selectonLoan = createSelector(selectFeature, f => f.booksOnLoan);

export const { selectAll: selectAllBooks } = bookListReducers.adapter.getSelectors(selectListBranch);
export const { selectAll: selectAllOnLoan } = onLoanReducers.adapter.getSelectors(selectonLoan);


export const selectBooks =
  createSelector(selectAllBooks, items => items as BookItem[]);
export const selectOnLoan =
  createSelector(selectAllOnLoan, items => items as BookItem[]);
