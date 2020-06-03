import React, { useState } from 'react';
import { BlockProps } from '../Shared/Block';

interface Props {
  editingCard: number;
  setEditingCard: (c: number) => void;
  allCards: BlockProps[];
  setAllCards: (b: BlockProps[]) => void;
}
export const EditCard: React.FC<Props> = ({
  setAllCards,
  allCards,
  editingCard,
  setEditingCard
}) => {
  const [mode, setMode] = useState('options');
  const c = allCards.find(c => c.id === editingCard);
  const [name, setName] = useState(c?.title ?? '');
  const changeImage = () => {
    setMode('editImg');
  };
  const changeWord = () => {
    setMode('editWord');
  };
  const deleteWord = () => {
    setAllCards(allCards.filter(c => c.id !== editingCard));
    setEditingCard(-1);
  };
  const selectImage = (img: string) => {
    const c = allCards.find(c => c.id === editingCard);
    if (c) {
      c.img = img;
      setAllCards([...allCards.filter(c => c.id !== editingCard), c]);
      setMode('options');
    }
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const handleSubmit = () => {
    const c = allCards.find(c => c.id === editingCard);
    if (c) {
      c.title = name;
      setAllCards([...allCards.filter(c => c.id !== editingCard), c]);
    }
    setMode('options');
  };
  const close = () => {
    setEditingCard(-1);
  };
  if (mode === 'options') {
    return (
      <>
        <button onClick={changeWord}>Edit Word</button>
        <button onClick={changeImage}>Change Image</button>
        <button onClick={deleteWord}>Delete</button>
        <button onClick={close}>Close</button>
      </>
    );
  } else if (mode === 'editImg') {
    return (
      <>
        <img
          onClick={() => selectImage('https://via.placeholder.com/150')}
          alt='image1'
          src={'https://via.placeholder.com/150'}
        />
        <img
          onClick={() => selectImage('https://via.placeholder.com/151')}
          alt='image2'
          src={'https://via.placeholder.com/151'}
        />
        <img
          onClick={() => selectImage('https://via.placeholder.com/152')}
          alt='image3'
          src={'https://via.placeholder.com/152'}
        />
      </>
    );
  } else {
    return (
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type='text' name='name' value={name} />
      </form>
    );
  }
};
