import { useState, useEffect } from 'react';
import './SingleStoryContainer.css';
import { getTopStories } from '../../apiCalls';
import { FullStoryCard } from '../FullStoryCard/FullStoryCard';
let story;

export const SingleStoryContainer = ({ title }) => {
  const [stories, setStories] = useState([]);
  const [error, setError] = useState('');

  const getStories = () => {
    getTopStories()
      .then((data) => setStories(data.results))
      .catch((err) => setError(err));
  };

  useEffect(() => {
    getStories();
  }, []);

  story = stories.find((story) => story.title === title);

  return (
    <div>
      <FullStoryCard story={story} />
    </div>
  );
};
