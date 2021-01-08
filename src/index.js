import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";
//1
// it is a stateless functional component
// it ALWAYS returns JSX  it can be empty tags as well

const SampleBooks = [
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

const names = ["Hello", "World", "Hello Again"];
const newName = names.map((name) => {
  return <h1>{name}</h1>;
});
function BookList() {
  return (
    <section className="booklist">
      {/* if we try to render {SampleBooks} then we will get error as it 
  wont render as SampelBooks contains object
  on the other hand we are able to render {names} as it is string 
  array., it will be rendered plainly so to allow html formating 
  we can use map method , (shown with newNames variable.)  
  So in react we can right away render an array but it cant be an
  array of objects.*/}
      <h1>Names</h1>
      {names}
      <h2>Names with map</h2>
      {newName}
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
