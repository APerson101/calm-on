import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import * as ROUTES from "./constants/routes"
import Filter from './components/Filter';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>

          <Route exact path ={ROUTES.LANDING} component = {Filter} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
