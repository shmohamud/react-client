import React from "react";
import { render } from "react-dom";
import { ApolloProvider } from "react-apollo";
import { ApolloClient, HttpLink, InMemoryCache } from "apollo-client-preset";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const httpLink = new HttpLink({ uri: "https://block-explorer-server.herokuapp.com/graphql" });
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache({ addTypename: false }),
  connectToDevTools: false
});
render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
serviceWorker.unregister();
