// create React Element
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "This is heading component, created using React"
);

// Create nested React element
const headingOne = React.createElement(
  "div",
  { id: "div" },
  React.createElement(
    "h1",
    { id: "heading" },
    React.createElement(
      "span",
      { id: "span" },
      "This is the Text inside a heading, inside div"
    )
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(headingOne);
