import React from 'react';

import Header from 'components/Header';
import Button from 'components/Button';
import Layout from 'components/Layout';
import Parallax from 'components/Parallax';
import Footer from 'components/Footer/Footer';
import Heading from 'components/Heading';
import s from './Home.module.scss';

const Home = () => {
  return (
    <div className={s.root}>
      <Header />
      <Layout className={s.contentWrap}>
        <div className={s.contentText}>
          <Heading>
            <b>Find</b> all your favorite <b>Pokemon</b>
          </Heading>
          <p>You can know the type of Pokemon, its strengths, disadvantages and abilities</p>
          <Button>See pokemons</Button>
        </div>
        <div className={s.contentParallax}>
          <Parallax />
        </div>
      </Layout>
      <Footer />
    </div>
  );
};

export default Home;
