import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./components/Nav";
import Cart from "./pages/Cart";
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"

function App() {
  return (
    <div className="App">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous"></link>
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path = "/" component ={Home}></Route>
            <Route exact path= "/cart" component={Cart}></Route>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/Signup" component={Signup}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
