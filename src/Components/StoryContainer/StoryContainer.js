import { useState, useEffect } from 'react';
import './StoryContainer.css';
import { getStory } from '../../apiCalls';
import { FullStoryCard } from '../FullStoryCard/FullStoryCard';

export const StoryContainer = ({ uri }) => {
  console.log(uri);

  const [story, setStory] = useState({});
  const [error, setError] = useState('');

  const getSingleStory = (uri) => {
    getStory(uri)
      .then((data) => console.log(data))
      // .then(data => setStory(data))
      .catch((err) => setError(err));
  };

  useEffect(() => {
    getSingleStory();
  });

  return (
    <div>
      <FullStoryCard story={story} />
    </div>
  );
};
