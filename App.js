// In App.js in a new project

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import BenefitScreen from "./screens/BenefitScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer
      screenOptions={{
        tabBarStyle: { position: "absolute" },
        tabBarActiveTintColor: "#2A364E",
      }}
    >
      <Tab.Navigator>
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
  );
}
