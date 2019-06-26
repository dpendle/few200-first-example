import { EntityState, createEntityAdapter } from '@ngrx/entity';
import * as bookListActions from '../actions/book-collection.actions';
import { BookItem } from '../models/book-model';

export interface State extends EntityState<BookItem> {
}
export const adapter = createEntityAdapter<BookItem>();

const initialState: State = {
  ids: [1, 2],
  entities: {
    1: {
      id: 1,
      title: 'Joan of Arch',
      author: 'Jim Carry',
      type: 'Paperback',
    },
    2: {
      id: 2,
      title: 'Harry Potter',
      author: 'Bob',
      type: 'Hardcover',
    }
  }
};

export function reducer(state: State = initialState, action: bookListActions.All): State {
  switch (action.type) {
    case bookListActions.ADD_BOOK: {
      return adapter.addOne(action.payload, state);
    }
    case bookListActions.LOAN_BOOK_OUT: {
      return adapter.removeOne(action.payload.id, state);
    }
    default: {
      return state;
    }
  }
}
