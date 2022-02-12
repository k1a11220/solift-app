// In App.js in a new project

import * as React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import BottomTabNav from "./components/navigation/BottomTabNav";

const cache = new InMemoryCache();

const client = new ApolloClient({
  uri: "https://goonin-api.herokuapp.com/",
  cache,
  defaultOptions: { watchQuery: { fetchPolicy: "cache-and-network" } },
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <SafeAreaView />
      <BottomTabNav />
    </ApolloProvider>
  );
}
