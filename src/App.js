import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import Home from './pages/Home';
import Add from './pages/Add';
import Details from './pages/Details';

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/add">
            <Add />
          </Route>
          <Route exact path="/details">
            <Details />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
