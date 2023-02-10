import React from "react";
import { useContext } from "react";
import { UserContext } from "../../context";
import Book from "../../components";
import { Grid } from "@mui/material";

const BookList = () => {
  const { books } = useContext(UserContext);
  return (
    <Grid container>
      {books.map((book, i) => (
        <Book book={book} id={i} />
      ))}
    </Grid>
  );
};

export default BookList;
