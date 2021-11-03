import React, { useState, useEffect } from 'react';
import './SingleStoryContainer.css';
import { getTopStories } from '../../apiCalls';
import { FullStoryCard } from '../FullStoryCard/FullStoryCard';

export const SingleStoryContainer = ({ title }) => {
  console.log(title);
  const [stories, setStories] = useState([]);
  const [story, setStory] = useState({});
  const [error, setError] = useState('');

  const getStories = () => {
    getTopStories()
      .then((data) => setStories(data.results))
      .catch((err) => setError(err));
  };

  useEffect(() => {
    getStories();
  }, []);

  useEffect(() => {
    setStory(stories.find((story) => story.title === title));
  }, [stories, title]);

  return (
    <React.Fragment>{story && <FullStoryCard story={story} />}</React.Fragment>
  );
};
