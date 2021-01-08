import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";
//1
// it is a stateless functional component
// it ALWAYS returns JSX  it can be empty tags as well

const books = [
  {
    img:
      "https://images-eu.ssl-images-amazon.com/images/I/81l3rZK4lnL._AC_UL200_SR200,200_.jpg",
    title: "Ikigai",
    author: "Héctor García",
  },
  {
    img:
      "https://images-eu.ssl-images-amazon.com/images/I/81l3rZK4lnL._AC_UL200_SR200,200_.jpg",
    title: "Ikigai",
    author: "Héctor García",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        {
          /* Method 1 ==> here we are not using the Book component rather 
        simply rendering what ever is visible */
        }
        {
          /* const { img, title, author } = book; */
        }
        {
          /* return (
          <div>
            <img src={img} alt=""></img>
            <h1>{title}</h1>
            <h3>{author}</h3>
          </div>
        ); */
        }

        {
          /* Method 2 ==> Using Book component and passing
         in the book object from the book list */
        }
        return <Book book_obj={book}></Book>;
      })}
    </section>
  );
}

//the props objec can be destrucuted in function arguments itsefl
//like const Book = ({title,author,img}) =>{...}
const Book = (props) => {
  console.log(props);
  //destructuring the props object ,
  //to get individual properties
  const { title, author, img, children } = props.book_obj;
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
