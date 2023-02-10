import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { NavLink } from "react-router-dom";

export default function Book({ book, id }) {
  return (
    <Card sx={{ width: 345, margin: 5 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={book.thumbnailUrl}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {book.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {book.authors}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <NavLink to={"/books/" + id}>
          <Button size="small" color="primary">
            Read More...
          </Button>
        </NavLink>
      </CardActions>
    </Card>
  );
}
