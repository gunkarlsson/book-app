import React, { useEffect, useState } from "react";
import axios from "axios";
import BookCard from "./BookDetails/BookCard";
import {
  PrimarySection,
  PrimaryH1,
  ResultGrid,
} from "../style/StyledComponents";

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=hello&key=${process.env.REACT_APP_GOOGLE_BOOKS_API_KEY}&maxResults=8`
      )
      .then((data) => {
        if (!data.errors) {
          setBooks(data.data.items);
        } else {
          setBooks([]);
        }
      });
  }, []);

  return (
    <PrimarySection>
      <PrimaryH1>Discover</PrimaryH1>

      {books.length > 0 && (
        <ResultGrid>
          {books.map(({ volumeInfo, id }) => {
            return <BookCard key={id} id={id} volumeInfo={volumeInfo} />;
          })}
        </ResultGrid>
      )}
    </PrimarySection>
  );
};

export default Home;
