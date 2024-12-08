import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'; // Import the CSS file

// Declare a number variable
const number = 10000;
const elem = <span>React Element</span>;

// Create a title component using JSX
const Title = (
  <h1 className="head" tabIndex="5">
    {elem} {/* Render the React element */}
    Namaste React using JSX
  </h1>
);

// Functional component
const HeadingComponent = () => {
  return (
    <div id="container">
      <h2>{number}</h2> {/* Display the number */}
      <h1>{100 + 200}</h1> {/* Display the result of the expression */}
      {Title} {/* Display the Title component */}
      <h1 className="heading">Namaste React Functional Component</h1>
    </div>
  );
};

// Render the functional component
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
