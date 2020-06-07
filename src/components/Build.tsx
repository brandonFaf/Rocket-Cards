import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import axios from 'axios';
const Build: React.FC<RouteComponentProps> = ({
  history,
  location: { search }
}) => {
  const params = new URLSearchParams(search);
  const amount = params.get('amount');
  const name = params.get('name');
  useEffect(() => {
    axios
      .get(
        `https://us-central1-rocket-cards-dev.cloudfunctions.net/createSet?userId=1234&name=${name}&ammount=${amount}`
      )
      .then(({ data }) => {
        history.push(`/sets/${data.setId}`);
      })
      .catch(data => {
        //need to go back and try again
        //maybe change this so that it doesn't navigate nad just has a loading/creating on the create page
        console.log('error:', data);
      });
  }, [amount, history, name]);
  return (
    <div>
      Building {amount} cards of type {name}...
    </div>
  );
};

export default Build;
