import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../../components/Button';

const Pokedex = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1, height: '100vh' }}>
      <NavLink to="/">
        <Button onClick={() => {}}> Назад на Главную </Button>
      </NavLink>
    </div>
  );
};

export default Pokedex;
