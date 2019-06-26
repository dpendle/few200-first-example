import { Action } from '@ngrx/store';
import { BookItem } from '../models/book-model';

let currentId = 4;

export const ADD_BOOK = '[book-collection] add book to list';
export class AddedBookToList implements Action {
  readonly type = ADD_BOOK;
  payload: BookItem;
  constructor(titleIn: string, authorIn: string, typeIn: string) {
    this.payload = {
      id: currentId++,
      title: titleIn,
      author: authorIn,
      type: typeIn
    };
  }
}

export const LOAN_BOOK_OUT = '[book-collection] add book to onLoan list';
export class LoanedBookOut implements Action {
  readonly type = LOAN_BOOK_OUT;
  payload: BookItem;
  constructor(book: BookItem) {
    this.payload = {
      id: book.id,
      title: book.title,
      author: book.author,
      type: book.type
    };
  }
}

export type All = AddedBookToList | LoanedBookOut;
