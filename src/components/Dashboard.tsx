import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import Block from './Shared/Block';
import { getSetsForUser } from '../data/firebaseSetsAPI';
import useUser from '../hooks/useUser';
const Container = styled.div`
  display: flex;
`;
export interface CardSet {
  id: string;
  img: string;
  name: string;
}
const Dashboard = () => {
  const { user } = useUser();
  const [sets, setSets] = useState<CardSet[]>([]);
  useEffect(() => {
    const fetchCards = async () => {
      if (user) {
        const fetchedSets = await getSetsForUser(user.uid);
        setSets(fetchedSets);
      }
    };
    fetchCards();
  }, [user]);
  return (
    <Container>
      {sets.map(s => (
        <Link to={`/sets/${s.id}`} key={s.name}>
          <Block id={s.id} title={s.name} img={s.img} />
        </Link>
      ))}

      <Link to='/sets/create'>Create a set</Link>
    </Container>
  );
};

export default Dashboard;
