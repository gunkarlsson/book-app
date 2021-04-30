import React from "react";
import { ItemCard } from "../../style/StyledComponents";
import FallbackImage from "./FallbackImage";
import { Link } from "react-router-dom";

function BookCard({
  id,
  volumeInfo: { title, imageLinks, authors, publishedDate },
}) {
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

{
  /* <svg
  width="43"
  height="47"
  viewBox="0 0 43 47"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M35.5 15.5C53 -8.00002 30 3.49998 9.50001 9.49998C-10.5 23 9.50001 55 25 43C40.5 31 18 39 35.5 15.5Z"
    stroke="black"
  />
</svg>; */
}
