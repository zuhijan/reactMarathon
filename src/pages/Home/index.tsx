import React from 'react';

import Button from 'components/Button';
import Layout from 'components/Layout';
import Parallax from 'components/Parallax';
import Heading from 'components/Heading';
import { navigate } from 'hookrouter';
import { LinkEnum } from 'routes';
import s from './Home.module.scss';

const Home = () => {
  return (
    <div className={s.root}>
      <Layout className={s.contentWrap}>
        <div className={s.contentText}>
          <Heading>
            <b>Find</b> all your favorite <b>Pokemon</b>
          </Heading>
          <p>You can know the type of Pokemon, its strengths, disadvantages and abilities</p>
          <Button onClick={() => navigate(LinkEnum.POKEDEX)}>See pokemons</Button>
        </div>
        <div className={s.contentParallax}>
          <Parallax />
        </div>
      </Layout>
    </div>
  );
};

export default Home;
