import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <h1 id="title" key="h1">
    Heading
  </h1>
);

const HeaderComponent = () => {
  return (
    <div>
      <Title />
      <h2>Hello there!</h2>
      <h2>This is a h2 heading</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);