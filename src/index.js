import React from "react";
import ReactDom from "react-dom";

//1
// it is a stateless functional component
// it ALWAYS returns JSX  it can be empty tags as well

function Greeting() {
  return (
    <div>
      <h4>Hello World!</h4>;{/* nesting component */}
      <Person />
      <Message />
    </div>
  );
}

// Non JSX i.e directly using React.createElement
// const Greeting = () => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", {}, "Hello World!")
//   );
// };

/*  JSX RULES
 * returns single element --> i.e. the return element should have single parent
 * i.e. U cant return <div></div> <div></div> (only return 1 element.)
 * div/ section / article or Fragment
 * use camelCase for html attributes
 * className instead of class
 * close every element
 * formatting.
 */

//if function is on same line then no return keyword is required for
//arrow function
const Person = () => <h2> john doe </h2>;

const Message = () => {
  return <p>sample message </p>;
};

//2
ReactDom.render(<Greeting />, document.getElementById("root"));
