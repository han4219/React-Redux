import { types } from '../constants/product.constants';

const initialState = {
  products: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SET_PRODUCT:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case types.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case types.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};
