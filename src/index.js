import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
/* import './images/book-1.jpg'; */
/* import App from './App';
import reportWebVitals from './reportWebVitals'; */


const firstBook = {
  author: 'Laura Nowlin',
  title: 'If Only I Had Told Her',
  image: './images/book-1.jpg',
};

const secondBook = {
  author: 'Steven Carroll',
  title: 'Death of a Foreign Gentleman',
  image: './images/book-2.jpg',
};

function BookList() {
  return (
    <section className='booklist'>
      <Book 
        author = {firstBook.author}
        title = {firstBook.title}
        image = {firstBook.image}
      />
      <Book
        author = {secondBook.author}
        title = {secondBook.title}
        image = {secondBook.image}
      />
      {/* <Book />
      <Book />
      <Book />
      <Book /> */}
    </section>
  );
}

const Book = ({author, title, image}) => {
  return (
    <article className='book'>
      <img src= {image} alt= {title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
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
