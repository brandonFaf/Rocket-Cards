import React, { useState, useEffect } from 'react';
import Card from './Card';
import { Link } from 'react-router-dom';
import useToggle from '../../hooks/useToggle';
import { getCardsForSet } from '../../data/firebaseCardsAPI';
import { BlockProps } from '../Shared/Block';
type props = {
  match: { params: { id: string } };
};
const Main = ({
  match: {
    params: { id }
  }
}: props) => {
  const [cards, setCards] = useState<BlockProps[]>([]);

  useEffect(() => {
    const fetchCards = async () => {
      const cards = await getCardsForSet(id);
      setCards(cards);
    };
    fetchCards();
  }, [id]);
  const [current, setCurrent] = useState(0);
  const [showFront, toggle] = useToggle(true);
  const goNext = () => {
    setCurrent(current + 1);
  };
  const goBack = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };
  return (
    <div>
      {current < cards.length ? (
        <div>
          <Card
            toggle={toggle}
            showFront={showFront}
            goBack={goBack}
            goNext={goNext}
            card={cards[current]}
            key={cards[current].title}
          />
        </div>
      ) : (
        <div>
          All Done
          <Link to='/'>Go back to dashboard</Link>
          <button onClick={() => setCurrent(0)}>Try again?</button>
        </div>
      )}
    </div>
  );
};

export default Main;
