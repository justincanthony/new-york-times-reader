import { Route, Switch } from 'react-router-dom';
import { ArticleContainer } from '../ArticleContainer/ArticleContainer';
import { SingleStoryContainer } from '../SingleStoryContainer/SingleStoryContainer';
import { Header } from '../Header/Header';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" render={() => <ArticleContainer />} />
        <Route
          path="/article/:title"
          render={({ match }) => {
            return <SingleStoryContainer title={match.params.title} />;
          }}
        />
        {/* <Route render={() => <ErrorPage />} /> */}
      </Switch>
    </div>
  );
};

export default App;
