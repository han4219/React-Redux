import React from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import ProductComponent from './ProductComponent';
import { useEffect } from 'react';
import { setProduct } from '../redux/actions/product.actions';
import * as S from './productList.style';

export default function ProductList() {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get('https://fakestoreapi.com/products')
      .catch((err) => {
        console.log(err);
      });
    dispatch(setProduct(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <S.Containter className='ui grid container'>
      <ProductComponent />
    </S.Containter>
  );
}
