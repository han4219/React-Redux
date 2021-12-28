import React from 'react';
import { useSelector } from 'react-redux';
import * as S from './productComponent.style';
import { Link } from 'react-router-dom';

export default function ProductComponent() {
  const products = useSelector((state) => state.allProduct.products);
  const renderList = products.map((product) => {
    const { id, title, price, description, category, image } = product;
    return (
      <S.CardWrapper key={id}>
        <Link to={`/product/${id}`}>
          <div>
            <div>
              <S.Image src={image} alt={title} />
            </div>
            <S.Title>{title}</S.Title>
            <S.Price>$ {price}</S.Price>
            <div>{category}</div>
          </div>
        </Link>
      </S.CardWrapper>
    );
  });
  return <>{renderList}</>;
}
