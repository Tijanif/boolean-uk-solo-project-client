import { Switch, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';

function App() {
  return (
    <Switch>
      <Route path='/' exact>
        <LandingPage />
      </Route>
      <Route>
        <h3>Error 404 - mock mock</h3>
      </Route>
    </Switch>
  );
}

export default App;
