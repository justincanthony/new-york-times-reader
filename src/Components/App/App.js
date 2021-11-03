import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { ArticleContainer } from '../ArticleContainer/ArticleContainer';
import { getTopStories } from '../../apiCalls';
import { SingleStoryContainer } from '../SingleStoryContainer/SingleStoryContainer';
import { Header } from '../Header/Header';
import './App.css';
import { FullStoryCard } from '../FullStoryCard/FullStoryCard';

const App = () => {
  const [topStories, setTopStories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isHome, setIsHome] = useState(true);
  const [error, setError] = useState('');

  const addID = (data) => {
    return data.map((story) => ({ ...story, id: uuidv4() }));
  };

  const getStories = () => {
    getTopStories()
      .then((data) => setTopStories(addID(data.results)))
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
      <Header setIsHome={setIsHome} isHome={isHome} />
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <React.Fragment>
              {!isLoading && (
                <ArticleContainer
                  topStories={topStories}
                  setIsHome={setIsHome}
                />
              )}
              {isLoading && <p>Loading...</p>}
              {!isLoading && error && <p>whoops something went wrong</p>}
            </React.Fragment>
          )}
        />
        <Route
          exact
          path="/article/:id"
          render={({ match }) => {
            const story = topStories.find(
              (article) => article.id === match.params.id
            );
            return <FullStoryCard story={story} setIsHome={setIsHome} />;
          }}
        />
        {/* <Route render={() => <ErrorPage />} /> */}
      </Switch>
    </div>
  );
};

export default App;
