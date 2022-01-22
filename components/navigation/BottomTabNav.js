import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import BenefitScreen from "../../screens/BenefitScreen";
import HomeScreen from "../../screens/HomeScreen";

const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
  return (
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
  );
};

export default BottomTabNav;
