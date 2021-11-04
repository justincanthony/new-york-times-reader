import React from 'react';
import './ArticleCard.css';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export const ArticleCard = ({ article }) => {
  const { multimedia, published_date, title, id, byline, section } = article;

  return (
    <Link to={`/article/${id}`} className="articleCard">
      <Card sx={{ maxWidth: 345, height: 460 }}>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ background: '#f6f6f6' }}
        >
          {section.toUpperCase()}
        </Typography>
        <CardActionArea>
          <CardMedia
            component="img"
            height="250"
            image={multimedia[0].url}
            alt="{multimedia[0].caption}"
          />
          <CardContent sx={{ marginLeft: '2px' }}>
            <Typography
              sx={{ background: '#f6f6f6', marginBottom: '0' }}
              gutterBottom
              variant="h6"
              component="div"
            >
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {byline}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Published{' '}
              {dayjs(published_date).format('MMM D, YYYY [at] h:mm A')}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};
