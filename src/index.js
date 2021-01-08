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
      >
        <p>
          the props objec can be destrucuted in function arguments itsefl liek
          const Book
        </p>
      </Book>
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
    </section>
  );
}

//the props objec can be destrucuted in function arguments itsefl
//like const Book = ({title,author,img}) =>{...}
const Book = (props) => {
  console.log(props);
  //destructuring the props object ,
  //to get individual properties
  const { title, author, img, children } = props;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {/* children :  is everything kept between 
      the opening and closing tag here it is <Book> </Book>tags. */}
      {children}
    </article>
  );
};

//2
ReactDom.render(<BookList />, document.getElementById("root"));
