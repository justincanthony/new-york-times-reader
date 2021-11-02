import { Route, Switch } from 'react-router-dom';
import { ArticleContainer } from '../ArticleContainer/ArticleContainer';
import { Header } from '../Header/Header';
import './App.css';

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" render={() => <ArticleContainer />} />
        <Route
          exact
          path="/article/:uri"
          render={({ match }) => <StoryContainer uri={match.params.uri} />}
        />
      </Switch>
    </div>
  );
};
