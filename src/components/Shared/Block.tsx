import React from 'react';
import styled from 'styled-components/macro';
const Container = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  img {
    width: 100px;
    height: 100px;
  }
  figcaption {
    background-color: gray;
    color: white;
    text-align: center;
    width: 100%;
  }
`;
export interface BlockProps {
  id: string;
  img: string;
  title: string;
}
const Block: React.FC<BlockProps> = ({ img, title }) => {
  return (
    <Container>
      <img src={img} alt={title} />
      <figcaption>{title}</figcaption>
    </Container>
  );
};

export default Block;
