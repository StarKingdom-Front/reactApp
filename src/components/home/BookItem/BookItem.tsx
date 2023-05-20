import React from 'react'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { IBook } from '../../../../modals';


export default function BookItem({ book } : {book: IBook}) {
  return (
    <div>
        <Card key={book.id} style={{width: '400px'}}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {book.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {book.desc1}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Category: {book.category}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to='/'>Back</Link>
          <Link to={`/book/${book.id}`}>Learn More</Link>
        </CardActions>
      </Card>
    </div>
  )
}
