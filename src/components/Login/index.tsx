import React from 'react';
import styled from 'styled-components/macro';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import 'firebase/auth';
import firebase from 'firebase/app';
// import { updateUser } from '../data/firebaseUserAPI';

const Container = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
`;
const Login = () => {
  const uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      // Avoid redirects after sign-in.
      // tslint:disable-next-line:no-any
      signInSuccessWithAuthResult: (authResult: { user: any }) => {
        let user = authResult.user;
        user.name = 'name';
        // let isNewUser = authResult.additionalUserInfo.isNewUser;
        // if (isNewUser) {
        //   const { displayName, photoURL, uid, email } = user;
        //   updateUser(uid, { displayName, photoURL, email });
        // }
        return false;
      }
    }
  };
  return (
    <Container>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </Container>
  );
};

export default Login;
