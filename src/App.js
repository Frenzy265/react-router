import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import Button from './components/Button';
import WishlistItem from './components/WishlistItem';

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <WishlistItem title="Franzi" />
        <Button>+</Button>

        <Switch>
          <Route path="/" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
