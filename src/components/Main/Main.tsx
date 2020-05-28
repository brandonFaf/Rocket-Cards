import React, { useState } from 'react';
import Card from './Card';
import { Link } from 'react-router-dom';
const Main = () => {
  const cards = [
    {
      image:
        'https://image.shutterstock.com/image-photo/red-apple-isolated-on-white-260nw-1498042211.jpg',
      title: 'apple'
    },
    {
      image:
        'https://image.shutterstock.com/image-photo/closeup-fresh-organic-orange-fruit-600w-1726339291.jpg',
      title: 'orange'
    }
  ];
  const [current, setCurrent] = useState(0);
  return (
    <div>
      Main
      {current < cards.length ? (
        <div onClick={() => setCurrent(current + 1)}>
          <Card card={cards[current]} key={cards[current].title} />
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
