import React from 'react';
// import { Box } from '@mui/system';
import './ArticleContainer.css';
import { ArticleCard } from '../ArticleCard/ArticleCard';
import { v4 as uuidv4 } from 'uuid';

export const ArticleContainer = ({ topStories, setIsHome }) => {
  setIsHome(true);
  const newsCards = topStories.map((story) => (
    <ArticleCard key={uuidv4()} article={story} />
  ));

  return (
    <React.Fragment>
      <section className="articleContainer">{newsCards}</section>
    </React.Fragment>
  );
};
