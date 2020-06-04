import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Block, { BlockProps } from '../Shared/Block';
import styled from 'styled-components/macro';
import { EditCard } from './EditCard';

type props = {
  match: { params: { id: string } };
};
const Container = styled.div`
  display: flex;
`;

let cards: BlockProps[] = [
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
  },
  {
    id: 3,
    img: 'https://via.placeholder.com/150',
    title: 'add your own'
  }
];
const ReviewSet = ({
  match: {
    params: { id }
  }
}: props) => {
  const [allCards, setAllCards] = useState(cards);
  const [editingCard, setEditingCard] = useState(-1);
  const [cardCount, setCardCount] = useState(4);
  const addCard = () => {
    setAllCards([
      ...allCards,
      {
        id: cardCount,
        img: 'https://via.placeholder.com/150',
        title: 'add your own'
      }
    ]);
    setCardCount(cardCount + 1);
  };
  const edit = (c: BlockProps) => {
    setEditingCard(c.id);
  };

  const c = allCards.find(c => c.id === editingCard);
  if (c) {
    return (
      <div>
        <Container>
          <Block id={c.id} img={c.img} title={c.title} />
        </Container>
        <EditCard
          allCards={allCards}
          setAllCards={setAllCards}
          editingCard={editingCard}
          setEditingCard={setEditingCard}
        />
      </div>
    );
  }
  return (
    <div>
      <Container>
        {allCards
          .sort((a, b) => a.id - b.id)
          .map(c => (
            <div onClick={() => edit(c)} key={c.id}>
              <Block {...c} />
            </div>
          ))}

        <Link to={`/main/${id}`}>Start</Link>
        <button onClick={addCard}>+</button>
      </Container>
    </div>
  );
};

export default ReviewSet;
