import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";
//1
// it is a stateless functional component
// it ALWAYS returns JSX  it can be empty tags as well

const firstBook = {
  img:
    "https://images-eu.ssl-images-amazon.com/images/I/81l3rZK4lnL._AC_UL200_SR200,200_.jpg",
  title: "Ikigai",
  author: "Héctor García",
};

function BookList() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
    </section>
  );
}

const Book = (props) => {
  console.log(props);
  const { title, author, img } = props;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

//2
ReactDom.render(<BookList />, document.getElementById("root"));
