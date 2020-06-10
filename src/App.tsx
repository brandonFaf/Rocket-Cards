import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import CreateSet from './components/Sets/CreateSet';
import ReviewSet from './components/Sets/ReviewSet';
import BuildSet from './components/Build';
import Login from './components/Login';
import Main from './components/Main/Main';
import GlobalStyle from './styles';
import firebase from 'firebase/app';
import './data/firebaseConfig';
import useUser from './hooks/useUser';

function App() {
  const [loading, setLoading] = useState(true);
  const { user, setUser } = useUser();
  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged(async u => {
        if (!u) {
          setLoading(false);
          return;
        }
        setUser(u);
        setLoading(false);
      });
    return () => {
      unregisterAuthObserver();
    };
  }, [setUser]);
  if (loading) {
    return (
      <>
        <GlobalStyle />
        <div>loading...</div>
      </>
    );
  }
  if (!user) {
    return (
      <>
        <GlobalStyle />
        <Login />
      </>
    );
  }
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Dashboard} />
        <Route path='/sets/create' component={CreateSet} />
        <Route path='/sets/build' component={BuildSet} />
        <Route path='/sets/:id' component={ReviewSet} />
        <Route path='/main/:id' component={Main} />
      </Switch>
    </Router>
  );
}

export default App;
