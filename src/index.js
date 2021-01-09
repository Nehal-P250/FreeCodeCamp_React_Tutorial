import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";

const books = [
  {
    id: 1,
    img:
      "https://images-eu.ssl-images-amazon.com/images/I/81l3rZK4lnL._AC_UL200_SR200,200_.jpg",
    title: "Ikigai",
    author: "Héctor García",
  },
  {
    id: 2,
    img:
      "https://images-eu.ssl-images-amazon.com/images/I/81cpDaCJJCL._AC_UL200_SR200,200_.jpg",
    title: "The Psychology of Money",
    author: "Morgan Housel",
  },
  {
    id: 3,
    img:
      "https://images-eu.ssl-images-amazon.com/images/I/91bYsX41DVL._AC_UL200_SR200,200_.jpg",
    title: "Atomic Habits",
    author: "James Clear",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

const Book = (props) => {
  console.log(props);
  const { title, author, img, children } = props;

  // we need 1> attribute and 2> eventHandler to set an event handler inreact
  // use camelCase for all event like onClick instead of onclick.
  const clickHandler = (e) => {
    alert("hello world");
    console.log(e);
    console.log(e.target);
  };

  const complexHandler = (author) => {
    console.log(author);
  };

  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="" />
      {/* event handler as an inline function */}
      <h1
        onClick={() => {
          console.log(title);
        }}
      >
        {title}
      </h1>
      <h4>{author}</h4>
      {/* event handler as a refference */}
      <button type="button" onClick={clickHandler}>
        example
      </button>

      {/* if we want to pass an argument to the event handler, then doing it as shown below 
      will invoke the function at the time page is rendered */}
      {/* <button type="button" onClick={complexHandler(author)}>complex_example</button> */}

      {/* so to invoke the function when an event occur we must write it as an arrow function */}
      <button type="button" onClick={() => complexHandler(author)}>
        complex_example
      </button>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
