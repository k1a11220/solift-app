import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Image } from "react-native";
import BenefitIcon from "../../assets/BenefitIcon";
import HomeIcon from "../../assets/HomeIcon";
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
        screenOptions={{
          tabBarActiveTintColor: "#2A364E",
          tabBarInactiveTintColor: "#CCCFD4",
        }}
      >
        <Tab.Screen
          name="홈"
          component={HomeScreen}
          options={{
            title: "홈",
            headerShown: false,
            tabBarIcon: ({ size, focused, color }) => {
              return <HomeIcon fillColor={color} />;
            },
          }}
        />
        <Tab.Screen
          name="혜택"
          component={BenefitScreen}
          options={{
            title: "혜택",
            headerShown: false,
            tabBarIcon: ({ size, focused, color }) => {
              return <BenefitIcon fillColor={color} />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabNav;
