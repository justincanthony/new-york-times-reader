import React, { useState, useEffect } from 'react';
import { Box } from '@mui/system';
import './ArticleContainer.css';
import { ArticleCard } from '../ArticleCard/ArticleCard';
import { getTopStories } from '../../apiCalls';

let newsCards;

export const ArticleContainer = () => {
  const [topStories, setTopStories] = useState({});
  const [error, setError] = useState('');

  const getStories = () => {
    getTopStories()
      .then((data) => setTopStories(data))
      .catch((err) => setError(err));
  };

  useEffect(() => {
    getStories();
  }, []);

  const newsCards = () => {
    topStories.results.map((story) => <ArticleCard article={story} />);
  };

  return <Box component="section">{newsCards}</Box>;
};
