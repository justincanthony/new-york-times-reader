import React, { useState, useEffect } from 'react';
import './SingleStoryContainer.css';
import { getTopStories } from '../../apiCalls';
import { FullStoryCard } from '../FullStoryCard/FullStoryCard';

export const SingleStoryContainer = ({ story }) => {
  console.log(story);
  return <FullStoryCard story={story} />;
};
