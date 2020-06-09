import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import Block from './Shared/Block';
import { getSetsForUser } from '../data/firebaseSetsAPI';
const Container = styled.div`
  display: flex;
`;
export interface CardSet {
  id: string;
  img: string;
  name: string;
}
const Dashboard: React.FC<{ user: firebase.User | null }> = ({ user }) => {
  const [sets, setSets] = useState<CardSet[]>([]);
  useEffect(() => {
    const fetchCards = async () => {
      const fetchedSets = await getSetsForUser('1234');
      setSets(fetchedSets);
    };
    fetchCards();
  }, []);
  return (
    <Container>
      {sets.map(s => (
        <Link to={`/sets/${s.id}`} key={s.name}>
          <Block id={s.id} title={s.name} img={s.img} />
        </Link>
      ))}
      <div>Welcome {JSON.stringify(user, null, 2)}</div>

      <Link to='/sets/create'>Create a set</Link>
    </Container>
  );
};

export default Dashboard;
