import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

import Nav from "./components/Nav";

// new!!! also line 15, 20, & 32
import { StoreProvider } from "./utils/GlobalState";
import Cart from "./pages/Cart";
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"

// Client
const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem('id_token')
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  },
  uri: '/graphql',
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossOrigin="anonymous"></link>
        <Router>
          <div>
            <StoreProvider>
              <Nav />
              <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/cart" component={Cart}></Route>
                <Route exact path="/login" component={Login}></Route>
                <Route exact path="/Signup" component={Signup}></Route>
              </Switch>
            </StoreProvider>
          </div>
        </Router>
      </div>
    </ApolloProvider>
  );
}

export default App;
