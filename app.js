const Tag = React.createElement(
  "div",
  { className: "parent" },
  React.createElement(
    "div",
    { className: "child" },[
      React.createElement("h1", { className: "head" }, "I am nested H1"),
      React.createElement("h2", { className: "head" }, "I am nested H2"),
      React.createElement("h3", { className: "head" }, "I am nested H3"),
    ]
    
  )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(Tag);
