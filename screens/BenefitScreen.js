import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import * as React from "react";
import BenefitAll from "./benefit/BenefitAll";
import BenefitCulture from "./benefit/BenefitCulture";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  background-color: #ffffff;
`;

const Tab = createMaterialTopTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="전체" component={BenefitAll} />
      <Tab.Screen name="문화" component={BenefitCulture} />
    </Tab.Navigator>
  );
}

const BenefitScreen = () => {
  return (
    <Container>
      <Tabs />
    </Container>
  );
};

export default BenefitScreen;
