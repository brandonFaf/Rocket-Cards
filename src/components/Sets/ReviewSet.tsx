import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Block, { BlockProps } from '../Shared/Block';
import styled from 'styled-components/macro';
import { EditCard } from './EditCard';
import { getCardsForSet } from '../../data/firebaseCardsAPI';

type props = {
  match: { params: { id: string } };
};
const Container = styled.div`
  display: flex;
`;

const ReviewSet = ({
  match: {
    params: { id }
  }
}: props) => {
  const [allCards, setAllCards] = useState<BlockProps[]>([]);
  useEffect(() => {
    const fetchCards = async () => {
      const cards = await getCardsForSet(id);
      setAllCards(cards);
    };
    fetchCards();
  }, [id]);
  const [editingCard, setEditingCard] = useState('-1');
  const [cardCount, setCardCount] = useState(4);
  const addCard = () => {
    setAllCards([
      ...allCards,
      {
        id: 'new',
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
          .sort((a, b) => (a.id < b.id ? 1 : -1))
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
