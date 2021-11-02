import React, { useState, useEffect } from 'react';
import { Box } from '@mui/system';
import './ArticleContainer.css';
import { ArticleCard } from '../ArticleCard/ArticleCard';
import { getTopStories } from '../../apiCalls';

export const ArticleContainer = () => {
  const [stories, setStories] = useState([]);
  const [error, setError] = useState('');

  const getStories = () => {
    getTopStories()
      .then((data) => setStories(data))
      .catch((err) => setError(err));
  };

  useEffect(() => {
    getStories();
  }, []);

  return <Box component="section">{newsCards}</Box>;
};
