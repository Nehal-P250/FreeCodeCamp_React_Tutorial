import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";

//importing seperated files
//1> this is named import
import { books } from "./books_data.js";
//2> default export
//fomr Book.js we are exporting Book but here
//we can call it as Abc etc , and everyting will still
//work , this is advantage of default export
//e.g. ==> import Abc from "./Book"  will also work
import Book from "./Book.js";

//importing from other folder
import { greeting } from "./testing/testing";

function BookList() {
  console.log(greeting);
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));
