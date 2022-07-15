import React, { useEffect, useState } from 'react';
import './home.module.scss';

export const Home = () => {

  const [books, setBooks] = useState<[]>([]);

  useEffect(() => {
    fetch('/api/books')
      .then((_) => _.json())
      .then(setBooks);
  }, []);

  return (
    <>
     <h1>Home</h1>
      <ul>
        {books.map((t) => (
          <li key={t} className={'book'}>{t}</li>
        ))}
      </ul>
    </>
  );
};

export default Home;