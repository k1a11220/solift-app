import React from "react";
import { Image, Text, View } from "react-native";
import styled from "styled-components/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import BenefitIcon from "../../assets/BenefitIcon";
import ExploreIcon from "../../assets/ExploreIcon";
import HomeIcon from "../../assets/HomeIcon";
import MoreIcon from "../../assets/MoreIcon";
import BenefitScreen from "../../screens/BenefitScreen";
import HomeScreen from "../../screens/HomeScreen";
import MoreScreen from "../../screens/MoreScreen";
import StudyScreen from "../../screens/StudyScreen";

const ItemContainer = styled.View`
  align-items: center;
  flex: 1;
  padding-top: 6px;
  width: 100%;
`;

const ItemLabel = styled.Text`
  font-size: 11px;
  margin-top: 5px;
  color: ${(props) => (props.focused ? "#2A364E" : "#717989")};
`;

const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#2A364E",
          tabBarInactiveTintColor: "#CCCFD4",
          tabBarStyle: {
            borderTopWidth: 2,
            borderTopColor: "#F2F3F5",
          },
          tabBarShowLabel: false,
        }}
      >
        <Tab.Screen
          name="홈"
          component={HomeScreen}
          options={{
            title: "홈",
            headerShown: false,
            tabBarIcon: ({ size, focused, color }) => {
              return (
                <ItemContainer>
                  <HomeIcon fillColor={color} />
                  <ItemLabel focused={focused}>홈</ItemLabel>
                </ItemContainer>
              );
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
              return (
                <ItemContainer>
                  <BenefitIcon fillColor={color} />
                  <ItemLabel focused={focused}>혜택</ItemLabel>
                </ItemContainer>
              );
            },
          }}
        />
        <Tab.Screen
          name="자기계발"
          component={StudyScreen}
          options={{
            title: "자기계발",
            headerShown: false,
            tabBarIcon: ({ size, focused, color }) => {
              return (
                <ItemContainer>
                  <ExploreIcon fillColor={color} />
                  <ItemLabel focused={focused}>자기계발</ItemLabel>
                </ItemContainer>
              );
            },
          }}
        />
        <Tab.Screen
          name="더보기"
          component={MoreScreen}
          options={{
            title: "더보기",
            headerShown: false,
            tabBarIcon: ({ size, focused, color }) => {
              return (
                <ItemContainer>
                  <MoreIcon fillColor={color} />
                  <ItemLabel focused={focused}>더보기</ItemLabel>
                </ItemContainer>
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabNav;
