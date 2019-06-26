import { EntityState, createEntityAdapter } from '@ngrx/entity';
import * as bookListActions from '../actions/book-collection.actions';
import { BookItem } from '../models/book-model';

export interface State extends EntityState<BookItem> {
}
export const adapter = createEntityAdapter<BookItem>();

const initialState: State = {
  ids: [3],
  entities: {
    3: {
      id: 3,
      title: 'The One Who Knocks',
      author: 'Bob Brandy',
      type: 'Paperback',
    }
  }
};

export function reducer(state: State = initialState, action: bookListActions.All): State {
  switch (action.type) {
    case bookListActions.LOAN_BOOK_OUT: {
      return adapter.addOne(action.payload, state);
    }
    default: {
      return state;
    }
  }
}
