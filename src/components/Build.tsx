import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
const Build: React.FC<RouteComponentProps> = ({
  history,
  location: { search }
}) => {
  const params = new URLSearchParams(search);
  const amount = params.get('amount');
  const name = params.get('name');
  useEffect(() => {
    setTimeout(() => {
      history.push('/sets/1');
    }, 3000);
  }, [history]);
  return (
    <div>
      Building {amount} cards of type {name}...
    </div>
  );
};

export default Build;
