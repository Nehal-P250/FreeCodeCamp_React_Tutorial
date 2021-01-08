import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";
//1
// it is a stateless functional component
// it ALWAYS returns JSX  it can be empty tags as well

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
      "https://images-eu.ssl-images-amazon.com/images/I/81l3rZK4lnL._AC_UL200_SR200,200_.jpg",
    title: "Ikigai",
    author: "Héctor García",
  },
  {
    id: 3,
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
          /* simply returning a list wiht no key (unique identifier will generate error)
        react usually needs a unique identifier for each item in the list , 
        usually we will use api which have some unique key , here we are using id as 
        unique identifier */
          {
            /* ... is spread operation whihc is sending individual attributes of book Object
         simly rest is there MOREINFOR ==> https://www.youtube.com/watch?v=DoIGxx7P-ps  */
          }
        }
        return <Book key={book.id} {...book}></Book>;
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
  const { title, author, img, children } = props;
  // the above statement .books_obj is no longer required as we are sending
  // id, src, title, author etc. using spread operator.
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
