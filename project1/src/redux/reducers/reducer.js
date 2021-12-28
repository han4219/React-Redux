import { combineReducers } from 'redux';
import { productReducer, selectedProductReducer } from './product.reducer';

const rootReducer = combineReducers({
  allProduct: productReducer,
  product: selectedProductReducer,
});

export default rootReducer;
