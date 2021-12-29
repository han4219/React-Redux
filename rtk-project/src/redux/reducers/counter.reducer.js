import { createReducer } from '@reduxjs/toolkit';
import { decrement, increment } from '../actions/counter.action';

export const counterReducer = createReducer(0, {
  [increment.type]: (state) => state - 1,
  [decrement.type]: (state) => state + 1,
});
