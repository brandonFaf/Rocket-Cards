import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import Block, { BlockProps } from './Shared/Block';
const Container = styled.div`
  display: flex;
`;
const sets: BlockProps[] = [
  {
    id: 1,
    img:
      'https://image.shutterstock.com/image-photo/red-apple-isolated-on-white-260nw-1498042211.jpg',
    title: 'fruit'
  },
  {
    id: 2,
    img:
      'https://specials-images.forbesimg.com/imageserve/5d35eacaf1176b0008974b54/960x0.jpg?cropX1=790&cropX2=5350&cropY1=784&cropY2=3349',
    title: 'cars'
  }
];
const Dashboard: React.FC<{ user: firebase.User | null }> = ({ user }) => (
  <Container>
    {sets.map(s => (
      <Link to={`/main/${s.id}`} key={s.title}>
        <Block {...s} />
      </Link>
    ))}
    <div>Welcome {JSON.stringify(user, null, 2)}</div>

    <Link to='/sets/create'>Create a set</Link>
  </Container>
);

export default Dashboard;
