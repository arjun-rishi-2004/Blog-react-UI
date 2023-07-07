import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useState } from 'react';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
export default function Post(props) {
 
  const [posts, setPosts] = useState([
    {
      author:"Anjishnu Ray",
      content:"Most people never realize this. And eventually they quit the game without making any effort to persist and build discipline in their life      That’s the reason why only a FEW PEOPLE are able to reach the TOP of the world. Because they control their lives. By sticking to that discipline.",
      title:"You Don’t Need More Motivation. You Need More Discipline",
      img:"https://images.pexels.com/photos/267569/pexels-photo-267569.jpeg",
      likes:0,
      showFullContent : false
  
    },  {
      author:"Anjishnu Ray",
      content:"Most people never realize this. And eventually they quit the game without making any effort to persist and build discipline in their life      That’s the reason why only a FEW PEOPLE are able to reach the TOP of the world. Because they control their lives. By sticking to that discipline.",
      title:"20 mistakes you wanna avoid in your 20s",
      img:"https://miro.medium.com/v2/resize:fit:720/format:webp/0*75FXGdm1Tm5pIRec.jpeg",
      likes:0,
      showFullContent : false

    },
    {
      author:"Godfrey The Great",
      content:"This isn’t an outlandish goal.  This is a reasonable goal you have zero chance of failing.  For instance, if you want to write a book — don’t make that your goal.  The objective will feel too big and difficult.  But if you decide to write one page everyday, that’s achievable.  In fact, it’s so easy even the worst writers in the world could do it.  It’s important to have the big goal in mind, just don’t focus on it too much.  You need to focus on the process while understanding what you’re moving ",
      title:"How To Cure Procrastination (Forever)",
      img:"https://miro.medium.com/v2/resize:fill:80:56/1*GFIzD382N90OCshUFMphkQ.jpeg",
      likes:0,
      showFullContent : false

    }, {
      author:"Anjishnu Ray",
      content:"Most people never realize this. And eventually they quit the game without making any effort to persist and build discipline in their life      That’s the reason why only a FEW PEOPLE are able to reach the TOP of the world. Because they control their lives. By sticking to that discipline.",
      title:"You Don’t Need More Motivation. You Need More Discipline",
      img:"https://images.pexels.com/photos/267569/pexels-photo-267569.jpeg",
      likes:0,
      showFullContent : false

    },
  
      
    
  ])
  const handleLike = (index) => {
    const updatedPosts = [...posts];
    updatedPosts[index].likes += 1;
    setPosts(updatedPosts);
  };

  const handleReadMore = (index) => {
    const updatedPosts = [...posts];
    updatedPosts[index].showFullContent = true;
    setPosts(updatedPosts);
  };

  return ( 
  <div className="flex justify-center">
  <div className="grid gap-4 grid-cols-1 justify-center">
  {posts.map((post, index) => (
    <Card
      key={index}
      sx={{
        width: 400,
        margin: '20px 0',
      }}
    >
      <CardActionArea>
        <CardMedia
          sx={{ minHeight: 200, maxHeight: 200 }}
          component="img"
          min-height="140"
          image={post.img}
          alt="img"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {post.title}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {post.author}
          </Typography>
          {post.showFullContent ? (
            <Typography variant="body2" color="black">
              {post.content}
            </Typography>
          ) : (
            <Typography variant="body2" color="grey" style={{ maxHeight: '60px', overflow: 'hidden' }}>
              {post.content}
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="large" color="primary" onClick={() => handleLike(index)}>
          Like {post.likes}
        </Button>
        <Button size="large" color="primary" onClick={() => handleReadMore(index)}>
          Read More
        </Button>
      </CardActions>
    </Card>
  ))}
</div>
</div>
);
}