import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";
//1
// it is a stateless functional component
// it ALWAYS returns JSX  it can be empty tags as well

//setup variables
const title = "Ikigai";
const author = "Héctor García";
const img =
  "https://images-eu.ssl-images-amazon.com/images/I/81l3rZK4lnL._AC_UL200_SR200,200_.jpg";

function BookList() {
  return (
    <section className="booklist">
      <Book job="developer" />
      {/* This book will have props object whihc contains 
      job : "developer" */}

      <Book title="random titile" number={22} />
      {/* This book props will have 
      title : "random title" 
      number : 22 */}

      <Book />
      {/** props object will be empty for this book 
      i.e. {}
       */}
    </section>
  );
}

//generally we use parameter name as props (properties),
//props are the argument passed to the react component
//they are passed to component via HTML attributes.
//we pass set the attributes from where we render this
//component
const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {/* U should pass some thing inside {} whihc 
      returns a value , e.g. u cant do {let x =6} 
      any thing else will work,*/}

      {/* accessing the props attributes  
      1. if some attribute is not present in props 
      object then we it will not be displayed 
      2. for example if props does not have job then it 
      will not be displayed.*/}
      <p>{props.job}</p>
      <p>{props.title}</p>
    </article>
  );
};

//2
ReactDom.render(<BookList />, document.getElementById("root"));
