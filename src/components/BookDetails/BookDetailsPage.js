import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import FallbackImage from "./FallbackImage";

function BookDetailsPage() {
  const [bookDetails, setBookDetails] = useState([]);

  let { id } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes/${id}?key=${process.env.REACT_APP_GOOGLE_BOOKS_API_KEY}`
      )
      .then((res) => {
        setBookDetails(res.data);
        console.log(bookDetails);
      });
  }, []);

  const {
    volumeInfo: { title, imageLinks, authors, publishedDate },
  } = bookDetails;

  return (
    <>
      <div>
        {imageLinks ? (
          <img src={imageLinks.thumbnail} alt={title} />
        ) : (
          <FallbackImage alt={title} />
        )}
        <h1>{id}</h1>
        <p>{title}</p>
        <p>{authors}</p>
        <p>{publishedDate}</p>
      </div>
    </>
  );
}

export default BookDetailsPage;
