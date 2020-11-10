import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../../components/Button';
import Header from '../../components/Header';
import s from './Pokedex.module.scss';
import Footer from '../../components/Footer/Footer';

const Pokedex = () => {
  return (
    <div className={s.root}>
      <Header />
      <NavLink to="/">
        <Button onClick={() => {}}> Назад на Главную </Button>
      </NavLink>
      <Footer />
    </div>
  );
};

export default Pokedex;
