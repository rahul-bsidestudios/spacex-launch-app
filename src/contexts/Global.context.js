import React from 'react';

const INITIAL_STATE = {
  launches: [],
  filterLaunches: (filters) => {},
  setLaunches: (launches) => {}
};

const GlobalContext = React.createContext(INITIAL_STATE);

export default GlobalContext;