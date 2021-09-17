import { Switch, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer/Footer';
import MainPage from './Pages/MainPage';

function App() {
  return (
    <>
      <Switch>
        <Route path='/' exact>
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
