import React from 'react';
import { Link } from 'react-router-dom';
import Block, { BlockProps } from '../Shared/Block';
import styled from 'styled-components/macro';

type props = {
  match: { params: { id: string } };
};
const Container = styled.div`
  display: flex;
`;
const cards: BlockProps[] = [
  {
    id: 1,
    img:
      'https://image.shutterstock.com/image-photo/red-apple-isolated-on-white-260nw-1498042211.jpg',
    title: 'apple'
  },
  {
    id: 2,
    img:
      'https://image.shutterstock.com/image-photo/closeup-fresh-organic-orange-fruit-600w-1726339291.jpg',
    title: 'orange'
  }
];
const ReviewSet = ({
  match: {
    params: { id }
  }
}: props) => {
  return (
    <div>
      <Container>
        {cards.map(c => (
          <Block {...c} />
        ))}

        <Link to={`/main/${id}`}>Start</Link>
      </Container>
    </div>
  );
};

export default ReviewSet;
