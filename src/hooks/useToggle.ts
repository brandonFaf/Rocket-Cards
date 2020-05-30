import { useState } from 'react';

const useToggle = (
  initialState: boolean
): [boolean, () => void, React.Dispatch<boolean>] => {
  const [state, setState] = useState(initialState);
  const toggle = () => {
    setState(!state);
  };
  return [state, toggle, setState];
};

export default useToggle;
