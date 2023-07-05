import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useState } from 'react';

export default function Post(props) {
  const posts=[
    {
      author:"Anjishnu Ray",
      content:"Most people never realize this. And eventually they quit the game without making any effort to persist and build discipline in their life      That’s the reason why only a FEW PEOPLE are able to reach the TOP of the world. Because they control their lives. By sticking to that discipline.",
      title:"You Don’t Need More Motivation. You Need More Discipline",
      img:"https://images.pexels.com/photos/267569/pexels-photo-267569.jpeg",
  
    },  {
      author:"Anjishnu Ray",
      content:"Most people never realize this. And eventually they quit the game without making any effort to persist and build discipline in their life      That’s the reason why only a FEW PEOPLE are able to reach the TOP of the world. Because they control their lives. By sticking to that discipline.",
      title:"You Don’t Need More Motivation. You Need More Discipline",
      img:"https://images.pexels.com/photos/267569/pexels-photo-267569.jpeg",
  
    },
    {
      author:"Anjishnu Ray",
      content:"Most people never realize this. And eventually they quit the game without making any effort to persist and build discipline in their life      That’s the reason why only a FEW PEOPLE are able to reach the TOP of the world. Because they control their lives. By sticking to that discipline.",
      title:"You Don’t Need More Motivation. You Need More Discipline",
      img:"https://images.pexels.com/photos/267569/pexels-photo-267569.jpeg",
  
    }, {
      author:"Anjishnu Ray",
      content:"Most people never realize this. And eventually they quit the game without making any effort to persist and build discipline in their life      That’s the reason why only a FEW PEOPLE are able to reach the TOP of the world. Because they control their lives. By sticking to that discipline.",
      title:"You Don’t Need More Motivation. You Need More Discipline",
      img:"https://images.pexels.com/photos/267569/pexels-photo-267569.jpeg",
  
    },
    {
      author:"Anjishnu Ray",
      content:"Most people never realize this. And eventually they quit the game without making any effort to persist and build discipline in their life      That’s the reason why only a FEW PEOPLE are able to reach the TOP of the world. Because they control their lives. By sticking to that discipline.",
      title:"You Don’t Need More Motivation. You Need More Discipline",
      img:"https://images.pexels.com/photos/267569/pexels-photo-267569.jpeg",
  
    }
    
  ]

  return (
    <div className="grid gap-4 grid-cols-3">
    {posts.map((post, index) => (
      <Card sx={{ minWidth: 100, maxWidth: 445 }} className="mt-50" key={index}>
        <CardActionArea>
          <CardMedia component="img" height="140" image={post.img} alt="img" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {post.title}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              {post.author}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {post.content}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Read More
          </Button>
        </CardActions>
      </Card>
    ))}
  </div>
  );
}