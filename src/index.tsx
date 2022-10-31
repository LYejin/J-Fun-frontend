import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/client";
import { App } from "./components/App";
import { HelmetProvider } from "react-helmet-async";
import "./styles/styles.css";
import { client } from "./apollo";
import "@fortawesome/fontawesome-free/js/all.js";

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
