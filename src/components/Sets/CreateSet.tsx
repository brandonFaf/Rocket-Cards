import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CreateSet = () => {
  const [name, setName] = useState('');
  const [amount, setamount] = useState('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setamount(event.target.value);
  };
  return (
    <div>
      Create a Flashcard Set
      <form>
        <label htmlFor='name'>Type any category</label>
        <input onChange={handleChange} type='text' name='name' />
        <label>
          <input
            type='radio'
            name='amount'
            value='10'
            checked={amount === '10'}
            onChange={handleOptionChange}
          />
          10
        </label>
        <label>
          <input
            type='radio'
            name='amount'
            value='20'
            checked={amount === '20'}
            onChange={handleOptionChange}
          />
          20
        </label>
        <label>
          <input
            type='radio'
            name='amount'
            value='30'
            checked={amount === '30'}
            onChange={handleOptionChange}
          />
          30
        </label>
      </form>
      <Link to={`/sets/build?name=${name}&amount=${amount}`}>
        <button>Create Set</button>
      </Link>
    </div>
  );
};

export default CreateSet;
