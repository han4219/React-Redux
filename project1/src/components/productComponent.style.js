import styled from 'styled-components';

export const CardWrapper = styled.div`
  cursor: pointer;
  width: 23%;
  border: 0px solid #ccc;
  box-shadow: 0px 0px 8px #ccc;
  margin: 5px;
  border-radius: 5px;
  &:hover {
    box-shadow: 0px 0px 15px #ccc;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

export const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #000;
`;

export const Price = styled.div`
  font-size: 15px;
  color: red;
  font-weight: bold;
`;
