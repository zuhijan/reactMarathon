import React, { FC } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import Pokedex from './pages/Pokedex';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" render={() => <HomePage />} />
      <Route exact path="/pokedex" render={() => <Pokedex />} />
    </BrowserRouter>
  );
};

export default App;
