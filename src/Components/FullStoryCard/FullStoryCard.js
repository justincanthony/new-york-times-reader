import React from 'react';
import './FullStoryCard.css';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

export const FullStoryCard = ({ story }) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5">{story.title}</Typography>
        <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
          <p>{story.abstract}</p>
        </Typography>
      </CardContent>
      <Link to="/">
        <Button>Go Back</Button>
      </Link>
    </Card>
  );
};
