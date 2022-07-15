import React, { useEffect, useState } from 'react';
import './detail.module.scss';

export const Detail = () => {

  const [books, setBooks] = useState<[]>([]);

  useEffect(() => {
    fetch('/api/books')
      .then((_) => _.json())
      .then(setBooks);
  }, []);

  return (
    <>
     <h1>Detail</h1>
      <ul>
        {books.map((t) => (
          <li key={t} className={'book'}>{t}</li>
        ))}
      </ul>
    </>
  );
};

export default Detail;