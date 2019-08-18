import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
function Item({ match }) {
  useEffect(() => {
    fetchItem();

    //using the brackets means that this will run when the component mounts.
  }, []);

  const [book, setBook] = useState([]);
  const fetchItem = async () => {
    const data = await fetch(
      `https://api.nytimes.com/svc/books/v3/reviews.json?title=${
        match.params.title
      }&api-key=${process.env.REACT_APP_NYT_API_KEY}`
    );
    const review = await data.json();
    console.log(review);
  };
  return (
    <div>
      <h1>Book details</h1>
    </div>
  );
}

export default Item;
/*
https://api.nytimes.com/svc/books/v3/reviews.json?author=Stephen+King&api-key=yourkey
*/
