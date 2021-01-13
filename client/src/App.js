import React from "react";
import Nav from "./components/Nav";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous"></link>
      <Nav />
      <Cart />
    </div>
  );
}

export default App;
