import { types } from '../constants/product.constants';

export const setProduct = (products) => {
  return {
    type: types.SET_PRODUCT,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: types.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProduct = () => {
  return {
    type: types.REMOVE_SELECTED_PRODUCT,
  };
};
