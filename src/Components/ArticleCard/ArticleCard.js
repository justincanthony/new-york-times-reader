import React from 'react';
import './ArticleCard.css';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export const ArticleCard = ({ article }) => {
  const {
    multimedia,
    uri,
    publish_date,
    section,
    title,
    updated_date,
    byline,
    abstract,
  } = article;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={multimedia[4].url}
          alt="{multimedia[4].caption}"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {publish_date}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

// Data Examples

// {status: 'OK', copyright: 'Copyright (c) 2021 The New York Times Company. All Rights Reserved.', section: 'home', last_updated: '2021-11-01T22:17:39-04:00', num_results: 9, …}
// copyright: "Copyright (c) 2021 The New York Times Company. All Rights Reserved."
// last_updated: "2021-11-01T22:17:39-04:00"
// num_results: 9
// results: Array(9)
// 0:
// abstract: "His remarks went viral after he repeated the chant, which is understood to be code for swearing at President Biden, during a Southwest Airlines flight."
// byline: "By Melina Delkic"
// created_date: "2021-10-31T20:06:56-04:00"
// des_facet: Array(4)
// 0: "Airlines and Airplanes"
// 1: "Pilots"
// 2: "United States Politics and Government"
// 3: "Social Media"
// length: 4
// [[Prototype]]: Array(0)
// geo_facet: []
// item_type: "Article"
// kicker: ""
// material_type_facet: ""
// multimedia: (5) [{…}, {…}, {…}, {…}, {…}]
// org_facet: (2) ['Southwest Airlines Company', 'Republican Party']
// per_facet: ['Biden, Joseph R Jr']
// published_date: "2021-10-31T20:06:56-04:00"
// section: "us"
// short_url: "https://nyti.ms/3BrcLcI"
// subsection: ""
// title: "Why a Pilot Is Under Investigation for Saying ‘Let’s Go Brandon’"
// updated_date: "2021-11-01T12:37:54-04:00"
// uri: "nyt://article/49c5702b-6ca8-5d8d-8892-32c430700e9a"
// url: "https://www.nytimes.com/2021/10/31/us/lets-go-brandon-southwest-airlines.html"
// [[Prototype]]: Object

// multimedia: Array(5)
// 0: {url: 'https://static01.nyt.com/images/2021/10/30/opinion/30Cottom-image/30Cottom-image-superJumbo.jpg', format: 'superJumbo', height: 2048, width: 2048, type: 'image', …}
// 1: {url: 'https://static01.nyt.com/images/2021/10/30/opinion/30Cottom-image/30Cottom-image-thumbStandard.jpg', format: 'Standard Thumbnail', height: 75, width: 75, type: 'image', …}
// 2: {url: 'https://static01.nyt.com/images/2021/10/30/opinion/30Cottom-image/30Cottom-image-thumbLarge.jpg', format: 'thumbLarge', height: 150, width: 150, type: 'image', …}
// 3: {url: 'https://static01.nyt.com/images/2021/10/30/opinion…ttom-image/30Cottom-image-mediumThreeByTwo210.jpg', format: 'mediumThreeByTwo210', height: 140, width: 210, type: 'image', …}
// 4:
// caption: ""
// copyright: "Diana Ejaita"
// format: "Normal"
// height: 190
// subtype: "photo"
// type: "image"
// url: "https://static01.nyt.com/images/2021/10/30/opinion/30Cottom-image/30Cottom-image-articleInline.jpg"
// width: 190
// [[Prototype]]: Object
// length: 5
// [[Prototype]]: Array(0)
