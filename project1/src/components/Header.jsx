import React from 'react';
import * as S from './header.style';

export default function Header() {
  return (
    <S.Header className='ui fixed menu'>
      <div className='ui container center'>
        <h1>FakeShop</h1>
      </div>
    </S.Header>
  );
}
