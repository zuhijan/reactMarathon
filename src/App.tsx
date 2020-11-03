import React, { FC } from 'react';
import cn from 'classnames';
import s from './App.module.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App: FC = () => {
  return (
    <>
      <Header />
      <div className={cn(s.content, '')}>THiS iiiis SPARTA!</div>
      <Footer />
    </>
  );
};

export default App;
