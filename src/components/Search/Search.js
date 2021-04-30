import axios from "axios";
import React, { useState } from "react";
import Pagination from "./Pagination";
import BookCard from "../BookDetails/BookCard";
import {
  ResultGrid,
  PrimarySection,
  FormSection,
  SearchForm,
  SecondarySection,
} from "../../style/StyledComponents";
import { RiSearch2Line } from "react-icons/ri";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResult] = useState([]);

  const handleChange = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentPage(1);

    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${process.env.REACT_APP_GOOGLE_BOOKS_API_KEY}&maxResults=8`
      )
      .then((data) => {
        if (!data.errors) {
          setResult(data.data.items);
        } else {
          setResult([]);
        }
      });
  };

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage, setBooksPerPage] = useState(9);
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  // returns posts for active sites, i.e. pg 3 shows movie 30-39
  const currentBooks = result.slice(indexOfFirstBook, indexOfLastBook);
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <PrimarySection>
      <FormSection>
        <SearchForm onSubmit={handleSubmit}>
          <input type="text" onChange={handleChange} required />
          <label>
            <span>Search</span>
          </label>
          <button type="submit">
            <RiSearch2Line size="2em" title="search" />
            {/* <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 21L18 18"
                stroke="black"
                stroke-width="3"
                stroke-linecap="round"
              />
              <circle cx="9.5" cy="9.5" r="8" stroke="black" stroke-width="3" />
            </svg> */}
          </button>
        </SearchForm>
      </FormSection>

      {currentBooks.length > 0 && (
        <>
          <ResultGrid>
            {currentBooks.map(({ volumeInfo, id }) => {
              return <BookCard key={id} id={id} volumeInfo={volumeInfo} />;
            })}
          </ResultGrid>

          <Pagination
            booksPerPage={booksPerPage}
            totalBooks={result.length}
            paginate={paginate}
          />
        </>
      )}
    </PrimarySection>
  );
};

export default Search;
