import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyBUJ5dkRinujgegHgQKnMMtiP3oh70PPAg',
  authDomain: 'rocket-cards-dev.firebaseapp.com',
  databaseURL: 'https://rocket-cards-dev.firebaseio.com',
  projectId: 'rocket-cards-dev',
  storageBucket: 'rocket-cards-dev.appspot.com',
  messagingSenderId: '152857225695',
  appId: '1:152857225695:web:c95e09ec5ad33f931c3c6a'
};

// Initialize Firebase instance
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
