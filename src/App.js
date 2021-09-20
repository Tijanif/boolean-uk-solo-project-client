import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import Footer from './components/Footer/Footer';
import MainPage from './Pages/MainPage';
import NologinHeader from '../src/components/Header/NologinHeader';
import LogoutHeader from '../src/components/Header/LogoutHeader';
import useStore from './store';

function App() {
  const loggedInUser = useStore((state) => state.loggedInUser);

  return (
    <>
      <Switch>
        <Route path='/' exact>
          {loggedInUser ? <LogoutHeader /> : <NologinHeader />}

          <LandingPage />
        </Route>
        <Route path='/main' exact>
          <MainPage />
        </Route>
        <Route>
          <h3>Error 404 - mock mock</h3>
        </Route>
      </Switch>

      <Footer />
    </>
  );
}

export default App;
