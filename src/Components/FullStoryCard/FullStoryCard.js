import React from 'react';
import './FullStoryCard.css';
import dayjs from 'dayjs';

import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import { CardMedia } from '@mui/material';

export const FullStoryCard = ({ story, setIsHome }) => {
  const { title, abstract, multimedia, published_date, byline, section, url } =
    story;

  setIsHome(false);

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ background: '#f6f6f6' }}
        >
          {section.toUpperCase()}
        </Typography>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {byline}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Published {dayjs(published_date).format('MMM D, YYYY [at] h:mm A')}
        </Typography>
        <CardMedia
          component="img"
          height="auto"
          image={multimedia[0].url}
          alt="{multimedia[0].caption}"
        />
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {multimedia[0].caption}
        </Typography>
        <br />
        <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
          {abstract}
        </Typography>
        <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
          To view this story please visit <a href={url}>The New York Times</a>
        </Typography>
      </CardContent>
      <Link to="/">
        <Button variant="inherit">Go Back</Button>
      </Link>
    </Card>
  );
};
