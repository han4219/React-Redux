import { configureStore } from '@reduxjs/toolkit';
// import { counterReducer } from './reducers/counter.reducer';
import { counterSlice } from './slice/counter.slice';

const { actions, reducer } = counterSlice;
const { increment, decrement } = actions;
const store = configureStore({
  reducer: reducer,
});

export default store;
