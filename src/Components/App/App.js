import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ArticleContainer } from '../ArticleContainer/ArticleContainer';
import { getTopStories } from '../../apiCalls';
import { SingleStoryContainer } from '../SingleStoryContainer/SingleStoryContainer';
import { Header } from '../Header/Header';
import './App.css';

const App = () => {
  const [topStories, setTopStories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const getStories = () => {
    getTopStories()
      .then((data) => setTopStories(data.results))
      .catch((err) => setError(err));
  };

  useEffect(() => {
    setIsLoading(true);
    getStories();
  }, []);

  useEffect(() => {
    setIsLoading(false);
  }, [topStories]);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <React.Fragment>
              {!isLoading && topStories && (
                <ArticleContainer topStories={topStories} />
              )}
              {isLoading && !error && <p>Loading...</p>}
              {!isLoading && error && <p>whoops something went wrong</p>}
            </React.Fragment>
          )}
        />
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
