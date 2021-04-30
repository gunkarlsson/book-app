const Pagination = ({ moviesPerPage, totalMovies, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul>
        {pageNumbers.map((number) => (
          <a
            key={number}
            onClick={() => {
              paginate(number);
            }}
            href="#"
          >
            <li>{number}</li>
          </a>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
