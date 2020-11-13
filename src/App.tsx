import React from 'react';
import { useRoutes } from 'hookrouter';
import Header from 'components/Header';
import Footer from 'components/Footer/Footer';
import routes from 'routes';
import NotFoundPage from './pages/NotFound';

const App = () => {
  const match = useRoutes(routes);
  return match ? (
    <>
      <Header />
      {match}
      <Footer />
    </>
  ) : (
    <NotFoundPage />
  );
};
export default App;
