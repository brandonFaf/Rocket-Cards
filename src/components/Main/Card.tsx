import React from 'react';
import { BlockProps } from '../Shared/Block';

type props = {
  card: BlockProps;
  goBack: () => void;
  goNext: () => void;
  showFront: boolean;
  toggle: () => void;
};

const Card = ({
  card: { img, title },
  showFront,
  goBack,
  goNext,
  toggle
}: props) => {
  return (
    <>
      <div onClick={toggle}>
        {showFront ? <img src={img} alt={title} /> : <div>{title}</div>}
      </div>
      <button onClick={goBack}>{`<-`}</button>
      <button onClick={goNext}>{`->`}</button>
    </>
  );
};

export default Card;
