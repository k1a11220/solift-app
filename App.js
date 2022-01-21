// In App.js in a new project

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import BenefitScreen from "./screens/BenefitScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const Tab = createBottomTabNavigator();

const cache = new InMemoryCache();

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache,
  defaultOptions: { watchQuery: { fetchPolicy: "cache-and-network" } },
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <SafeAreaView />
      <NavigationContainer
        screenOptions={{
          tabBarStyle: {},
        }}
      >
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: "#2A364E", // 탭 활성
            inactiveTintColor: "#CCCFD4", // 탭 비활성
          }}
        >
          <Tab.Screen
            name="홈"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name="혜택"
            component={BenefitScreen}
            options={{ headerShown: false }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}
