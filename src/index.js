import React from "react";
import ReactDom from "react-dom";

//1
// it is a stateless functional component
// it ALWAYS returns JSX  it can be empty tags as well

function BookList() {
  return (
    <section>
      This is a BookList!
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article>
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

const Author = () => <h4>Héctor García</h4>;
//2
ReactDom.render(<BookList />, document.getElementById("root"));
