import React, { FC } from 'react';
import cn from 'classnames';
import s from './App.module.scss';

const App: FC = () => {
  return <div className={cn(s.header)}>THiS iiiis SPARTA!</div>;
};

export default App;
