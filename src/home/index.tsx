import React, { useEffect, useState } from 'react';
import './home.module.scss';
import Header from '@components/Header';

export const Home = () => {

  const [books, setBooks] = useState<[]>([]);

  useEffect(() => {
    fetch('/api/books')
      .then((_) => _.json())
      .then(setBooks);
  }, []);

  return (
    <>
      <Header title='Where in the world?' />
      <h1>Home</h1>
      <ul>
        {books.map((t) => (
          <li key={t} className='book'>{t}</li>
        ))}
      </ul>
    </>
  );
};

export default Home;
