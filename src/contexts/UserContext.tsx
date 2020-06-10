import React, { useState } from 'react';
import firebase from 'firebase/app';
type UserContextType = {
  user: firebase.User | null;
  setUser: (user: firebase.User) => void;
};
export const UserContext = React.createContext<UserContextType>({
  user: null,
  setUser: () => {}
});
type Props = {
  children: React.ReactNode;
};
const UserStore: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<firebase.User | null>(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserStore;
