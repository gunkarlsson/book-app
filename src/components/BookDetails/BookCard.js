import React from "react";
import { ItemCard } from "../../style/StyledComponents";
import FallbackImage from "./FallbackImage";
import { Link } from "react-router-dom";

function BookCard({ id, volumeInfo: { title, imageLinks, authors } }) {
  return (
    <ItemCard>
      <Link to={`books/${id}`}>
        <div className="image-bg">
          {imageLinks ? (
            <img src={imageLinks.thumbnail} alt={title} />
          ) : (
            <FallbackImage alt={title} />
          )}
        </div>
      </Link>
      <div className="text-div">
        <h2>{title}</h2>
        <span>{authors?.[0]}</span>
      </div>
    </ItemCard>
  );
}

export default BookCard;
