import * as fromCounter from './counter.reducer';
import { createSelector } from '@ngrx/store';

export interface State {
  counter: fromCounter.State;
}

export const reducers = {
  counter: fromCounter.reducer
};

// selector functions
export const selectCurrentCount = (state: State) => state.counter.current;
// export const selectAtTheStart = (state: State) => state.counter.current === 0;
export const selectCountingBy = (state: State) => state.counter.by;
export const selectCantDecrement = createSelector(selectCurrentCount, selectCountingBy, (current, by) => current - by < 0);
export const selectAtTheStart = createSelector(selectCurrentCount, (current) => current === 0);

