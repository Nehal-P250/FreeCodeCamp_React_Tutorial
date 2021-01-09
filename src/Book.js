// file to save components

import React from "react";

const Book = (props) => {
  console.log(props);
  const { title, author, img, children } = props;
  const clickHandler = (e) => {
    alert("hello world");
    console.log(e);
    console.log(e.target);
  };

  const complexHandler = (author) => {
    console.log(author);
  };

  return (
    <article className="book">
      <img src={img} alt="" />

      <h1
        onClick={() => {
          console.log(title);
        }}
      >
        {title}
      </h1>
      <h4>{author}</h4>

      <button type="button" onClick={clickHandler}>
        example
      </button>

      <button type="button" onClick={() => complexHandler(author)}>
        complex_example
      </button>
    </article>
  );
};
//default export
export default Book;
