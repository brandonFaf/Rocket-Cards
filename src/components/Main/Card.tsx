import React from 'react';

type props = {
  card: { image: string; title: string };
  goBack: () => void;
  goNext: () => void;
  showFront: boolean;
  toggle: () => void;
};

const Card = ({
  card: { image, title },
  showFront,
  goBack,
  goNext,
  toggle
}: props) => {
  return (
    <>
      <div onClick={toggle}>
        {showFront ? <img src={image} alt={title} /> : <div>{title}</div>}
      </div>
      <button onClick={goBack}>{`<-`}</button>
      <button onClick={goNext}>{`->`}</button>
    </>
  );
};

export default Card;
