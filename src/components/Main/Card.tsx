import React from 'react';

type props = {
  card: { image: string; title: string };
};

const Card = ({ card: { image, title } }: props) => {
  return (
    <>
      <div>Image will be: {image}</div>
      <div>text will be: {title}</div>
    </>
  );
};

export default Card;
