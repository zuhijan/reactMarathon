import React from 'react';

import Header from 'components/Header';
import Button from 'components/Button';
import s from './Home.module.scss';
import Layout from '../../components/Layout';
import Parallax from '../../components/Parallax';

const Home = () => {
  return (
    <div className={s.root}>
      <Header />
      <Layout className={s.contentWrap}>
        <div className={s.contentText}>
          <h1>FInd all your favourite Pokemon</h1>
          <p>You can know the type of Pokemon, its strengths, disadvantages and abilities</p>
          <Button onClick={() => {}}>See pokemons</Button>
        </div>
        <div className={s.contentParallax}>
          <Parallax />
        </div>
      </Layout>
    </div>
  );
};

export default Home;
