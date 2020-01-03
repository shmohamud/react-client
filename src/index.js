import React from "react";
import { render } from "react-dom";
import { ApolloProvider } from "react-apollo";
import { ApolloClient, HttpLink, InMemoryCache } from "apollo-client-preset";
import App from "./App/index.jsx";
import * as serviceWorker from "./serviceWorker";
import { node } from "prop-types";

const httpLink = new HttpLink({ uri: "http://localhost:4000/graphql" });

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache({ addTypename: false }),
  connectToDevTools:false
});

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
