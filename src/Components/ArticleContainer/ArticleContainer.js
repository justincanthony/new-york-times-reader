import React, { useState, useEffect } from 'react';
import { Box } from '@mui/system';
import './ArticleContainer.css';
import { ArticleCard } from '../ArticleCard/ArticleCard';
import { getTopStories } from '../../apiCalls';
import { v4 as uuidv4 } from 'uuid';

let newsCards;

export const ArticleContainer = () => {
  const [topStories, setTopStories] = useState([]);
  const [error, setError] = useState('');

  const getStories = () => {
    getTopStories()
      .then((data) => setTopStories(data.results))
      .catch((err) => setError(err));
  };

  useEffect(() => {
    getStories();
  }, []);

  newsCards = topStories.map((story) => (
    <ArticleCard key={uuidv4()} article={story} />
  ));

  return <section component="section">{newsCards}</section>;
};
