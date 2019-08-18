import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
function Shop() {
  useEffect(() => {
    fetchItems();
    //using the brackets means that this will run when the component mounts.
  }, []);

  const [books, setBooks] = useState([]);
  const fetchItems = async () => {
    const data = await fetch(
      `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${
        process.env.REACT_APP_NYT_API_KEY
      }`
    );

    const books = await data.json();

    setBooks(books.results.books);
    console.log(books.results.books);
  };
  return (
    <div>
      <h1> Shop</h1>
      {books.map(({ title, rank, image }) => {
        return (
          <h1 key={rank}>
            <Link to={`/shop/${title}`}>{title}</Link>
          </h1>
        );
      })}
    </div>
  );
}

export default Shop;
/*

*/
