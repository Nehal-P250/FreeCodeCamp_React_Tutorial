import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";
//1
// it is a stateless functional component
// it ALWAYS returns JSX  it can be empty tags as well

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => {
  return (
    <img
      src="https://images-eu.ssl-images-amazon.com/images/I/81l3rZK4lnL._AC_UL200_SR200,200_.jpg"
      alt=""
    />
  );
};

const Title = () => <h1>Ikigai</h1>;

//IT uses JSX style
const Author = () => (
  <h4 style={{ color: "#617d89", fontsize: "0.75rem", marginTop: "0.25rem" }}>
    Héctor García
  </h4>
);
//2
ReactDom.render(<BookList />, document.getElementById("root"));
