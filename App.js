// In App.js in a new project

import * as React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import BottomTabNav from "./components/navigation/BottomTabNav";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import BenefitDetail from "./screens/benefit/BenefitDetail";
import HomeScreen from "./screens/HomeScreen";

const cache = new InMemoryCache();
const Stack = createNativeStackNavigator();

const client = new ApolloClient({
  uri: "https://goonin-api.herokuapp.com/",
  cache,
  defaultOptions: { watchQuery: { fetchPolicy: "cache-and-network" } },
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <SafeAreaView />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="BenefitDetail" component={BenefitDetail} />
        </Stack.Navigator>
      </NavigationContainer>
      <BottomTabNav />
    </ApolloProvider>
  );
}
