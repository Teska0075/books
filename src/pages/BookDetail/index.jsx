import React from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context";

const BookDetail = () => {
  const { userName, books } = useContext(UserContext);

  const loc = useParams();
  const book = books[loc.id];

  return (
    <div>
      <img src={book.thumbnailUrl}></img>
      <h1>{userName}</h1>
      <h1>{book.title}</h1>
      <h2>{book.authors}</h2>
    </div>
  );
};

export default BookDetail;
