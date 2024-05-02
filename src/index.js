import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
/* import './images/book-1.jpg'; */
/* import App from './App';
import reportWebVitals from './reportWebVitals'; */


const books = [{
  author: 'Laura Nowlin',
  title: 'If Only I Had Told Her',
  image: './images/book-1.jpg',
  id: 1,
}, {
  author: 'Steven Carroll',
  title: 'Death of a Foreign Gentleman',
  image: './images/book-2.jpg',
  id: 2,
}
];

function BookList() {
  const getBook = (id) => {
    const book = books.find((book) => book.id === id);
    console.log(book);
  }
  return (
    <section className='booklist'>
      {books.map((book) => {
        /* const {image, title, author} = book; */
        return <Book {...book} key = {book.id} getBook = {getBook} />;
      })}
    </section>
  );
}

const Book = (props) => {
  const { image, title, author, getBook, id} = props;
  /* const getSingleBook = () => {
    getBook(id);
  } */
  //console.log(props);
  return (
    <article className='book'>
      <img src= {image} alt= {title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <button onClick={() => {getBook(id)}}>display title</button>
      {/* {children} */}
    </article>
  );
}

/* const Author = () => {
  const inlineHeadingStyles = {
    color: '#617d98',
    fontSize: '0.75rem',
    marginTop: '0.5rem',
    letterSpacing: '.125rem',
  };
  return <h4 style={inlineHeadingStyles}></h4>;
}; */

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
