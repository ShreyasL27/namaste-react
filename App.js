/*
<div id="parent">
    <div id="child">
        <h1>Hello World!</h1>
        <p>This is a paragraph</p>
    </div>
</div>
*/

const elements = React.createElement(
  "div",
  { id: "parent" },
    React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "Hello World!"),
    React.createElement("p", { id: "para" }, "This is a paragraph"),
  ])
);

// const heading = React.createElement("h1", {id : "heading"}, "Hello World! by React using CDN");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(elements);
