import React from 'react';
import './FullStoryCard.css';
import dayjs from 'dayjs';

import { Link, Redirect } from 'react-router-dom';
import Card from '@mui/material/Card';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import { CardMedia } from '@mui/material';

export const FullStoryCard = ({ story, setIsHome }) => {
  setIsHome(false);

  return (
    <React.Fragment>
      {!story && <Redirect to="/" />}
      {story && (
        <section className="fullStoryWrapper">
          <Card variant="outlined">
            <CardContent>
              <br />
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ background: '#f6f6f6' }}
              >
                {story.section.toUpperCase()}
              </Typography>
              <br />
              <Typography variant="h5">{story.title}</Typography>
              <Typography variant="body2" color="text.secondary">
                {story.byline}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {dayjs(story.published_date).format('MMM D, YYYY [at] h:mm A')}
              </Typography>
              <br />
              <CardMedia
                component="img"
                width="500"
                height="auto"
                image={story.multimedia[0].url}
                alt="{multimedia[0].caption}"
              />
              <Typography variant="body2" color="text.secondary" gutterBottom>
                {story.multimedia[0].caption}
              </Typography>
              <br />
              <Typography
                sx={{ fontSize: 16 }}
                color="text.secondary"
                gutterBottom
              >
                {story.abstract}
              </Typography>
              <br />
              <Typography
                sx={{ fontSize: 16 }}
                color="text.secondary"
                gutterBottom
              >
                To view this story please visit{' '}
                <a href={story.url}>The New York Times</a>
              </Typography>
            </CardContent>
            <Link to="/">
              <Button variant="inherit">Go Back</Button>
            </Link>
            <br />
            <br />
          </Card>
        </section>
      )}
    </React.Fragment>
  );
};
